import { Provider } from '../api-models'

class LocalStorageProvider<T extends { id: string }> implements Provider<T> {
    readonly code = 'Local Storage';

    private readonly key: string = 'CardList';

    constructor() {
        if (!localStorage.getItem(this.key)) {
            localStorage.setItem(this.key, JSON.stringify([]))
        }
    }

    getAll(): Promise<T[]> {
        return new Promise<T[]>((resolve) => {
            const unparsedData = localStorage.getItem(this.key)
            if (unparsedData) {
                resolve(JSON.parse(unparsedData) as T[])
            }
            resolve([])
        })
    }

    getById(id: string): Promise<T | null> {
        return new Promise<T | null>(async (resolve) => {
            const list = await this.getAll()
            resolve(list.find((card) => card.id === id) || null)
        })
    }

    create(body: T): Promise<T[]> {
        return new Promise<T[]>(async (resolve) => {
            const parsedData = await this.getAll()
            parsedData.push(body)
            this.save(parsedData)
            resolve(parsedData)
        })
    }

    async delete(id: string): Promise<void> {
        const parsedData = await this.getAll()
        const updated = parsedData.filter((d) => d.id !== id)
        this.save(updated)
    }

    edit(id: string, body: T): Promise<T[]> {
        return new Promise<T[]>(async (resolve) => {
            const parsedData = await this.getAll()
            const updated = parsedData.map((d) => (d.id === id ? { ...d, ...body } : d))
            this.save(updated)
            resolve(updated)
        })
    }

    private save(data: T[]): void {
        localStorage.setItem(this.key, JSON.stringify(data))
    }
}

export default LocalStorageProvider

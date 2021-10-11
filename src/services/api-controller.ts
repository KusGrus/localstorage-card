import { Controller, Provider } from './api-models'

class ApiController<T> implements Controller<T> {
    constructor(private readonly provider: Provider<T>) {
    }

    getAll(): Promise<T[]> {
        return this.provider.getAll()
    }

    getById(id: string): Promise<T | null> {
        return this.provider.getById(id)
    }

    create(body: T): Promise<T[]> {
        return this.provider.create(body)
    }

    edit(id: string, body: T): Promise<T[]> {
        return this.provider.edit(id, body)
    }

    delete(id: string): void {
        this.provider.delete(id)
    }
}

export default ApiController

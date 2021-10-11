import { ValidatorFn } from '../hooks/types'

interface ValidatorConfig {
    message?: string;
}

function max(n: number, config?: ValidatorConfig): ValidatorFn {
    return (value: string | number) => {
        const message = config?.message || ''
        if (typeof value === 'string') {
            return value.length > n ? { code: 'max', message } : null
        }
        return value > n ? { code: 'max', message } : null
    }
}

function min(n: number, config?: ValidatorConfig): ValidatorFn {
    return (value: string | number) => {
        const message = config?.message || ''
        if (typeof value === 'string') {
            return value.length < n ? { code: 'min', message } : null
        }
        return value < n ? { code: 'min', message } : null
    }
}

function required(config?: ValidatorConfig): ValidatorFn {
    return (value: string) => {
        const message = config?.message || ''
        return value.length ? null : { code: 'required', message }
    }
}

function year(minAge: number, config?: ValidatorConfig): ValidatorFn {
    return (value: string) => {
        const message = config?.message || ''
        const digitYear = parseInt(value, 10)
        if (isNaN(digitYear)) {
            return { code: 'year', message }
        }
        const currentYear = new Date().getFullYear() - minAge
        return (currentYear < digitYear || currentYear - 30 > digitYear) ? { code: 'year', message } : null
    }
}

export default {
    max,
    min,
    required,
    year
}

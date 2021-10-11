import { BaseSyntheticEvent } from 'react'

export type ValidatorFn = (value: any) => (Error | null)
export type UseFormRegisterFn = (fn?: ValidatorFn[]) => (element: HTMLInputElement) => void
export type UseFormChangeFn = (event: BaseSyntheticEvent) => void
export type UseFormSubmitFn = (fn: Function) => (event: BaseSyntheticEvent) => void
export type UseFormGetFn = (name: string) => FormControl | null
export type UseFormCheckValidityFn = () => void

export interface FormControl {
    value: any
    errors: Error[]
    validators?: ValidatorFn[]
    patchValue: (value: any) => void
    nativeElement: HTMLInputElement
}

export interface Error {
    code: string
    message?: string
}

export interface UseForm {
    register: UseFormRegisterFn
    get: UseFormGetFn
    checkValidity: UseFormCheckValidityFn
    change: UseFormChangeFn
    submit: UseFormSubmitFn
    state: { [key: string]: FormControl }
}

export interface UseFormConfig {
    defaultValue?: {[key: string]: any}
    validateOnChange?: boolean
    submitAnyway?: boolean
}

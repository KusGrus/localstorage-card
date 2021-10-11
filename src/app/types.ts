import { BaseSyntheticEvent } from 'react'
import { UserCard } from '../services/api-models'
import { FormControl, ValidatorFn } from './hooks/types'

export interface ItemProps {
    item: UserCard;
    onDelete: (id: string) => void;
}

export interface TextFieldProps {
    label: string;
    type?: string;
    name: string;
    value: string;
    error?: string;
    onChange: (event: BaseSyntheticEvent) => void;
}

export interface FormProps<T> {
    label: string;
    fields: FormFieldsOptions[];
    onSubmit: (data: T) => void
    prefill?: T
}

export interface FormFieldsOptions {
    name: string;
    label: string;
    validators?: ValidatorFn[];
    value?: string;
}


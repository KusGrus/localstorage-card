import React from 'react'
import useForm from '../hooks/useForm'
import { UserCard } from '../../services/api-models'
import { FormProps } from '../types'
import TextField from './TextField'

const Form = ({ label, fields, onSubmit, prefill }: FormProps<UserCard>) => {
    const {
        register, get, change: handleChange, submit: handleSubmit
    } = useForm({ defaultValue: prefill })

    return (
        <form className="mt-5 w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>{label}</legend>
                {fields.map((field) => (
                    <TextField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        ref={register(field.validators)}
                        error={get(field.name)?.errors[0]?.message}
                        value={get(field.name)?.value}
                        onChange={handleChange}
                    />
                ))}
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    )
}

export default Form

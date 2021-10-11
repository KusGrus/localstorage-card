import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ApiContext } from '../../context/api/apiContext'
import { UserCard } from '../../services/api-models'
import Form from '../components/Form'
import { FormFieldsOptions } from '../types'
import Validators from '../common/validators'

const AddPage = () => {
    const history = useHistory()
    const requiredText = 'This field is required'
    const [fields] = useState<FormFieldsOptions[]>([
        {
            name: 'name',
            label: 'Name',
            validators: [
                Validators.required({ message: requiredText }),
                Validators.min(2, { message: 'Must be at least 2 characters long' })
            ]
        },
        {
            name: 'surname',
            label: 'Surname',
            validators: [
                Validators.required({ message: requiredText }),
                Validators.min(2, { message: 'Must be at least 2 characters long' })
            ]
        },
        {
            name: 'date',
            label: 'Date (year)',
            validators: [
                Validators.required({ message: requiredText }),
                Validators.year(14, { message: 'Invalid date' })
            ]
        },
        { name: 'link', label: 'Link', validators: [Validators.required({ message: requiredText })] }
    ])
    const { add } = useContext(ApiContext)

    const onSubmit = async (data: UserCard) => {
        await add(data)
        history.push('/')
    }

    return (
        <>
            <Link to="/">
                <button className="btn btn-primary w-25 m-auto mt-4 d-block">Back</button>
            </Link>
            <Form label="Add user" fields={fields} onSubmit={onSubmit}/></>
    )
}

export default AddPage

import React, { useContext } from 'react'
import TextField from '../components/TextField'
import useForm from '../hooks/useForm'
import Validators from '../common/validators'
import { ApiContext } from '../../context/api/apiContext'
import { UserCard } from '../../services/api-models'

const EditPage = () => {
    const {
        register, get, change: handleChange, submit: handleSubmit
    } = useForm()
    const { add } = useContext(ApiContext)

    const nameControl = get('name')
    const surnameControl = get('surname')
    const dateControl = get('date')
    const linkControl = get('link')

    const requiredText = 'This field is required'

    const onSubmit = (data: UserCard) => {
        add(data)
    }

    return (
        <form className="mt-5 w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Add User</legend>
                <TextField
                    label="Name"
                    name="name"
                    ref={register([
                        Validators.required({ message: requiredText })
                    ])}
                    error={nameControl?.errors[0]?.message}
                    value={nameControl?.value}
                    onChange={handleChange}
                />
                <TextField
                    label="Surname"
                    name="surname"
                    ref={register([
                        Validators.required({ message: requiredText })
                    ])}
                    error={surnameControl?.errors[0]?.message}
                    value={surnameControl?.value}
                    onChange={handleChange}
                />
                <TextField
                    label="Date (year)"
                    name="date"
                    ref={register([
                        Validators.required({ message: requiredText })
                    ])}
                    error={dateControl?.errors[0]?.message}
                    value={dateControl?.value}
                    onChange={handleChange}
                />
                <TextField
                    label="Link"
                    name="link"
                    ref={register([
                        Validators.required({ message: requiredText })
                    ])}
                    error={linkControl?.errors[0]?.message}
                    value={linkControl?.value}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    )
}

export default EditPage

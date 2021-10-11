import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { ApiContext } from '../../context/api/apiContext'
import { UserCard } from '../../services/api-models'
import Form from '../components/Form'
import { FormFieldsOptions } from '../types'
import Validators from '../common/validators'

const CardPage = () => {
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
    const [user, setUser] = useState<UserCard>()
    const { get, edit } = useContext(ApiContext)
    const { id } = useParams<any>()

    useEffect(() => {
        get(id).then((res: React.SetStateAction<UserCard | undefined>) => {
            setUser(res)
        })
    }, [id])

    const onSubmit = async (data: UserCard) => {
        await edit(id, { ...user, ...data })
        history.push('/')
    }

    return (
        <>
            <Link to="/">
                <button className="btn btn-primary w-25 m-auto mt-4 d-block">Back</button>
            </Link>
            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin"
                                            className="rounded-circle p-1 bg-primary" width="110"/>
                                        <div className="mt-3">
                                            <h4>{user?.name} {user?.surname}</h4>
                                            <p className="text-secondary mb-1">ID: {user?.id}</p>
                                        </div>
                                    </div>
                                    <hr className="my-4"/>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-github me-2 icon-inline">
                                                    <path
                                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                                </svg>
                                                Github
                                            </h6>
                                            <span className="text-secondary">{user?.link}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <Form label="Edit profile" fields={fields} prefill={user} onSubmit={onSubmit}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPage

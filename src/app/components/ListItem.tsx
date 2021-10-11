import React from 'react'
import { useHistory } from 'react-router-dom'
import { ItemProps } from '../types'

const ListItem = ({
    item: {
        name, surname, date, link, id
    }, onDelete
}: ItemProps) => {
    const history = useHistory()
    const currentYear = new Date().getFullYear()
    const handleNavigate = (id: string) => history.push(`/${id}`)
    return (
        <div className="card col-4 m-4">
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                    {' '}
                    {surname}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">Date: {date} ({currentYear - date} y.o.)</h6>
                <p className="card-text">Link: {link}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={() => handleNavigate(id)}>Open</button>
                    <button className="btn btn-primary" onClick={() => onDelete(id)}>Delete</button>
                </div>

            </div>
        </div>
    )
}

export default ListItem

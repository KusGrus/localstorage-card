import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListItem from '../components/ListItem'
import { ApiContext } from '../../context/api/apiContext'
import { UserCard } from '../../services/api-models'

const ListPage = () => {
    const { getAll, remove, items } = useContext(ApiContext)

    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
            <Link to="/add">
                <button className="btn btn-primary w-25 m-auto mt-4 d-block">Add</button>
            </Link>
            <div className="row justify-content-evenly mt-4">
                {items.length
                    ? items.map((item: UserCard) => <ListItem key={item.id} item={item} onDelete={remove} />)
                    : 'List is empty'}
            </div>
        </>
    )
}

export default ListPage

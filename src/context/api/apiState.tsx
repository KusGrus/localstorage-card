import React, { PropsWithChildren, useReducer } from 'react'
import api from '../../services/index'
import { ApiContext } from './apiContext'
import { apiReducer } from './apiReducer'
import { API_ACTIONS } from '../types'
import { UserCard } from '../../services/api-models'

export const ApiState = ({ children }: PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(apiReducer, { loading: false, items: [] })

    const loading = () => dispatch({ type: API_ACTIONS.LOADING })

    const getAll = async () => {
        const payload = await api.cardListService.getAll()
        dispatch({ type: API_ACTIONS.GET, payload })
    }

    const remove = async (payload: string) => {
        await api.cardListService.delete(payload)
        dispatch({ type: API_ACTIONS.DELETE, payload })
    }

    const add = async (body: UserCard) => {
        const payload = { ...body, id: Date.now().toString() }
        await api.cardListService.create(payload)
        dispatch({ type: API_ACTIONS.CREATE, payload })
    }

    const get = async (id: string) => {
        return new Promise(async resolve => {
            const list = await api.cardListService.getAll()
            resolve(list.find(item => item.id === id))
        })
    }

    const edit = (id: string, body: UserCard) => {
        api.cardListService.edit(id, body).then(() => {
            dispatch({ type: API_ACTIONS.EDIT, payload: { id, body } })
        })
    }

    return (
        <ApiContext.Provider value={{
            loading,
            getAll,
            get,
            edit,
            remove,
            add,
            items: state?.items || []
        }}
        >
            {children}
        </ApiContext.Provider>
    )
}

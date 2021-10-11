import { Reducer } from 'react'
import { Action, API_ACTIONS, HandleObj } from '../types'

const handlers: HandleObj<API_ACTIONS> = {
    LOADING: (state) => ({ ...state, loading: true }),
    GET: (state, action) => ({ ...state, items: action?.payload }),
    CREATE: (state, action) => ({ ...state, items: [...state.items, action?.payload] }),
    EDIT: (state, action) => ({
        ...state,
        items: state.items.map((b: { id: any; }) => (b.id === action.payload.id ? action.payload.body : b))
    }),
    DELETE: (state, action) => ({ ...state, items: state.items.filter((b: { id: string }) => b.id !== action?.payload) }),
    DEFAULT: (state) => state
}

export const apiReducer: Reducer<any, Action<API_ACTIONS>> = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}


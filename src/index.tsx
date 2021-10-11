import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import App from './app/App'
import { ApiState } from './context/api/apiState'

ReactDOM.render(
    <React.StrictMode>
        <ApiState>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApiState>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

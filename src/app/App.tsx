import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListPage from './layouts/ListPage'
import CardPage from './layouts/CardPage'
import EditPage from './layouts/EditPage'
import AddPage from './layouts/AddPage'

const App = () => (
    <>
        <div className="container">
            <Switch>
                <Route path="/" exact component={ListPage} />
                <Route path="/add" exact component={AddPage} />
                <Route path="/:id" component={CardPage} />
                <Route path="/:id/edit" component={EditPage} />
            </Switch>
        </div>
    </>
)

export default App

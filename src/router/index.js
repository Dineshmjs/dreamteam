import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../component/'
import Series from '../component/match/series'

function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/series" component={Series} />
            </Switch>
        </BrowserRouter>
    )
}

export default index

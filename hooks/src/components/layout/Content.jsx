import React from 'react'
import'./Content.css'
import { Switch, Route } from 'react-router-dom'
import Hooks from '../../views/contents/Hooks'
import NaoEncontrado from '../../views/contents/NaoEncontrado'
import UseState from '../../views/contents/UseState'
import UseEffect from '../../views/contents/UseEffect'
import UseContext from '../../views/contents/UseContext'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Hooks />
                </Route>
            <Route path="/UseState">
                <UseState />
            </Route>
            <Route path="/UseEffect">
                <UseEffect />
            </Route>
            <Route path="/UseContext">
                <UseContext />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)

export default Content
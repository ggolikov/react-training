import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Hello from '../components/Hello'
import Main from '../components/Main'
import Home from '../components/Home'
import PromptContainer from '../containers/PromptContainer'

const routes = (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='playerOne' header='Player One' component={PromptContainer} />
          <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
        </Route>
      </Router>
)

export default routes;

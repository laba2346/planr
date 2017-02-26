import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { App } from './modules/App/App.js'

export default function (props = {}) {
  let history = browserHistory

  if (props.store) {
    history = syncHistoryWithStore(browserHistory, props.store)
  }

  return (
    <Router history={history}>
      <Route path='/'>
        <IndexRoute component={App} />
            <Route path='*' />
      </Route>
    </Router>
  )
}

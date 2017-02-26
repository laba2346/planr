import Express from 'express';
import React from 'react'
import { match } from 'react-router'
import { renderToString } from 'react-dom/server'
import { RouterContext } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import routes  from '../client/routes';
import reducers from '../client/reducers';

import { Sequelize } from 'sequelize';
import models from './models';

const app = Express();
const port = 3000;


app.get('*', (req, res, next) => {
  match({ routes: routes(), location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) return next(err)

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    if (!renderProps) {
      return next(new Error('Missing render props'))
    }

    const components = renderProps.components

    // If the component being shown is our 404 component, then set appropriate status
    if (components.some((c) => c && c.displayName === 'error-404')) {
      res.status(404)
    }

    const Comp = components[components.length - 1].WrappedComponent
    const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve())

    const initialState = {}
    const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
    const { location, params, history } = renderProps

    fetchData({ store, location, params, history })
      .then(() => {
        const body = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )

        const state = store.getState()

        res.send(`<!DOCTYPE html>
          <html>
            <head>
            </head>
            <body>
              <div id="root">${body}</div>
              <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
            </body>
          </html>`)
      })
      .catch((err) => next(err))
  })
})


models.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log('Planr is running on localhost:' + port + '!');
  });
});

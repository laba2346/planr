/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Container from './modules/Container/Container';
import Landing from './modules/Landing/pages/Landing';


// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Landing/pages/Landing');
  require('./modules/Landing/components/SignUp/SignUp');
  require('./modules/Landing/components/Description/Description');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
    <Route path="/" component={Container}>
        <Route path="landing"
          getComponent={(nextState, cb) => {
              require.ensure([], require => {
                cb(null, require('./modules/Landing/pages/Landing.js').default);
              });

          }}
        />
        <Route path="app"
          getComponent={(nextState, cb) => {
              require.ensure([], require => {
                cb(null, require('./modules/App/App.js').default);
              });
          }}
        />
    </Route>
);

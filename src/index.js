import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import Job from './modules/Job'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/j/:jid" component={Job}/>
  </Router>
), document.getElementById('app'))

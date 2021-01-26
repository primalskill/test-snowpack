import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TestView from './test-view.jsx'

render(
<React.StrictMode>
  <Router>
    <Switch>            
      <Route path="/">            
        <TestView />            
      </Route>                    
    </Switch>      
  </Router>
</React.StrictMode>,
document.getElementById('root')
)

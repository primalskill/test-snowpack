import React from 'https://cdn.skypack.dev/react'
import { render } from 'https://cdn.skypack.dev/react-dom'
import { BrowserRouter as Router, Switch, Route } from "https://cdn.skypack.dev/react-router-dom"
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

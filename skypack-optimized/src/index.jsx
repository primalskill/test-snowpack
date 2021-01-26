import React from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js'
import { render } from 'https://cdn.skypack.dev/pin/react-dom@v17.0.1-DtIXT56q6U8PbgLMrBhE/min/react-dom.js'
import { BrowserRouter as Router, Switch, Route } from "https://cdn.skypack.dev/pin/react-router-dom@v5.2.0-7NPRxD2JoKcEDKk1zroV/min/react-router-dom.js"
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

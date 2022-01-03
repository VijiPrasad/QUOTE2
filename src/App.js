import React from 'react'
import './App.css'
import{
  BrowserRouter as Router,
  Switch,
  Route
}from"react-router-dom"
import home from './home'
import Quote from './Quote'
const App=()=> {
  return (
    <Router>
      <Switch>
         
        
        <Route path="/quote" component={Quote}/>
        <Route path="/home" component={home}/>
       </Switch>
    </Router>
  )
}

export default App;


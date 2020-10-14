import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Nav } from './components'
import { Board, Home, Item, User } from './pages'
import { UserRead } from './components/user'

const App = () => (<>
  <Router>
    <Nav/>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/user' component={User}></Route>
      <Route path='/item' component={Item}></Route>
      <Route path='/board' component={Board}></Route>
      
    </Switch>
  </Router>
</>)

export default App

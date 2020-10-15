import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Nav } from './components'
import { Board, Home, Item, User } from './templates'
import { UserRead, UserRegister, UserRemove, UserUpdate } from './container/user'
import { ItemRegister, ItemRead, ItemUpdate, ItemRemove } from './container/item'
import { BoardRegister, BoardRead, BoardUpdate, BoardRemove } from './container/board'

const App = () => (<>
  <Router>
    <Nav/>
    <Switch>
      <Route path='/home' component={Home}></Route>
      <Redirect exact from={'/'} to={'/home'}></Redirect>

      <Route path='/user' component={User}></Route>
      <Route path='/signup-form' component={UserRegister}></Route>
      <Route path='/signin-form' component={UserRead}></Route>
      <Route path='/mypage' component={UserUpdate}></Route>
      <Route path='/modifying-user-info' component={UserRemove}></Route>

      <Route exac path='/item' component={Item}></Route>

      <Route exac path='/board' component={Board}></Route>
    </Switch>
  </Router>
</>)

export default App

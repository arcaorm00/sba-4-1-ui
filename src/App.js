import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Nav } from './components'
import { Board, Home, Item, User } from './templates'
import { UserRead, UserRegister, UserRemove, UserUpdate } from './components/user'
import { ItemRegister, ItemRead, ItemUpdate, ItemRemove } from './components/item'
import { BoardRegister, BoardRead, BoardUpdate, BoardRemove } from './components/board'

const App = () => (<>
  <Router>
    <Nav/>
    <Switch>
      <Route path='/home' component={Home}></Route>
      <Redirect exact from={'/'} to={'/home'}></Redirect>

      <Route path='/signup-form' component={UserRegister}></Route>
      <Route path='/signin-form' component={UserRead}></Route>
      <Route path='/mypage' component={UserUpdate}></Route>
      <Route path='/modifying-user-info' component={UserRemove}></Route>

      <Route path='/item/register' component={ItemRegister}></Route>
      <Route path='/item/read' component={ItemRead}></Route>
      <Route path='/item/update' component={ItemUpdate}></Route>
      <Route path='/item/remove' component={ItemRemove}></Route>

      <Route path='/board/register' component={BoardRegister}></Route>
      <Route path='/board/read' component={BoardRead}></Route>
      <Route path='/board/update' component={BoardUpdate}></Route>
      <Route path='/board/remove' component={BoardRemove}></Route>
    </Switch>
  </Router>
</>)

export default App

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav } from './components'
import { Board, Home, Item, User } from './pages'
import { UserRead, UserRegister, UserRemove, UserUpdate } from './components/user'
import { ItemRegister, ItemRead, ItemUpdate, ItemRemove } from './components/item'
import { BoardRegister, BoardRead, BoardUpdate, BoardRemove } from './components/board'

const App = () => (<>
  <Router>
    <Nav/>
    <Switch>
      <Route exact path='/' component={Home}></Route>

      <Route exact path='/user' component={User}></Route>
      <Route path='/user/register' component={UserRegister}></Route>
      <Route path='/user/read' component={UserRead}></Route>
      <Route path='/user/update' component={UserUpdate}></Route>
      <Route path='/user/remove' component={UserRemove}></Route>

      <Route exact path='/item' component={Item}></Route>

      <Route exact path='/board' component={Board}></Route>
      <Route path='/board/register' component={BoardRegister}></Route>
      <Route path='/board/read' component={BoardRead}></Route>
      <Route path='/board/update' component={BoardUpdate}></Route>
      <Route path='/board/remove' component={BoardRemove}></Route>
    </Switch>
  </Router>
</>)

export default App

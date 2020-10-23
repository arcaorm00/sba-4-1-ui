import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Nav } from './components'
import { Board, Home, Item, User } from './templates'
import { UserRead, UserRegister, UserRemove, UserUpdate, UserList } from './container/user'
import { ItemRegister, ItemRead, ItemUpdate, ItemRemove } from './container/item'
import { BoardRegister, BoardRead, BoardUpdate, BoardRemove } from './container/board'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { itemReducer } from './container/item/ItemList'

import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
  itemReducer
})
const App = () => {
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
  return(
  <>
  <Router>
    <Nav isAuth = {loggedIn}/>
    <Switch>
      <Provider store = {createStore(rootReducer, applyMiddleware(ReduxThunk))}>
        <Route path='/home' component={Home}></Route>
        <Redirect exact from={'/home'} to={'/'}/>

        <Route path='/user' component={User}></Route>
        <Route path='/signup-form' component={UserRegister}></Route>
        <Route path='/signin-form' component={UserRead}></Route>
        <Route path='/mypage' component={UserUpdate}></Route>
        <Route path='/modifying-user-info' component={UserRemove}></Route>
        <Route path='/userlist' component={UserList}></Route>

        <Route exac path='/item' component={Item}></Route>

        <Route exac path='/board' component={Board}></Route>
      </Provider>
    </Switch>
  </Router>
  </>
  )
}

export default App

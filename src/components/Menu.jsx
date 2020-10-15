import React from 'react'
import { Link } from 'react-router-dom'

export const UserMenu = () => (
    <nav>
        <ol>
            <li><Link to='/signup-form'>Signup Form</Link></li>
            <li><Link to='/signin-form'>Signin Form</Link></li>
            <li><Link to='/mypage'>Mypage</Link></li>
            <li><Link to='/modifying-user-info'>Modifying User Info</Link></li>
        </ol>
    </nav>
)
/*
export const BoardMenu = () => (
    <nav>
        <ol>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/board'>Board</Link></li>
            <li><Link to='/item'>Item</Link></li>
        </ol>
    </nav>
)

export const ItemMenu = () => (
    <nav>
        <ol>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/board'>Board</Link></li>
            <li><Link to='/item'>Item</Link></li>
        </ol>
    </nav>
)
*/
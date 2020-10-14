import React from 'react'
import {Link} from 'react-router-dom'

const UserNav = () => (
    <>
    <nav>
        <ol>
            <li><Link to='/user/read'>Read</Link></li>
            <li><Link to='/user/resigter'>Register</Link></li>
            <li><Link to='/user/remove'>Remove</Link></li>
            <li><Link to='/user/update'>Update</Link></li>
        </ol>
    </nav>
    </>
)

export default UserNav
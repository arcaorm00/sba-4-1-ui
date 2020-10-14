import React from 'react'
import { Link } from 'react-router-dom'

const Board = () => <>
<nav>
    <ol>
        <li><Link to='/board/register'>BoardRegister</Link></li>
        <li><Link to='/board/update'>BoardUpdate</Link></li>
        <li><Link to='/board/remove'>BoardRemove</Link></li>
        <li><Link to='/board/read'>BoardRead</Link></li>
    </ol>
</nav>
</>

export default Board
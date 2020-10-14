import React from 'react'
import { Link } from 'react-router-dom'

const Item = () => <>
<nav>
    <ol>
        <li><Link to='/item/read'>ItemRead</Link></li>
        <li><Link to='/item/register'>ItemRegiste</Link></li>
        <li><Link to='/item/remove'>ItemRemove</Link></li>
        <li><Link to='/item/update'>ItemUpdate</Link></li>
    </ol>
</nav>
</>

export default Item
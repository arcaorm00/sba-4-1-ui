import React, {useState} from 'react'
import axios from 'axios'
import { User } from '../../templates'
import { Link, useHistory } from 'react-router-dom'

const UserRead = () => {
    const [userid, setUserid] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const login = e => {
        e.preventDefault()
        alert(`로그인 아이디: ${userid}, 비밀번호: ${password}`)
        axios.post('http://localhost:8080/api/access', {userid, password})
        .then(res => {
            alert(`Welcome! ${res.data["name"]}. ${res.data["userid"]}'s connection is successful !`)

            sessionStorage.setItem("sessionUser", res.data['userid'])
            window.location.reload()
            history.push("/home")
        })
        .catch(error => {
            alert(error)
            alert('Please check your ID or password!')
            window.location.reload()
        })
        //post(보낸 후).then(성공한 경우).catch(실패한 경우)
    }

    const cancel = e => {
        e.preventDefault()

    }

    return (<>
    <User>
    Login
    <table className="tab_layer">
        <tr>
            <td>ID</td>
            <td><input type='text' id='id' onChange={e => {setUserid(`${e.target.value}`)}}/></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type='text' id='pwd' onChange={e => {setPassword(`${e.target.value}`)}}/></td>
        </tr>
        <tr>
            <td colSpan='2'>
                <input type='button' value='LOGIN' onClick={login}/>
                <input type='button' value='CANCEL' onClick={cancel}/>
            </td>
        </tr>
        
    </table>
    </User>
    </>)
}

export default UserRead
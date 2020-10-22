import React, {useState} from 'react'
import axios from 'axios'
import { User } from '../../templates'

const UserRead = () => {
    const [userid, setUserid] = useState()
    const [userpwd, setUserPwd] = useState()

    const login = e => {
        e.preventDefault()
        // alert(`로그인 버튼 클릭 ${document.getElementById('id').value}`)
        alert(`로그인 아이디: ${userid}, 비밀번호: ${userpwd}`)
        axios.post('', {userid, userpwd})
        .then(res => {
            alert('Success')
        })
        .catch(error => {
            alert('Fail')
        })
        //post(보냈더니).then(성공한 경우).catch(실패한 경우)
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
            <td><input type='text' id='pwd' onChange={e => {setUserPwd(`${e.target.value}`)}}/></td>
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
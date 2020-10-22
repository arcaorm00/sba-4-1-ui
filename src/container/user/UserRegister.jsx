import React, {useState} from 'react'
import axios from 'axios'
import { User } from '../../templates'

const UserRegister = () => {
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [pclass, setPclass] = useState()
    const [gender, setGender] = useState()
    const [ageGroup, setAgeGroup] = useState()
    const [embarked, setEmbarked] = useState()
    const [rank, setRank] = useState()

    const signUp = (e) => {
        e.preventDefault()
        const userData = {
            userid, password, name, pclass, gender, ageGroup, embarked, rank
        }
        axios.post(`http://localhost:8080/user/register`, {userData})
        .then(
            console.log('signup SUCCESS')
        )
        .catch(
            console.log('signup FAIL')
        )
    }

    const cancel = () => {

    }

    return (
        <User>
            <h1>UserRegister</h1>
            <form>
            <table className="tab_layer">
                
                <tr>
                    <td>Id</td>
                    <td><input type="text" onChange={ e => setUserid(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td>password</td>
                    <td><input type="password" onChange={ e => setPassword(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td>name</td>
                    <td><input type="text" onChange={ e => setName(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td>pclass</td>
                    <td><input type="text" onChange={ e => setPclass(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td>gender</td>
                    <td><input type="text" onChange={ e => setGender(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td>ageGroup</td>
                    <td><input type="test" onChange={ e => setAgeGroup(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td>embarked</td>
                    <td><input type="text" onChange={ e => setEmbarked(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td>rank</td>
                    <td><input type="text" onChange={ e => setRank(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td><button onClick={signUp}>확인</button></td>
                    <td><button onClick={cancel}>취소</button></td>
                </tr>  
            </table>
            </form>
        </User>
    )
}

export default UserRegister
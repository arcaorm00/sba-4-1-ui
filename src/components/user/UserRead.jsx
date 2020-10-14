import React from 'react'

const UserRead = () => {

    const login = () => {
        alert('login button click')
    }

    const cancel = () => {
        alert('cancel button click')
    }

    return (<>
    Login
    <table>
        <tr>
            <td>ID</td>
            <td><input type='text'/></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type='text'/></td>
        </tr>
        <tr>
            <td colSpan='2'>
                <input type='button' value='LOGIN' onClick={login}/>
                <input type='button' value='CANCEL' onClick={cancel}/>
            </td>
        </tr>
    </table>
    </>)
}

export default UserRead
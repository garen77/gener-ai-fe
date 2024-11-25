import React, { useState } from 'react'
import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'


const Register = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [paswordIcon, setPasswordIcon] = useState(eyeOff)

    const handleToggle = () => {
        if(passwordType === 'password') {
            setPasswordIcon(eye)
            setPasswordType('text')
        } else {
            setPasswordIcon(eyeOff)
            setPasswordType('password')
        }
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Registration</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <label htmlFor='username'>Username</label>
                <input
                id={"username"}
                value={userName}
                placeholder="Enter your username here"
                onChange={(ev) => setUserName(ev.target.value)}
                className={'inputBox'}
                />
                <label className="errorLabel">{"errore"}</label>
            </div>
            <div className={'inputContainer'}>
                <label htmlFor='password'>Password</label>
                <input
                id={"password"}
                type={passwordType}
                value={password}
                placeholder="Enter your password here"
                onChange={(ev) => setPassword(ev.target.value)}
                className={'inputBox'}
                />
                <label className="errorLabel">{"errore"}</label>
                <span class="flex justify-around items-center" onClick={handleToggle}>
                    <Icon class="absolute mr-10" icon={paswordIcon} size={25}/>
                </span>
            </div>
        </div>
    )
}

Register.propTypes = {

}

export default Register
import React, { useState } from 'react'
import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

const Password = (props) => {
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

    return(
        <div className={'inputContainer'}>
        <label htmlFor='password'>Password</label>
        <input
        id={"password"}
        type={passwordType}
        value={props.password}
        placeholder={props.placeholder ? props.placeholder : "Enter your password here"}
        onChange={(ev) => props.setPassword(ev.target.value)}
        className={'inputBox'}
        />
        <label className="errorLabel">{props.passwordError}</label>
        <span className="flex justify-around items-center" onClick={handleToggle}>
            <Icon className="absolute mr-10" icon={paswordIcon} size={25}/>
        </span>
    </div>
    )
}

export default Password
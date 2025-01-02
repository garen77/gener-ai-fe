import React, { useState } from 'react';
import Icon from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { login } from '../../Services';
import { useNavigate } from 'react-router-dom';
import Spinner from '../common';

const GameLoginForm = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [paswordIcon, setPasswordIcon] = useState(eyeOff)
  const [passwordType, setPasswordType] = useState('password')
  const [userNameError, setUserNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  
  const navigate = useNavigate()

  const manageLoggedUser = (data) => {
    if(data && data.username) {
        props.setLoggedIn(true)
        props.setUserName(data.username)
    } else {
        if(data && (data.includes('Utente') || (data.includes('Username')))) {
            setUserNameError(data)
        }
        if(data && data.includes('Password')) {
            setPasswordError(data)
        }
        props.setLoggedIn(false)
    }
    props.setLoading(false)
  }

  const handleToggle = () => {
    if(passwordType === 'password') {
        setPasswordIcon(eye)
        setPasswordType('text')
    } else {
        setPasswordIcon(eyeOff)
        setPasswordType('password')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserNameError('')
    setPasswordError('')
    if ('' === formData.username) {
        setUserNameError('Please enter your username')
        return
    }
  
    if ('' === formData.password) {
      setPasswordError('Please enter a password')
      return
    }
  
    var payload = "username=" + formData.username + "&password=" + formData.password;
    props.setLoading(true)
    console.log(login(payload, manageLoggedUser))
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const register = () => {
    navigate('/register')
  }

  const getSignupForm = () => {
    return (
      <button onClick={register} className="text-purple-600 hover:text-purple-800 font-semibold">
        Registrati
      </button>
    )
  }


  if(props.loading) {
    return (
        <Spinner props={{
            ...props
        }} />    
    )
  }

  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="w-full max-w-md p-10 m-4 bg-white rounded-lg shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Game Center</h1>
          <p className="text-gray-600 mt-2">Accedi per giocare</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <label className="errorLabel">{userNameError}</label>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <span>
                <input
                id="password"
                name="password"
                type={passwordType}
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                />
                <Icon className="absolute mr-10" style={{marginTop: '5px', marginLeft: '5px', 'cursor': 'pointer'}} 
                    icon={paswordIcon} size={25} onClick={handleToggle} />
            </span>
            <label className="errorLabel">{passwordError}</label>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors duration-200"
          >
            Accedi
          </button>
        </form>
        <div className="mt-6 text-center">
            <p className="mt-4 text-sm text-gray-600">
            Non hai un account?{' '}
            {getSignupForm()}
            </p>
        </div>

      </div>
    </div>
    </>
  );
};

export default GameLoginForm;
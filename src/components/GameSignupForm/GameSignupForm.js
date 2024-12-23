import React, { useState } from 'react';
import { register } from '../../Services'
import { useNavigate } from 'react-router-dom';
import './GameSignupForm.scss'

const GameSignupForm = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate()

  const login = () => {
      navigate('/login')
  }

  const registerCallback = (data) => {
    const newErrors = {};
      if(data && data.includes('username')) {
        newErrors.username = data
      }
      if(data && data.includes('email')) {
        newErrors.email = data
      }
      setErrors(newErrors);
      props.setLoading(false)
      if(data && !data.includes('username') && !data.includes('email')) {
          setIsSuccess(true)
      }
      
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username || formData.username.length < 3) {
      newErrors.username = 'Il username deve essere di almeno 3 caratteri';
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }
    
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'La password deve essere di almeno 8 caratteri';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Le password non coincidono';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
        e.preventDefault();
    
    if (!validateForm()) return;
    props.setLoading(true)
    
    // Simuliamo una chiamata API
    try {      
      // Qui andrebbe la vera chiamata API per registrare l'utente
        var payload = "username=" + formData.username + "&password=" + formData.password + "&email=" + formData.email;
        console.log(register(payload, registerCallback))
    } catch (error) {
      setErrors({ submit: 'Si è verificato un errore. Riprova più tardi.' });
    } finally {
        props.setLoading(false)
    }
    console.log('Form submitted:', formData);
  };

  if(isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 py-12 px-4">
        <div className="max-w-md mx-auto">
          {/* Header Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Registrazione avvenuta con successo
            </h1>
            <p className="text-center text-gray-600 mt-2">
              Accedi ai giochi online
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Unisciti alla Community
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Accedi a migliaia di giochi online
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conferma Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Registrati
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Hai già un account?{' '}
              <button onClick={login} className="text-purple-600 hover:text-purple-700 font-medium">
                Accedi
              </button>
            </p>
          </div>
        </div>


        {/* Benefits Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Perché Registrarsi?
          </h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                ✓
              </div>
              <span className="ml-3 text-gray-600">Accesso a giochi esclusivi</span>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                ✓
              </div>
              <span className="ml-3 text-gray-600">Salvataggio progressi di gioco</span>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                ✓
              </div>
              <span className="ml-3 text-gray-600">Classifica globale dei giocatori</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSignupForm;

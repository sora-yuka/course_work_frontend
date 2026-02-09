import { useState } from 'react'
import { loginRequest } from '@infrastructure/api/auth.api.js'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@infrastructure/context/AuthProvider'
import styles from './Login.module.css'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setIsAuthorized } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await loginRequest(email, password)

      setIsAuthorized(true)
      navigate('/')
    } catch (error) {
      console.log('Login failed: ', error.response?.data || error.message)
    }
  }

  return (
    <div className={ styles.container }>
      <form onSubmit={ handleSubmit } className={ styles.form }>
        <h2 className={ styles.header }>Войдите чтобы продолжить</h2>
        <div className={ styles.input }>
          <input
            name='email'
            type='email'
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            placeholder='Ваша почта'
            required 
          />
          <input
            name='password'
            type='password'
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            placeholder='Ваш пароль'
            required
          />
        </div>
        <button className={ styles.button }>
          Войти
        </button>
      </form>
    </div>
  )
}

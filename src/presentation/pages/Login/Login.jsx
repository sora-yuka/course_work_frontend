import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '@infrastructure/api/auth.api'
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
            <div className={ styles.content }>
                <h3 className={ styles.header }>Welcome back</h3>
                <p className={ styles.description }>Please enter your details to sign in.</p>
                <form className={ styles.form } onSubmit={ handleSubmit }>
                    <div className={ styles.inputs }>
                        <input
                            name='email'
                            type='email'
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }
                            placeholder='Enter your email...'
                            required
                        />
                        <input
                            name='password'
                            type='password'
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                            placeholder='Enter your password...'
                            required
                        />
                    </div>
                    <button className={ styles.button }>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}
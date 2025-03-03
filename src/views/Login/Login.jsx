import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
  const navigate = useNavigate()
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSignUpClick = () => {
    setIsSignUp(true)
  }

  const handleSignInClick = () => {
    setIsSignUp(false)
  }

  return (
    <div className={styles['app-wrapper']}>
      <div className={`${styles.containerLogin} ${isSignUp ? styles['right-panel-active'] : ''}`}>
        <div className={`${styles['form-containerLogin']} ${styles['sign-up-container']}`}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              navigate('/dashboard')
            }}
          >
            <h1>Create Account</h1>
            <div className={styles['social-container']}>
              <a href="#" className={styles.social}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="mt-3" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <div className={`${styles['form-container']} ${styles['sign-in-container']}`}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              navigate('/dashboard')
            }}
          >
            <h1>Sign in</h1>
            <div className={styles['social-container']}>
              <a href="#" className={styles.social}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className={styles['overlay-container']}>
          <div className={styles.overlay}>
            <div className={`${styles['overlay-panel']} ${styles['overlay-left']}`}>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button
                className={styles.ghost}
                onClick={handleSignInClick}
                aria-label="Switch to Sign In"
              >
                Sign In
              </button>
            </div>
            <div className={`${styles['overlay-panel']} ${styles['overlay-right']}`}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button
                className={styles.ghost}
                onClick={handleSignUpClick}
                aria-label="Switch to Sign Up"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

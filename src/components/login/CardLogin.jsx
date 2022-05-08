import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginContext } from '../../context/loginContext'
import './cardLogin.css'

export default function CardLogin() {
  const { user, handleChange, isLogged, setIsLogged } = useContext(loginContext)
  const navegate = useNavigate()
  useEffect(() => {
    if (isLogged) {
      navegate('/home')
      setIsLogged(false)
    }
  }, [isLogged])
  return (
    <main className='login-main'>
      <div className='login-container'>
        <div>
          <h1>Feeling Diary</h1>
          <img src="https://images.unsplash.com/photo-1628697529678-24beeaed0b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
        </div>
        <section>
          <h2 className='login-title'>Login</h2>
          <form>
            <label>
              Email
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name='email'
                value={user.email}
                placeholder='exemple@exemple.com' />
            </label>
            <label>
              Password
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                name='password'
                value={user.password}
              />
            </label>
            <button onClick={()=>setIsLogged(true)}>Sing in</button>
          </form>
          <span className='madeBy'>Made By Bruno Fay</span>
        </section>
      </div >
    </main>
  )
}

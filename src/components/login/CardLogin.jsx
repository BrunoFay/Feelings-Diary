import './cardLogin.css'

export default function CardLogin() {
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
              <input type="text" placeholder='exemple@exemple.com' />
            </label>
            <label>
              Password
              <input type="password" />
            </label>
            <button>Sing in</button>
          </form>
          <span className='madeBy'>Made By Bruno Fay</span>
        </section>
      </div >
    </main>
  )
}

import './App.css'

function App() {

  return (
    <div className='login-content' >
      <label htmlFor="email-id">
        Email: 
        <input
          id="email-id"
          type="email"
          className='input-form'
          />
      </label>
      <label htmlFor='password-id'>
        Senha:
        <input
          type="password"
          className='input-form'
          id='password-id'
          />
      </label>
      <input type="button" value={ 'Entrar' } className='input-button' />
    </div>
  )
}

export default App

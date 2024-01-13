import './login.css'

function App() {

  return (
    <>
      <div className='img_bg'>
      </div>
      <div className='img_bg_filter'>
          <div className='container_logo'>
              <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png" alt="netflix"  className='logo_netflix'/>
          </div>
          <div className='login_container'>
            <div className='login'>
              <h1>Inicia sesión</h1>
              <form>
                <div className='input-single'>
                  <input required type="text" id='email' className='input'/>
                  <label htmlFor="email">Email</label>
                </div>
                <div className='input-single'>
                  <input required type="password" id='password' className='input'/>
                  <label htmlFor="password">Password</label>
                </div>
              </form>
              <button className='btn_login'>Inicia sesión</button>
              <div className='helpers'>
                <div>
                  <input type="checkbox"/>
                  <label>Recuerdame</label>
                </div>
                <p>¿Necesitas ayuda?</p>
              </div>
              <div className='primera_vez'>
                <p>
                  ¿Primera vez en Netflix? <span className='sub'>Suscríbete ahora.</span>
                  <br />
                  <br />
                  Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <span className='blue_info'>Más info.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App

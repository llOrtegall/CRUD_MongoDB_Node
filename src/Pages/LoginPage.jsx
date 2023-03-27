import './LoginPage.css'

export const LoginPage = () => {

  return (
    <section className="loginApp">
      <header className="w-96 h-96 bg-gray-400 rounded-lg">
        <div className="flex justify-between h-7 bg-slate-600 rounded-t-md text-white font-semibold">
          <div className="pl-32">
            <p>Login Program</p>
          </div>
          <div className="flex flex-row">
            <button className="w-6 text-center bg-yellow-500 pb-1">-</button>
            <button className="w-6 text-center bg-red-600 rounded-tr-md pb-1">x</button>
          </div>
        </div>

        <div className="logo">
          <img src="logo.png" alt="logo" />
          <div>
            <p className='title'>Program®</p>
            <span>powered by gane</span>
          </div>
        </div>

        <form className="flex flex-col items-center gap-2" action="" method="post">

          <div className="flex justify-between w-64">
            <label>Usuario:</label>
            <input className="w-40 h-7 rounded-md outline-none px-1" type="text" />
          </div>

          <div className="flex justify-between w-64">
            <label>Contraseña:</label>
            <input className="w-40 h-7 rounded-md outline-none px-1" type="text" />
          </div>

          <div className="flex justify-between w-64">
            <label>Conexión</label>
            <select className="w-40" name="SELECT">
              <option value="val1">DEFECTO</option>
            </select>
          </div>

          <div className="flex justify-between w-64">
            <label></label>
            <button className='bg-red-600 w-40 h-9 rounded-lg text-white font-semibold text-md' type='submit'>Ingresar</button>
          </div>

        </form>

      </header>

    </section >
  )
}
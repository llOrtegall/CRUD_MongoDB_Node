
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
      </header>
    </section>
  )
}
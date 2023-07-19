import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {

  // ? otra forma de pasa prosp aunque no es lo ideal al no ser unos casos especificos
  // const midudev = { isFollowing: true, userName: 'midudev' }
  // const ivanOrtega = { isFollowing: false, userName: 'llortegall' }

  const [name, setName] = useState('midudev')
  // ? CUANDO SE RENDERIZA EL PADRE LO HARAN TAMBIEN SUS HIJOS

  console.log('render with: ', name)

  return (
    <section className='App'>
      <TwitterFollowCard userName='midudev'>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName={name}>
        Ivan Ortega Garzon
      </TwitterFollowCard>

      <button onClick={() => setName('llortegall')}>
        Cambiar Nombre
      </button>
    </section>

  )
}
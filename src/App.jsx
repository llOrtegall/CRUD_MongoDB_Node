import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {

  // ? otra forma de pasa prosp aunque no es lo ideal al no ser unos casos especificos
  // const midudev = { isFollowing: true, userName: 'midudev' }
  // const ivanOrtega = { isFollowing: false, userName: 'llortegall' }

  // const [name, setName] = useState('midudev')
  // ? CUANDO SE RENDERIZA EL PADRE LO HARAN TAMBIEN SUS HIJOS

  return (
    <section className='App'>
      <TwitterFollowCard initialisFollowing userName='midudev'>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard initialisFollowing={false} userName='llortegall'>
        Ivan Ortega Garzon
      </TwitterFollowCard>

      <button>
        Cambiar Nombre
      </button>
    </section>

  )
}
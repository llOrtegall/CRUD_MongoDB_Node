import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {

  // ? otra forma de pasa prosp aunque no es lo ideal al no ser unos casos especificos
  // const midudev = { isFollowing: true, userName: 'midudev' }
  // const ivanOrtega = { isFollowing: false, userName: 'llortegall' }

  return (
    <section className='App'>
      <TwitterFollowCard userName='midudev'>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName='llortegall'>
        Ivan Ortega Garzon
      </TwitterFollowCard>
    </section>
  )
}
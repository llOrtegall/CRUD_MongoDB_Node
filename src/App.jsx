import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {

  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName='midudev'>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName='llortegall'>
        Ivan Ortega Garzon
      </TwitterFollowCard>
    </section>
  )
}
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {
  const format = (userName) => `@${userName}`

  const formatedUserName = (<span>@Midudev</span>)

  return (
    <section className='App'>
      <TwitterFollowCard
        formatedUserName={formatedUserName}
        isFollowing userName='llortegall'
        name='Ivan Ortega Garzon' />
      <TwitterFollowCard
        formatedUserName={formatedUserName}
        isFollowing userName='andref'
        name='Andres Felipe' />
      <TwitterFollowCard
        formatedUserName={formatedUserName}
        isFollowing userName='goncy'
        name='Goncy Armando' />
      <TwitterFollowCard
        formatedUserName={formatedUserName}
        isFollowing userName='elonkmusk'
        name='Elon Musk' />
    </section>
  )
}
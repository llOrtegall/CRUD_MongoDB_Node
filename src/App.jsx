import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {
  return(
    <section className='App'>
      <TwitterFollowCard userName='llortegall' name='Ivan Ortega Garzon'/>
      <TwitterFollowCard userName='andref' name='Andres Felipe'/>
      <TwitterFollowCard userName='goncy' name='Goncy Armando'/>
      <TwitterFollowCard userName='elonkmusk' name='Elon Musk'/>
    </section>
  )
}
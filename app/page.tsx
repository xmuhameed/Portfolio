import { Landing } from './components/homePage/Landing'
import { Contact } from './components/homePage/Contact'
import { Portfolio } from './components/homePage/Portfolio'

export default function Home() {
  return (
    <main className="">
      <Landing />
      {/* <Aboutme /> */}
      {/* <Services /> */}
      <Portfolio />
      <Contact />
    </main>
  )
}

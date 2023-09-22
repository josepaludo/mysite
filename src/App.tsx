import './App.css'
import Contato from './components/Contato'
import Empty from './components/Empty'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Sobre from './components/Sobre'


function App() {

  return <>
    <NavBar />

    <Empty />

    <Hero />
    <Portfolio />
    <Sobre />
    <Contato />

    <Empty />
  </>
}

export default App

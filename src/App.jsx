import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componenets/Header'
import MainComponent from './Componenets/MainCompo'
import Footer from './Componenets/FooterCompo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <Header />
    <MainComponent />
    <Footer />
    </div>
    </>
  )
}

export default App

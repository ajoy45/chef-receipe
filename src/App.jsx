
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './shared/Header'
import Footer from './shared/Footer'

function App() {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App

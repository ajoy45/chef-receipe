
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './shared/Header'
import Footer from './shared/Footer'

function App() {
 
  return (
    <>
      <Header ></Header>
      <div className='main'>
        <Outlet ></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App

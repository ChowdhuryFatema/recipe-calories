
import { ToastContainer } from 'react-toastify'
import './App.css'
import Recipes from './components/Recipes/Recipes'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <ToastContainer />
    <Header></Header>
    <Banner></Banner>
    <Recipes></Recipes>
    <Footer></Footer>
    </>
  )
}

export default App

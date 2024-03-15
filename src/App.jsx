
import { ToastContainer } from 'react-toastify'
import './App.css'
import Recipes from './components/Recipes/Recipes'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <ToastContainer />
    <Header></Header>
    <Recipes></Recipes>

    </>
  )
}

export default App

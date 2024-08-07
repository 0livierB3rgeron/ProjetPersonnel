import Acceuil from './components/acceuil'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Connexion from './components/connexion'
import Formulaire from './components/formulaire'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Connexion/>}></Route>
        <Route path='/acceuil' element={<Acceuil/>}></Route>
        <Route path='/formulaire' element={<Formulaire/>}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App

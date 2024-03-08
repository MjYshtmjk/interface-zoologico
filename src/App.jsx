import './App.css'
import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import Fotos from './pages/Fotos/Fotos'
import Depoimentos from './pages/Depoimentos/Depoimentos';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/animais' Component={Animais} />
          <Route exact path='/fotos' Component={Fotos}/>
          <Route exact path='/depoimentos' Component={Depoimentos}/>
          <Route exact path='/login' Component={Login}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

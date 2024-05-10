import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import Fotos from './pages/Fotos/Fotos';
import Login from './pages/Login/Login';
import Depoimentos from './pages/Depoimentos/Depoimentos';

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' Component={Home} />
                    <Route exact path='/animais' Component={Animais} />
                    <Route exact path='/fotos' Component={Fotos} />
                    <Route exact path='/login' Component={Login} />
                    <Route exact path='/depoimentos' Component={Depoimentos} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRoutes;
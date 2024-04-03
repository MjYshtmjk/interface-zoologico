import './Fotos.css';
import ImgCarrossel from '../../components/ImgCarrossel/ImgCarrossel';
import Navegar from '../../components/Navegar/Navegar';

function Fotos() {
    return(
        <>
            <Navegar />
            <h1>Fotos</h1>
            <ImgCarrossel />
        </>
    );
}

export default Fotos
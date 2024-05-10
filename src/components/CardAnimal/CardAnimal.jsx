import imgNotFound from '../../assets/img-not-found.png'
import './CardAnimal.css'

function CardAnimal({ animal }) {

    const exibeID = () => {
        console.log(animal.idanimal, "\n", animal);
    }

    return (
        <>
            <div className="card-animais">
                <img src={imgNotFound} alt="Imagem não encontrada" onClick={exibeID}/>
                <p><b>Nome:</b> {animal.nomeanimal}</p>
                <p><b>Gênero:</b> {animal.generoanimal}</p>
                <p><b>Espécie:</b> {animal.tipoanimal}</p>
                <p><b>Envergadura:</b> {animal.envergadura}</p>
            </div>
        </>
    );
}

export default CardAnimal
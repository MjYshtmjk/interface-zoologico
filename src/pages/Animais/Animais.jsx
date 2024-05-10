import './Animais.css'
import React, { useEffect, useState } from 'react';
import Navegacao from '../../components/Navegar/Navegar';
import CardAnimal from '../../components/CardAnimal/CardAnimal';
import AnimalRequests from '../../fetch/AnimalRequests';

function Animais() {

    const[animais, setAnimais] = useState(null);

    useEffect(() => {
        // função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            setAnimais(await AnimalRequests.listarAnimais());
        }
        fetchData();
    }, []) 

    return (
        <>
            <Navegacao />
            <div className='ctn-animais'>
                {animais ? (
                    // Renderize o seu componente para cada item da lista
                    animais.map(animal => (
                        <CardAnimal key={animal.idanimal} animal={animal} />
                    ))
                ) : (
                    <p>Carregando... Verifique se o servidor está funcionando</p>
                )}
            </div>
        </>
    );
}

export default Animais
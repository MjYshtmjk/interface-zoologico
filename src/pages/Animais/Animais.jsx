import './Animais.css'
import React, { useEffect, useState } from 'react';
import Navegacao from '../../components/Navegar/Navegar';
import CardAnimal from '../../components/CardAnimal/CardAnimal';

function Animais() {

    const[animais, setAnimais] = useState(null);

    useEffect (() =>{

        const fetchData = async () => {

            try {
                const response = await fetch('http://localhost:3000/listar-aves');

                if(!response.ok) {

                    throw new Error('Erro ao buscar servidor');
                }

            const listaAnimais = await response.json();

            setAnimais(listaAnimais)
            } catch (error) {
                
                console.error('Error: ', error);
            }
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
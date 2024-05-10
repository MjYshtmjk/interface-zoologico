import { FaTrash } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AnimalRequests from '../../fetch/AnimalRequests'
import './ListaAnimais.css'

function ListaAnimais() {

    const [animais, setAnimais] = useState(null);

    // Recupera a lista de todos os animais do servidor
    useEffect(() => {
        // função para fazer o fetch (busca) das informações na API
        const fetchData = async () => {
            setAnimais(await AnimalRequests.listarAnimais());
        }
        fetchData();
    }, []) 

    const deletarAnimal = async (id) => {
        const confirma = window.confirm(`Deseja deletar o animal com o id ${id}?`);
        if(confirma) {
            if(await AnimalRequests.deletarAnimal(id)) {
                window.alert('Animal deletado com sucesso!');
                window.location.reload();
            } else {
                window.alert('Erro ao deletar animal');
            }
        }
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Gênero</th>
                    <th>Envergadura</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {animais ? (
                    // Renderize o seu componente para cada item da lista
                    animais.map(animal => (
                        <tr>
                            <td>{animal.idanimal}</td>
                            <td>{animal.nomeanimal}</td>
                            <td>{animal.idadeanimal}</td>
                            <td>{animal.generoanimal}</td>
                            <td>{animal.envergadura}</td>
                            <td onClick ={() => deletarAnimal(animal.idanimal)}><FaTrash/></td>
                        </tr>
                    ))
                ) : (
                    <p>Carregando... Verifique se o servidor está funcionando</p>
                )}
            </tbody>
        </Table>
    );
}

export default ListaAnimais;
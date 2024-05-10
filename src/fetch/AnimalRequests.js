class AnimalRequests {

    constructor() {   
        this.serverUrl = 'http://localhost:3000';
        this.routeListarAnimais = '/listar-aves';
        this.routeCadastrarAnimais = '/novo/ave';
        this.routeDeletarAnimais = '/remover/animal';
        this.routeATualizarAnimais = '/atualizar/animal';
    }

    async listarAnimais() {
        try {
            // Faz a busca e armazena o resultado em response
            const response = await fetch(`${this.serverUrl}${this.routeListarAnimais}`);
            // verifica se o estado da response (ok) é falso
            if (!response.ok) {
                // caso seja falso, houve algum erro na requisição, e o erro é lançado
                throw new Error('Erro ao buscar servidor');
            }
            // caso a busca seja bem sucedida, o resultado é convertido em um JSON e armazenado
            // na variável listaAnimais
            return await response.json();
        } catch (error) {
            // escreve o erro no console
            console.error('Erro: ', error);
        }
    }

        /**
     * Deleta um animal do servidor
     * 
     * @param {*} idAnimal ID do animal a ser deletado
     * @returns **verdadeiro (true)** caso o animal tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
        async deletarAnimal(idAnimal) {
            try {
                // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do animal
                const response = await fetch(`${this.serverUrl}${this.routeDeletarAnimais}?idAnimal=${idAnimal}`, {
                    // Informa o verbo a ser acessado
                    method: 'DELETE'
                });
                // Verifica se a resposta não foi bem sucedida ...
                if (!response.ok) {
                    // ... lança um erro
                    throw new Error('Erro ao enviar formulário');
                }
                // retorna true caso a resposta seja bem sucedida
                return true;
            } catch (error) {
                // caso ocorra algum erro na comunicação
                console.error('Erro: ', error);
                window.alert('Erro ao deletar animal');
                return null;
            }
        }
}

export default new AnimalRequests

// DECLARAÇÃO DE CONSTANTES --> DOM
const botao = document.getElementById('btn'); // Seleciona o botão no HTML com o id 'btn'
botao.addEventListener('click', buscarAPI); // Adiciona um ouvinte de evento para acionar a função 'buscarAPI' ao clicar no botão

const frases = document.getElementById('frases'); // Seleciona o elemento no HTML com o id 'frases' para exibir a piada

const urlAPI = 'https://api.chucknorris.io/jokes/random'; // URL da API de piadas do Chuck Norris

// FUNÇÃO ASSÍNCRONA PARA BUSCAR A PIADA NA API
async function buscarAPI() {
    try {
        // Faz a requisição para a API e aguarda a resposta
        const resposta = await fetch(urlAPI);

        // Verifica se a resposta é bem-sucedida (status 200 a 299)
        if (!resposta.ok) {
            // Se não for, lança um erro com o status da resposta
            throw new Error(`Erro na requisição! Status: ${resposta.status}`);
        }

        // Converte a resposta para JSON e armazena na constante 'dados'
        const dados = await resposta.json();
        
        // Insere a piada no HTML usando innerHTML 
        frases.textContent = dados.value;

    } catch (err) {
        // Captura e exibe erros no console e alerta o usuário
        console.error('Erro:', err);
        alert('Erro ao buscar frase. Tente novamente mais tarde!');
    }
}

// Chama a função para buscar uma piada assim que a página carrega
buscarAPI();
/*
const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const imgCard = document.getElementById('carta');
const button = document.getElementById('btn');

button.addEventListener('click', buscarcarta); //adiciona um evento de clique ao botão

async function buscarcarta () {
    try{

        const resposta = await fetch(url); //faz a requisição e armazena 

        // VERIFICAÇÃO - se a requisição  foi ok (200 - 299), caso não sejá irá aparecer a mensagem
        if (!resposta.ok) {
            throw new Error(`Erro na requisição! status: ${resposta.ok}`);
        }
        
        const dados = await resposta.json(); // converte a resposta em JSON

        const deck_id = dados.deck_id; //extrair a ID do baralho

        const respostaCarta = await fetch(url); 

        if (!respostaCarta.ok) {
            throw new Error(`Erro na requisição! status: ${respostaCarta.ok}`);
        }

        const dadosCarta = await respostaCarta.json();
        const carta = dadosCarta.cards[0]

        console.log(carta)
    } catch (erro) {
        console.error('Erro:', erro);
        alert('Erro ao buscar carta. Tente novamente mais tarde!');
    }
}

buscarcarta(); // chama a função assíncrona que busca a carta do baralho.
*/

const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'; // Updated URL to draw a single card
const imgCard = document.getElementById('carta');
const button = document.getElementById('btn');

button.addEventListener('click', buscarcarta); // Adiciona um evento de clique ao botão

async function buscarcarta () {
    try {
        const resposta = await fetch(url); // Faz a requisição e armazena 

        // Verificação - se a requisição foi ok (200 - 299), caso não seja, irá aparecer a mensagem
        if (!resposta.ok) {
            throw new Error(`Erro na requisição! status: ${resposta.ok}`);
        }
        
        const dados = await resposta.json(); // Converte a resposta em JSON

        const carta = dados.cards[0]; // Extrai a carta

        // Atualiza a URL da imagem no HTML com a URL da imagem da carta retornada pela API
        imgCard.src = carta.image; 

        // Atualiza o texto alternativo da imagem (usado quando a imagem não pode ser carregada)
        imgCard.alt = `Carta de ${carta.value} de ${carta.suit}`; 
    } catch (erro) {
        console.error('Erro:', erro);
        alert('Erro ao buscar carta. Tente novamente mais tarde!');
    }
}

buscarcarta(); // Chama a função assíncrona que busca a carta do baralho.
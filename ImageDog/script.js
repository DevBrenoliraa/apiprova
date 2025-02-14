// Cria uma variável que armazena o URL da API, que busca imagens de cachorros
const url = "https://api.thedogapi.com/v1/images/search"; 

// Busca o elemento HTML com o id 'imgdog', que é onde a imagem do cachorro será exibida
const img = document.getElementById("imgdog"); 

// Busca o botão no HTML com o id 'btn', que ao ser clicado vai disparar a função 'buscarAPI'
const botao = document.getElementById("btn"); 

// Função assíncrona que busca a imagem de cachorro da API
async function buscarAPI() {
    fetch(url); // Inicia a requisição para a API (mas essa linha não faz nada útil aqui)

    // Aguardamos a resposta da API (requisição fetch) e armazenamos a resposta em 'resposta'
    const resposta = await fetch(url); 

    // Converte a resposta recebida em formato JSON para um objeto JavaScript
    const dados = await resposta.json(); 
    
    // Atualiza a URL da imagem no HTML com a URL da imagem do cachorro retornada pela API
    img.src = dados[0].url; 

    // Atualiza o texto alternativo da imagem (usado quando a imagem não pode ser carregada)
    img.alt = "Imagem de um cachorro fofo"; 
}

// Adiciona um evento ao botão, para que, ao ser clicado, execute a função 'buscarAPI'
botao.addEventListener("click", buscarAPI);

// Chama a função automaticamente ao carregar a página para exibir uma imagem de cachorro
buscarAPI();

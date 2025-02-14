// const botao = document.getElementById('btn');
// botao.addEventListener('click', fraseKanye);

// const frases = document.getElementById('frases');

// const url = 'https://api.kanye.rest/';

// async function fraseKanye () {
//     try {
//         const resp = await fetch(url);

//         if (!resp.ok) {
//             throw new Error(`Erro na requisição! Status: ${resp.status}`);
//        
//         }

//         const dados = await resp.json();

//         frases.textContent = dados.quote;
//     } catch (err) {
//         console.error('Erro:', err);
//         alert('Erro ao buscar frase. Tente novamente mais tarde!');
//     }
// }


// fraseKanye();

const botao = document.getElementById('btn');
botao.addEventListener('click', fraseKanye);

const frases = document.getElementById('frases');

const url = 'https://api.kanye.rest/';

async function fraseKanye () {
    try {
        const resp = await fetch(url);

        if (!resp.ok) {
            alert(`STATUS: ${resp.status}`); 
            throw new Error(`Erro na requisição! Status: ${resp.status}`);
        }

        const dados = await resp.json();

        frases.textContent = dados.quote;
        
    } catch (err) {
        console.error('Erro:', err);
        alert('Erro ao buscar frase. Tente novamente mais tarde!');
    }
}

fraseKanye();

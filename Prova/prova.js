// const response = fetch('https://jsonplaceholder.typicode.com/posts')

// .then (function (responseData) {
//     return responseData.json();
// })

// .then (function (josonData) {
//     console.log(josonData)
// })

// .catch (function (erro) {
//     console.log('Erro ao buscar a API ---> ' + response.status)
// })

(async function(){
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Teste-Header': 'Teste valido',
            'Authorization': 'Bearer ufhdsiuhfdufhsiufdfy',
        };

        const init = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify ({
                title: 'Testede criação'
            })
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts',
            init
        )

        const jsonData = await response.json();

        console.log(jsonData)

        } catch (erro) {
            console.log('Erro ao buscar a API')
        }

})();
const response = fetch('https://jsonplaceholder.typicode.com5/posts')

.then (function (responseData) {
    return responseData.json();
})

.then (function (josonData) {
    console.log(josonData)
})

.catch (function (erro) {
    console.log('Erro ao buscar a API ---> ' + response.status)
})


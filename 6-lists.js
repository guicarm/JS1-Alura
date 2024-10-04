console.log(`Working with Lists`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

// console.log(`Destinos Possíveis: ${salvador}, ${saoPaulo}, ${rioDeJaneiro}`)


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`) //Adiciona um item na lista dps de declarada
console.log("Destinos Possíveis:")
console.log(listaDeDestinos)

listaDeDestinos.splice(1, 1) //Retira um item da lista
console.log("Destinos Possíveis (sem SP):")
console.log(listaDeDestinos)

console.log(listaDeDestinos[1], listaDeDestinos[0])//Imprime o índice 1 e 0 da lista



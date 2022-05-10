console.log("fala cmg!");

//-----Exercícios de Interpretação de Código-----

//Exercício 1.

//a. Acho que vai ser impresso uma vez cada nome e apelido e 
//uma array contendo os itens da array original.


//Exercício 2.

//a. Vai ser impresso uma nova array (novoArrayB) contendo 
//apenas os nomes (item.nome).


//Exercício 3.

//a. Vai ser impresso numa nova array (novoArrayC) contendo
//apenas os apelidos (item.apelido) diferentes (!==) de "Chijo".



//-----Exercícios de Escrita de Código-----

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a) Crie um novo array que contenha apenas o nome dos doguinhos

const arrayNomes = pets.map((item, index, array) => {

    return item.nome
})


console.log(arrayNomes);


//b) Crie um novo array apenas com os cachorros salsicha

const arraySalsichas = pets.filter((item, index, array)=>{

    return item.raca === "Salsicha"
})

console.log(arraySalsichas);    


//c) Crie um novo array que possuirá mensagens para enviar para todos 
//os clientes que são poodles. A mensagem deve ser: 
//"Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const dogsPoodles = pets.filter((item, index, array)=>{

    return item.raca === "Poodle"

})

const mensagemPoodles = dogsPoodles.map((item, index, array)=>{

    let mensagem = `Você ganhou um cupom de desconto de 0% para tosar o/a ${item.nome}!`

    console.log(mensagem);

})



//Exercício 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a. 
const produtosNomes = produtos.map((item, index, array) => {

    return item.nome

})

console.log(produtosNomes);



//b) Crie um novo array que contenha um objeto com o nome e o preço 
//de cada item, aplicando 5% de desconto em todos eles

const arrayDesconto = produtos.map((item, index, array)=>{

    let precoDesconto = item.preco*0.95

    item.preco = precoDesconto

    return item.nome && item.preco

})

console.log(arrayDesconto);



//c. Crie um novo array que contenha apenas os objetos da 
//categoria Bebidas

const produtosBebidas = produtos.filter((item, index, array) => {

    return item.categoria === "Bebidas"

})

console.log(produtosBebidas);



//d. Crie um novo array que contenha apenas os objetos cujo nome 
//contenha a palavra "Ypê"

const produtosYpe = produtos.filter((item, index, array) => {

    return item.nome.includes("Ypê") 

})

console.log(produtosYpe);



//e. Crie um novo array onde cada item é uma frase 
//"Compre [NOME] por [PREÇO]". Esse array deve conter frases
// apenas dos itens cujo nome contenha a palavra "Ypê"


const promocaoYpe = produtosYpe.map((item, index, array)=>{
    const frasepromo = `Compre ${item.nome} por ${item.preco}`
    return frasepromo
})

console.log(promocaoYpe);






















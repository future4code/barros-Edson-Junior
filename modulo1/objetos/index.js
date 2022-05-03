// -----Exercícios de Interpretação de Código-----

//Exercício 1

//a1. [Matheus Nachtergaele]
//a2. ["Matheus Nachtergaele", "Selton Mello", "Denise Fraga"]
//a3. [canal: "Globo", horario: "14h"]

//Exercício 2

/*a1. nome: "Juca", 
	idade: 3, 
	raca: "SRD"

    nome: "Juba"
	idade: 3, 
	raca: "SRD"

    nome: "Jubo"
	idade: 3, 
	raca: "SRD"
*/
//a2.Copia todas as propriedades e atributos, podendo esses serem trocados posteriormente em outros objetos.

//Exercício 3

//a. false/undefined
//b. Porque a propriedade altura não existe e não foi definida


// -----Exercícios de Escrita de Código------

//Exercício 1
//a. 
/* 
const carro = {
    nome: "Palio", 
    apelidos: ["Palinho", "Filhote", "Kubanacar"]
}

function imprimir(input) {
    const carro = input
    console.log(`Eu sou o ${carro.nome}, mas pode me chamar de: ${carro.apelidos[0]}, ${carro.apelidos[1]} ou ${carro.apelidos[2]}`);

}

imprimir(carro)

//b.
const bike = {
    ...carro,
    apelidos: ["Magrela", "Camelin", "bicicreta"]

}

imprimir(bike)
 */

//Exercício 2
//a.
/* b.

const pessoa1 = {
    nome: "ferdinando",
    idade: 45,
    profissao: "estudante",
}

const pessoa2 = {
    nome: "Gabrievellyn",
    idade: 52,
    profissao: "Astronauta",
}

function valorespessoas(input) {
    const pessoa1 = input
    console.log (pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length)   
    
}

valorespessoas(pessoa1);
 */
//console.log(valorespessoas);


//Exercício 3
//a.

/* 
let carrinho = []


const fruta1 = {
    nome: "Banana",
    disponibilidade: true,

}

const fruta2 = {
    nome: "Pera",
    disponibilidade: true,
    
}

const fruta3 = {
    nome: "Uva",
    disponibilidade: true,
    
}

function imprimir(input) {
    carrinho.push(input)

}

imprimir(fruta1)

imprimir(fruta2)

imprimir(fruta3)

console.log(carrinho);
 */



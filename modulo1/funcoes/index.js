// Exercício de Interpretação de Escrita de Código

// Exercício 1

// Resposta a: 10 e 50

// b: Não apareceria nada.


// Exercício 2

//a. Ela transforma em minusculo o texto do usuario e confere 
//se tem a palavra cenoura.

//b. eu gosto de cenoura / true
//cenoura é bom pra vista / true
//cenouras crescem na terra / true


// Exercícios de Escrita de Código

// Exercício 1
/*a. 
const pessoa={
    nome:"Edson",
    idade:31,
    cidade:"Niterói",
    profissao:"Designer"

}

console.log(`Eu sou ${pessoa.nome}, tenho ${pessoa.idade} anos, moro em ${pessoa.cidade} e sou ${pessoa.profissao}`)
 */

//b.

/* 
let pessoa={
    nome:prompt("Qual o seu nome?"),
    cidade:prompt("Qual a cidade que você mora?"),
    idade:Number(prompt("Qual a sua idade?")),
    profissao:prompt("Qual a sua profissão?")
}

console.log(`Eu sou ${pessoa.nome}, tenho ${pessoa.idade} anos, moro em ${pessoa.cidade} e sou ${pessoa.profissao}`);
 */


// Exercício 2

//a.
/* 
function somaNumeros(numero1, numero2) {
    const soma = numero1 + numero2
    console.log(soma)

}

somaNumeros(Number(prompt("digite um numero")), Number(prompt("digite outro numero")))

 */

//d
/* 
function mensagemMaiuscula() {
    const textoPessoa = prompt("Digite uma mensagem")

    console.log(textoPessoa.length, textoPessoa.toUpperCase())
}
mensagemMaiuscula()

 */

// Exercício 3

const numeroDeEntrada = Number(prompt("Digite um numero"))

const numeroDeEntrada2 = Number(prompt("digite outro numero"))

function somaNumeros(numero1, numero2) {
    numero1=numeroDeEntrada
    numero2=numeroDeEntrada2
    const soma = numero1 + numero2
    
    //console.log(soma)
}

//somaNumeros(Number(prompt("digite um numero")), Number(prompt("digite outro numero")))


function subtracaoNumeros(numero1, numero2){
    const sub = numero1 - numero2
    numero1=numeroDeEntrada
    numero2=numeroDeEntrada2
    //console.log(sub);
}

//subtracaoNumeros(Number(prompt("digite um numero")), Number(prompt("digite outro numero")))


function multiplicacaoNumeros(numero1, numero2) {
    const multi = numero1 * numero2
    numero1 = numeroDeEntrada
    numero2 = numeroDeEntrada2
   // console.log(multi)
}

//multiplicacaoNumeros(Number(prompt("digite um numero")), Number(prompt("digite outro numero")))


function divisaoNumeros(numero1, numero2) {
    const div = numero1 / numero2
    numero1=numeroDeEntrada
    numero2=numeroDeEntrada2
   // console.log(div)
}

//divisaoNumeros(Number(prompt("digite um numero")), Number(prompt("digite outro numero")))



console.log(`Números inseridos: ${numeroDeEntrada} e ${numeroDeEntrada2}, 
Soma: ${somaNumeros.soma}, Diferença: ${subtracaoNumeros.sub}, Multiplicação:${multiplicacaoNumeros.multi}, 
Divisão:${divisaoNumeros.div}`);

// Tentei fazer de várias formas, mas não consegui.

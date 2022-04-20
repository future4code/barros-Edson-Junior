/* -----Exercícios de Interpretação de Código-----

Exercício 1 

- a. FALSE

- b. FALSE

- c. FALSE

- d. Boolean


Exercício 2 e 3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

- O valor impresso provavelmente não será somado. Apenas 
será impresso um valor seguido do outro. Por exemplo: se eu 
coloquei 10 e 20 será impresso 1020

- Acredito que tenha dado errado pois toda informação no 
prompt entra como string, então ele deveria transformar os 
valores em number antes de somar.




-----Exercícios de Escrita de Código-----

Exercício 1
*/
/*
let idadeDoUsuario = Number(prompt("Qual é a sua idade?"))

let idadeDoMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

let resposta = idadeDoUsuario > idadeDoMelhorAmigo

let diferença = idadeDoUsuario - idadeDoMelhorAmigo

console.log(`Sua idade é maior do que a do seu melhor amigo?`, resposta)

console.log("A diferença de idade entre meu melhor amigo e eu é", diferença ," anos")
*/


// Exercício 2

/*
let numeroPar = Number(prompt("Por favor, insira um número par."))

const divisão = 2

let restoDaDivisão = numeroPar % divisão 

console.log(restoDaDivisão)
*/

// Se escrever um número ímpar, o resto da divisão aparece no console. Se for um valor par, o resto sempre será 0.


// Exercício 3
/*
let idadeEmAnos = Number(prompt("Qual a sua idade em anos?"))

let idadeEmMeses = idadeEmAnos * 12

let idadeEmDias = idadeEmMeses * 30

let idadeEmHoras = idadeEmMeses * 720

console.log(idadeEmAnos, idadeEmMeses, idadeEmDias, idadeEmHoras)
*/


// Exercício 4
/*
let numero1 = Number(prompt("Digite um número"))

let numero2 = Number(prompt("Digite um segundo número"))    

let primeiroNumeroMaior = numero1 > numero2

let primeiroNumeroIgual = numero1 === numero2

let primeiroNumeroDivisível = numero1 % numero2

let segundoNumeroDivisivel = numero2 % numero1

let divisivel1 = primeiroNumeroDivisível === 0

let divisivel2 = segundoNumeroDivisivel === 0

console.log("O primeiro numero é maior que segundo?", primeiroNumeroMaior)
console.log("O primeiro numero é igual ao segundo?", primeiroNumeroIgual)
console.log("O primeiro numero é divisível pelo segundo?", divisivel1)
console.log("O segundo numero é divisível pelo primeiro?", divisivel2)
*/

// Acho que deu tudo certo.




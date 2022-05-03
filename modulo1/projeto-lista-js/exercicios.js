// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = prompt("Altura:")
let largura = prompt("Largura:")
let input1 = Number(altura)
let input2 = Number(altura)

let area = altura * largura 
console.log(area)
}
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Que ano estamos?")
  let anoNascimento = prompt("Que ano vocÊ nasceu?")

  let idadeAtual = anoAtual - anoNascimento

  console.log(idadeAtual);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual o seu nome?")
  let idade = prompt("Qual a sua idade?")
  let email = prompt("Qual o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cores = prompt("Quais as suas cores favoritas?")
let cores1 = prompt("Quais as suas cores favoritas?")
let cores2 = prompt("Quais as suas cores favoritas?")

console.log([cores , cores1 , cores2]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
/*   // implemente sua lógica aqui
   let primeiraArray = array[0]
//let segundaArray = array[array.length-1]

/*array.splice(0,1)
array.splice(array.length-1 , 1)

array.push(segundaArray, array, primeiraArray)

array.replaceAll(0,segundaArray)

return array 
array.copyWithin(1, array.length-1,0)
//array.pop()
//array.push(primeiraArray)

return array

 Não consegui fazer esse exercício.
 */

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase()


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Em que ano estamos?"))
let anoNascimento = Number(prompt("Quando você nasceu?"))
let anoEmissao = Number(prompt("Em que ano sua carteira foi emitida?"))

const renova20 = (anoAtual-anoNascimento) <= 15
const renova50 = 20 > (anoAtual-anoNascimento) <= 50
const renova60 = (anoAtual-anoNascimento) > 50 
//fiquei cansado e deixei pra proxima.
console.log();

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
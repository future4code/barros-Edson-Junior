// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function arrayOrdemCrescente(a, b){
    return a-b
  }
  return array.sort(arrayOrdemCrescente)
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPares = []
  for (let numeros of array){
    if (numeros % 2 == 0){
      arrayPares.push(numeros)
    }
  }
  return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayNumerosElevados = []
  for (let numeros of array){
    if (numeros % 2 == 0){
      numeros = numeros * numeros
      arrayNumerosElevados.push(numeros)
    }
  }
  return arrayNumerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for (let numero of array){
    if ( maiorNumero < numero ){
      maiorNumero = numero
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = 0
  let menorNumero = 0

  if(num1<num2){
    maiorNumero = num2
    menorNumero = num1
  }else{
    maiorNumero = num1
    menorNumero = num2
  }
  let diferenca = (maiorNumero - menorNumero)
  let maiorDivisivelPorMenor = (maiorNumero % menorNumero == 0)
  
  let textoNumeros = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  } 

  return textoNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = []
  for (let i = 0; numerosPares.length < n; i++){
    if (i % 2 == 0){
      numerosPares.push(i)
    }
  }
   
  return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA == ladoB && ladoB == ladoC){
    return "Equilátero"
  } else if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
    return "Escaleno"
  }else{
    return "Isósceles"
  }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novaArray = []

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let chamadaFilme = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
  return chamadaFilme
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
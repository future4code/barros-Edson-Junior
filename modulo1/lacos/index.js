//-----Exercícios de Interpretação de Código-----


//Exercício 1.

//Resposta: 10. Porque a conta seria 0+1+2+3+4=10



//Exercício 2.

//a. [19, 21, 23, 25, 27, 30], ou seja, todos os números maiores que 18.

//b. Sim, seria suficiente. Isto pode ser feito utilizando uma variável para guardar as informações do indice e um for of e while pra dizer que enquanto
//a variavel for menor que o tamanho da array, ele vai imprimir os valores de cada posição.



//Exercício 3.

// *
// **
// ***
// ****


//-----Exercícios de Escrita de Código-----

//Exercício 1.

let bichinhosEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))

let qnt = bichinhosEstimacao

let quantosBichinhos = []

if (bichinhosEstimacao == 0){
  console.log("Que pena! Você pode adotar um pet!");

}else{
  while (qnt > 0){
    quantosBichinhos.push(prompt("Digite o nome do bicho"))
    qnt = qnt-1
  }
  console.log(quantosBichinhos);
}
   



//Exercício 2.

let arrayOriginal = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

//a. 

for (let i = 0; i < arrayOriginal.length; i++) {
  let elemento = arrayOriginal[i];
  console.log(elemento);
  
}


//b.


for (let i = 0; i < arrayOriginal.length; i++) {
  let elemento = arrayOriginal[i];
  elemento = elemento/10
  console.log(elemento);
  
}


//c.

let array0 = []

for (let i = 0; i < arrayOriginal.length; i++) {
  
  let elemento = arrayOriginal[i];

  if (elemento % 2 == 0){

    array0.push(elemento)
  }
  
}

console.log(array0);



//d.

let novoArray = []

for (let i = 0; i < arrayOriginal.length; i++) {

  let posicao = arrayOriginal[i];

  novoArray.push(`O elemento do índex ${i} é ${posicao}`)
}

console.log(novoArray);


//e.


function qualMaiorNumeroArray(arrayOriginal) {

    let valorMaximo = 0
    let valorMinimo = 2

    for (let i = 0; i < arrayOriginal.length; i++){
        let posicao = arrayOriginal[i]

        if (posicao > valorMaximo){
            valorMaximo = posicao
        }
    }
    for (let i = 0; i < arrayOriginal.length; i++){
      let posicao = arrayOriginal[i]

      if (posicao < valorMinimo){
        valorMinimo = posicao
      }
    }

    return `o maior número é ${valorMaximo} e o valor mínimo é ${valorMinimo}`
}

console.log(qualMaiorNumeroArray(arrayOriginal));


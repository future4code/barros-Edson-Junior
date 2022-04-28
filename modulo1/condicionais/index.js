// -----Exercícios de Interpretação de Código-----

//Ex1.

//a. Ele pergunta ao usuário um valor , transforma no tipo Number e faz uma condição. Se o resto da divisão por 2
//do número pedido pelo usuário for igual a 0, aparece a mensagem "passou no teste", caso contrario, se não for igual a 0,
//aparecerá a mensagem "Não passou no teste".

//b. Números pares.

//c. Números ímpares.


//Ex2.

//a. Serve para buscar e mostrar informações das frutas listadas ou de outras também, no caso o default.

//b. "O preço da fruta Maça é R$ 2.25"

//c. Apareceria o preço do default. "O preço da fruta Pêra é R$ 5"


//Ex3.

//a. A primeira linha está pedindo ao usuário para digitar um primeiro número e transforma esse valor no tipo Number.

//b. "Esse número passou no teste" / Acredito que no caso de -10 daria um erro no console.

//c. Sim. Acredito que seja pois o comando certo para o caso contrario seria utilizar o "Else{}"


// -----Exercícios de Escrita de Código-----

//Ex1.

const idadeUsuario = prompt("Qual a sua idade?")
const numeroIdade = Number(idadeUsuario)

if (numeroIdade >= 18) {
    console.log("Você pode dirigir");
}else{
    console.log("Você não pode dirigir");
}


//Ex2.

let turnoAluno = prompt("Digite o seu turno de aula. M(Matutino), V(Vspertino) ou N(Noturno)")

if (turnoAluno === "M") {
    console.log("Bom dia!");
} 

if (turnoAluno === "V") {
    console.log("Boa tarde!");
}

if (turnoAluno === "N") {
    console.log("Boa noite!");
}


//Ex3.

let entradaAluno = prompt("Digite de novo o seu turno")

switch (entradaAluno){
    case "M":
        console.log("Bom dia!");
        break
    case "V":
        console.log("Boa tarde!");
        break
    case "N":
        console.log("Boa noite!");
        break
    default:
        console.log("Bom qualquer horário!");
        break
}


//Ex4.

let generoFilme = prompt("Qual seu genero de filme preferido?")

let precoIngresso = Number(prompt("Quanto está o ingresso?"))

function cinema(generoFilme, precoIngresso){
    if (generoFilme === "Fantasia" && precoIngresso < 15){
    return "Bom filme!"
}else{
    return "Escolha outro filme :("
}
}

console.log(cinema(generoFilme,precoIngresso));












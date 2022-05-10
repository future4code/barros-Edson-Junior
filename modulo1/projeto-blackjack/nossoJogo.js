/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

if(confirm("Quer iniciar uma nova rodada?")) {
      

   const cartaUm = comprarCarta(); 

   const cartaUmTexto=cartaUm.texto;

   const cartaUmValor=cartaUm.valor;

   const cartaDois = comprarCarta(); 

   const cartaDoisTexto=cartaDois.texto;

   const cartaDoisValor=cartaDois.valor;

   const pontuacao=(cartaUmValor+cartaDoisValor)

console.log(`Usuário - ${cartaUmTexto} ${cartaDoisTexto} - ${pontuacao}`);







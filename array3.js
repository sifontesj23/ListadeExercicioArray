/*3. Crie uma função que adicione uma fruta ao início de um array de frutas e exiba o
 array atualizado.*/

 let frutas = ["Pera","Melancia","Mango"]
 console.log(frutas)

 function adicaoFruta(fruta){
       frutas.unshift(fruta)
       console.log(frutas) 
 }

 adicaoFruta("Maça")
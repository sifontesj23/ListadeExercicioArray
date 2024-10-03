/*4. Crie uma função que remova o primeiro número de um array e exiba o número
 removido e o array atualizado.*/

 let array4 = [12,15,48,48,14]
 console.log(array4)

 function removaPrimeiro(){
    console.log(array4[0])
    array4.shift()
    console.log(array4)
 }

 removaPrimeiro()
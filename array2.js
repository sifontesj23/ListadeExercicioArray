/* 2. Crie uma função que remova o último número de um array e exiba o número
 removido e o array atualizado.*/

 let array2=[10,20,32,55,70]
console.log("Exercicio 2, array original= ",array2 )
function remove(){
    let indexUltimo = array2.length-1 //Calculo de ultimo index do array2.
    console.log("Numero excluido= ", array2[indexUltimo])
    array2.pop() //apagando ultimo valor do array
    console.log(array2)
}
remove()
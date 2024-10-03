/*6. Crie uma função que receba um número. Se o número for maior que 50, remova
 o último número do array. Caso contrário, adicione o número ao final do array.*/

 let array6 = [78,56,25,36,48]
 console.log(array6)

 function compararNumero(num){
    if(num > 50){
        console.log("Numero maoir a 50")
        array6.pop()
        console.log(array6)
    }else{
        console.log("Numero menor a 50")
        array6.push(num)
        console.log(array6)
    }
 }

 compararNumero(5)
 //compararNumero(56)
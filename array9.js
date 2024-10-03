/*9. Crie uma função que exiba uma mensagem indicando se o array de números tem
 mais ou menos de 5 elementos*/

 let array9=[10,20,14,14]

 function comparar(){
    quantidaeElementos=array9.length
    if (quantidaeElementos>5){
        console.log("Quantidade de elementos è maior a 5")
    }else{
        console.log("Quantidade de elementos è menor ou igual a 5")
    }

 }
 comparar()
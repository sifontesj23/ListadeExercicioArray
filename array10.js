/* 10. Crie uma função que receba o nome de uma fruta. Se a fruta for "Morango",
 remova o primeiro item do array. Caso contrário, adicione essa fruta ao final do
 array*/

 let frutas=['Uva',"Limão","Pera","Abacaxi"]
console.log(frutas) //Array original
 function comparaFruta(fruta){
    if(fruta=="Morango"){ //compara se a fruta é igual a 'Morango'
        
        frutas.shift() //Remove primeira fruta de Array

    }else{
        frutas.push(fruta) //Adiciona a fruta ao final de arreglo 
    }
    console.log(frutas)
 }

 //comparaFruta("Morango")
 comparaFruta("Laranja")
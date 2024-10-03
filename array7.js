/*7. Crie uma função que adicione três frutas ao final de um array de frutas e exiba o
array atualizado.*/

let frutas=['Uva',"Limão","Pera","Abacaxi"]
console.log(frutas)
function adicaoFrutas (fruta1,fruta2,fruta3){
    frutas.unshift(fruta1,fruta2,fruta3)
    console.log(frutas)
}

adicaoFrutas("Melao","maça","Laranja")

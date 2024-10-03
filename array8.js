/*8. Crie uma função que remova o último número de um array se houver mais de 3
 números, caso contrário, remova o primeiro número*/

 let array8 = [9,12,23]
  console.log(array8)
 function decidir(){
    console.log("Quantidade Elementos de Array:", tamanhoArray=array8.length)
    if (tamanhoArray>3){ 
        array8.pop()//remova o último número
    
    }else{
        array8.shift()
    }
    console.log(array8)//remova o primeiro número

 }

 decidir()
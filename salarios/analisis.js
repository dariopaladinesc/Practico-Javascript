const salariosecu = ecuador.map(   //Obtengo el salario recorriendo todo el array y se guarda en salariosecu
    function (persona) {
        return persona.salary
    });


const salariosecusorted = salariosecu.sort( //ordeno el salario con .sort
    function (a, b){
    return (a - b)
});


 function medianaritmetica2(lista1){ 
   const mitad = lista1.length % 2; //Comprobamos que el array sea par (% devuelve el residuo)
   const dimension = lista1.length / 2;  //Encontramos el numero medio de la longitud del array
if (mitad == 0){
      const total =  (lista1[dimension] + lista1[dimension-1]) / 2 // los indices del array estan en funcion del valor encontrado anteriormente
      return total; 
    }
     else {
      const total1 = lista1[dimension - 0.5];
      return total1; 
    }
   
  }

 
const totalmediana = medianaritmetica2(salariosecusorted);
console.log(totalmediana);




/////mediana top////

const splicestart = (salariosecusorted.length * 90) / 100 ; //Calculamos el 90% de todos los salarios
const splicecount = salariosecusorted.length - splicestart //Calculamos el top 10% con el 100% menos el 90% calculado anteriormente

const salariostop = salariosecusorted.splice(splicestart, splicecount);

console.log (salariostop)
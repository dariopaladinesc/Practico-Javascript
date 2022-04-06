
  
function mediaA(lista2){
//     let sumatoria = 0;   //Forma alternativa de sumar un array
//    for(let i = 0; i < list.length; i++){
//        sumatoria = sumatoria + lista2[i] ;
//    }
//    const promedio = sumatoria / lista2.length;
//    return promedio;
   
// } 
  
 const sumatoria = lista2.reduce(function(valoracumulado = 0, nuevoelemento){
               return valoracumulado + nuevoelemento 
       })
const promedio = sumatoria / lista2.length;
   return promedio;
   ;
   
    };
  
  
   ///////////////////  MEDIANA   //////////////////////
  //Calcular la mediana con un array establecido
//    const lista = [  El array se elimina ya que esta por medio de una fn que permite cualquier valor 
//       1250,
//       800,
//       100,
//       200,
//       500,
//       700,
//       120,
//       500,
//       4000,
//    ];
  

   function medianaritmetica (lista5){
    const lista1 = lista5.sort(function(a,b){ // el metodo .sort nos permite ordenar datos de un array, esto agregado con la fn y los parametros a-b
        return a - b;
    })
      const mitad = lista1.length % 2; //Comprobamos que el array sea par (% devuelve el residuo)
      const dimension = lista1.length / 2;  //Encontramos el numero medio de la longitud del array
      if (mitad == 0){
         const total =  (lista1[dimension] + lista1[dimension-1]) / 2  // los indices del array estan en funcion del valor encontrado anteriormente
         console.log(total)
      }
      else {
         const total1 = lista1[dimension - 0.5]; 
         console.log(total1)
      }
     
   }
  
  
   //////////////////MODA////////////////////
  
  
   function  calcularmoda(lista){
  
    const contador = [];
    
    lista.map(
        function (elemento){
            if (contador[elemento]){
                contador[elemento] += 1;
            }
            else {
                contador[elemento] = 1
            }
    
        }
    );
    
    const lista1Array = Object.entries(contador).sort(
        function(a,b){
         return   a[1] - b[1]
        }
        
        );
    
    const calcularmoda = lista1Array[lista1Array.length - 1]
    return calcularmoda;
    }
    
    
    
    //////////////////////MEDIA ARITMETICA//////////
    //La media aritmetica es la media tomando en consideracion el peso de cada valor asignado
    //FORMULA [(N3*C3)+ (N3*C3)+ (N3*C3)] / (C1+C2+C3)
    
    
    const notes =[
        {
            course: "Educacion fisica",
            note: 10,
            credit: 2,
        },
        {
            course: "Programacion",
            note: 8,
            credit: 5,
        },
        {
            course: "Finanzas Personales",
            note: 7,
            credit: 5,   
        }
    ];
    
    //Resolver el numerador 
    //Vamos a recorrer el array con el .map lo hacemos con la funcion y la propiedad de la funcion es la variable que recorre el array y que posteriormente va multiplicando cada propiedad del array
    
    const notescredit = notes.map(function(noteobject){  
        return noteobject.note * noteobject.credit;    //notescredit=[20, 40, 35]
    });
    
    //Sumamos las respuestas de la multiplicacion de los pesos por la calificacion  (terminar todo el numerador)
    const sum = 0;
    const notesum = notescredit.reduce(function(sum, newvalue){
            return sum + newvalue;            
        }
    )
    
    
    //Resolver el denominador:
    //Para ello usamos .map para recorrer el array para obtener el valor del peso (credito), y posteriormente .reduce para sumar todos los valores obtenidos del recorrido con .map
    
    const credits = notes.map (function(value1){  //   credits =[2,5,5]
        return value1.credit; 
    })
    
    const sumcredits = credits.reduce(function(val1 = 0, val2){
        return val1 + val2   
    });
    
    const result = notesum / sumcredits ;  //Terminanos la operacion dividiendo numerador para denominador

    console.log(result.toFixed(2))
    
  
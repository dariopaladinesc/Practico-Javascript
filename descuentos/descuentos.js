
function preciocondescuento(precio){
   const cupon1 = document.getElementById("cupon");
   const cupon = cupon1.value;
   if (cupon == "Basico"){
   const valor = precio - (precio * 0.2);
   return valor;
}
   else if (cupon == "Premium"){
   const valor = precio - (precio * 0.3);
   return valor;
}
   else if (cupon == "Gold"){
   const valor = precio - (precio * 0.5);
   return valor;
}
   else 
   alert ("ingrese un cupon valido :)");
}

function totalprice() {
   const price1 = document.getElementById("inputprice");
   const price2 = price1.value;
   const totalF = preciocondescuento(price2); // 
   const result = document.getElementById("totalprice"); //llamamos la etiqueta por el id y lo guardamos en la variable 
   result.innerText = "El precio total con descuento es $" + totalF //Imprimimos el resultado en la etiqueta del parrafo con la variable guardada
}

// const cupones =[  //La otra opcion es creando un array y comparando los indices
//     "primero",
//     "segundo",
//     "tercero",
// ]
// if (cupon == cupones [0]){
//    ...
//    ...
// }

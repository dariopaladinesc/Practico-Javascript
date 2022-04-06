
function calculostotales(ingreso, gasto, años, tasaT){
    const tasa = tasaT / 100
    const ahorroanual = []; //Generamos el array donde se van a guardar los intereses anuales 
    const porcentajegasto = (gasto * 100) / ingreso; //Calculamos si el % es <= 50% ingreso
    if (porcentajegasto <= 50){
        for (i = 1; i <= años; i++ ){
            const ahorro = ingreso * 0.2; //Calculamos el monto en $ a ahorrar
            var interesAnual = ahorro * ((1 + tasa) ** i); //calculo INTERES COMPUESTO    
            ahorroanual.push(interesAnual);
        }
    }else{
        for (i = 1; i <= años; i++){
            const ahorro = ingreso * 0.1; //Calculamos el monto en $ a ahorrar
            var interesAnual = ahorro * ((1 + tasa) ** i);
            ahorroanual.push(interesAnual);
        }
 
    }

const ahorroanualF = ahorroanual.reduce(function(valor1 = 0, valor2){
    return valor1 + valor2; 
})

const promedio = ahorroanualF / años;

var interesAnual1 = interesAnual.toFixed(2);
var promedio1 = promedio.toFixed(2)
console.log("El dinero ahorrado en "+ años + " años es de: $" + interesAnual1);
console.log("La media de dinero obtenido en " + años + " años es de: $" + promedio1);
return {
    interes: interesAnual1, 
    promedio: promedio1,

}

}

function mostrarResultado(){ 
    const ingreso2 = document.getElementById("ingreso1");
    const ingreso = ingreso2.value;
    const gasto2 = document.getElementById("mensuales1");
    const gasto = gasto2.value;
    const años2 = document.getElementById("años1");
    const años = años2.value;
    const tasa2 = document.getElementById("tasa1");
    const tasa = tasa2.value;
    const dineroTotal = calculostotales(ingreso, gasto, años, tasa).interes;
    const dineroTotal2 = calculostotales(ingreso, gasto, años, tasa).promedio;
    const mostrarTotal = document.getElementById("mostrarTotal");
    mostrarTotal.innerText = "El dinero ahorrado en "+ años + " años es de: $" + dineroTotal;
    const mostrarPromedio = document.getElementById("mostrarPromedio");
    mostrarPromedio.innerText = "La media de dinero obtenido en " + años + " años es de: $" + dineroTotal2;
}




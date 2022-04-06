
//CUADRADO///////////////

console.group("Cuadrado")
// const lado = 5;
// console.log("los lados del cuadrado son " + lado + "cm")

function perimetroC(lado){
    return lado * 4;
} 


function areaC(lado){
    return lado **2;
 } 
console.groupEnd();

///TRIANGULO////////////////////////////////////

console.group("Triangulo")
// const lado1 = 6; 
// const lado2 = 6;
// const base = 4;
// const altura = 5.5;


function perimetroT(lado111, lado222, base11){
    return  lado111 + lado222 + base11;
} 

function areaT(base, altura){
    return (base * altura) / 2;
} 

console.groupEnd();


/////CIRCULO///////////////////////////////////////////////////

console.group("Circulo"); 
// const radio = 5;
 const pi = Math.PI;
//LOS USUARIOS SOLO SABEN EL VALOR DEL RADIO

function diametroCir(radio){ //calculamos el diametro en un FN teniendo como parametro el radio
    return radio *2
}
function perimetroCir(radio){
    const diametro = diametroCir(radio)// llamamos a la función que calcula el diametro 
    return diametro * pi //area = D*pi
} 

function areaCir (radio){
    return (radio * radio) * pi;
}
console.groupEnd();









///Interaccion con html//////////////////////////

function perimetrocuadrado(){
    const input = document.getElementById("inputcuadrado"); //traemos el valor ingreasado por el usuario en HTML y lo guardamos en la variable input
    const value = input.value; //convertimos misma variable en numero y la guardamos en variable "value"
    const perimetro1 = perimetroC(value); //llamamos la funcion que calcula el perimetro y pasamos como parametro el valor ingresado por el usuario en este caso "value"
    const result = document.getElementById("result-perimetroC");
    result.innerText = "El perímetro del cuadrado es de: " + perimetro1;
    
}

function areacuadrado(){
    const input = document.getElementById("inputcuadrado"); 
    const value = input.value; 
    const area1 = areaC(value); 
    const resultT = document.getElementById("result-areaC");
    resultT.innerText = "El área del cuadrado es de: " + area1;
}


///TRIANGULO

function perimetrotriangulo(){
    const base1 = document.getElementById("base1");
    const lado11 = document.getElementById("lado-uno1");
    const lado22 = document.getElementById("lado-dos1");
    const base = parseInt(base1.value);
    const lado1 = parseInt(lado11.value);
    const lado2 = parseInt(lado22.value);
    const perimetroTR = perimetroT(base, lado1, lado2);
    const resultTr = document.getElementById("result-perimetroT");
    resultTr.innerText = "El perímetro del triangulo es de: " + perimetroTR;
}


function areatriangulo(){
    const base1 = document.getElementById("base1");
    const alt = document.getElementById("altura");
    const base = base1.value;
    const altura = alt.value;
    const areaTR = areaT(base, altura);
    const resultTRa = document.getElementById("result-areaT");
    resultTRa.innerText = "El área del triangulo es de: " + areaTR;
}

////CIRCULO//////

function perimetrocirculo(){
    const diam = document.getElementById("inputD");
    const diametro = diam.value;
    const radio = perimetroCir(diametro);
    const radiototal = radio.toFixed(3)
    const resultCir = document.getElementById("result-perimetroCir");
    resultCir.innerText = "El perímetro del circulo es de: " + radiototal;
}


function areacirculo(){
    const diam = document.getElementById("inputD");
    const diametro = diam.value;
    const radio = areaCir(diametro);
    const radiototal1 = radio.toFixed(3)
    const resultCirA = document.getElementById("result-areaCir");
    resultCirA.innerText = "El área del circulo es de: " + radiototal1;
}

  //calcular altura  

  function altura(base, lado, lado1){
    
    const subtotal = Math.sqrt((lado**2)-((base**2)/4));
    return subtotal;
    
    }

function alturaTR(){
    const b1 = document.getElementById("base");
    const b = Number(b1.value); 
    const l1 = document.getElementById("lado-uno");
    const a1 = Number(l1.value);
    const l2 = document.getElementById("lado-dos");
    const a2 = Number(l2.value);

    if (a1 == a2 ){
        const total = altura(b, a1, a2);
        const total1 = total.toFixed(3)
        const resultTRi = document.getElementById("result-trianguloI");
        resultTRi.innerText = "La altura del triangulo es de: " + total1;
    }
    else 
    alert("No son valores validos de un triangulo isóceles")
}

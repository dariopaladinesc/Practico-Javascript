
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

// CONDICIONALES 
// 1. IF
var edad = 30;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else { // 2. ELSE
    console.log("Eres menor de edad");
}

console.log("Fin del programa");

// ejemplos de variable con if

let precio_naranjas = 230;
let descuento = 0.1;

if (precio_naranjas >= 100 && precio_naranjas < 200) {
    let precio_final = precio_naranjas - (precio_naranjas * descuento);
    console.log("El precio final es: " + precio_final);
    console.log("Tienes un descuento del 10%");
} else if(precio_naranjas >= 200){
    let precio_final = precio_naranjas - (precio_naranjas * 0.2);
    console.log("El precio final es: " + precio_final);
    console.log("Tienes un descuento del 20%");
}

console.log("Fin del programa");

// 3. Switch
//// Ejemplo con condicional Switch
 
let diaObligatorio = "Marzo"
switch (diaObligatorio) {
    case "Enero":
        console.log("El dia obligatorio es: Martes");
        break;
    case "Febrero": 
        console.log("El día obligatorio es: Miercoles"); 
        break;
    default:
        console.log("El dia Obligatorio aún no esta definido")
}
 
// perador ternario 
 
let trabajaFeliz = false
let sitrabajaFeliz = trabajaFeliz ? "Excelente!" : "Siga Intentando" ;
console.log(sitrabajaFeliz);


/* 1.PROBLEMA: La federación nacional de fútbol necesita de sus
servicios como desarrollador de software, para codificar una
función en JS que permita calcular la edad de los jugadores,
de acuerdo al año de nacimiento de estos. Declare la función
calcularEdad() y pruebe su funcionamiento. */

console.log("Función Tradicional");

function calcularEdad(nacimiento){
    let edad = 2021 - nacimiento;
    return(edad)
}

console.log("Su edad es: "+ calcularEdad(1987));

console.log()
console.log("Función Flecha");

let calcularEdadFlecha = (origen)=> 2021 - origen;

console.log("Su edad es: "+ calcularEdadFlecha(1985));

/*2. PROBLEMA: La federación nacional de fútbol también necesita
que usted codifique un nuevo programa para
establecer(clasificar) el biotipo de los jugadores, teniendo
en cuenta la estatura de estos. La clasificación internacional
del Biotipo de futbolista es:
• Estatura <1.70 m (Biotipo Bajo)
• 1.70 m <=Estatura < 1.80 m (Biotipo Promedio)
• Estatura >= 1,80 m (Biotipo Superior)*/

console.log()
console.log()
console.log("Función Tradicional");

function establecerBiotipo(estatura){
    let biotipo

    if(estatura >= 1.80){
       biotipo = "Biotipo Superior";
    }

    else{
        if(estatura < 1.80 && estatura >= 1.70){
           biotipo = "Biotipo promedio";
        }
        else{
           biotipo = "Biotipo bajo";
        }
    }


    return(biotipo)
}

console.log(establecerBiotipo(1.60));
console.log(establecerBiotipo(1.70));
console.log(establecerBiotipo(1.80));

console.log()
console.log("Función Flecha");

let establecerBiotipoFlecha = (est)=> {
    let type
    if(est >=1.80){
       type = "Biotipo Superior"
    }
    else{
        if(est <1.80 && est >= 1.70){
           type = "Biotipo Promedio"
        }
        else{
           type = "Biotipo Bajo"
        }
    }
    return(type)
};

console.log(establecerBiotipoFlecha(1.20));
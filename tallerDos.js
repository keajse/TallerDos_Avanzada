/* 1.PROBLEMA: Yoda el maestro jedi, necesita asignar a sus
aprendices Padawans 2 actividades dependiendo de la edad de
ellos:
 Manejo de la fuerza: Si el aprendiz es menor de 15 años
 Manejo del sable de luz: Si el aprendiz es mayor de 15
años
Inicialmente, se debe programar una función que asocie los
datos de: {nombre, planeta, edad y estatura} de 1 Padawan a un
objeto y una vez este objeto sea creado se debe llamar a una
función secundaria que clasifique y muestre en consola la
actividad asignada al Padawan*/

/*function asignar(nombre, planeta, edad, estatura){
    let aprendiz={
        name = nombre,
        planet = planeta,
        age = edad,
        height = estatura
    }


    return(aprendiz)

}*/

function activity(/*nombre, planeta, estatura,*/ edad, actividad) {
    /*let nombre = nombre
    let planeta =  planeta
    let edad = edad
    let estatura = estatura*/

    if(edad <= 15){
        let age = `Su edad es de: ${edad}`;
        actividad(null, age)
        
    }
    else{
        let mayor = `Su edad es de: ${edad}`;
        actividad(mayor, null)
    }
}


activity(/*"Luke","Marte",1.80,*/ 16,function(error, mensajeOk){

    if(error){
        console.log(error);
        console.log("Manejo del sable de luz")
    }else{
        console.log(mensajeOk);
        console.log("Manejo de la fuerza");
    }
   
});


/*2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el
planeta yavin4 para robar uno de los planos de una de las 10
estrellas de la muerte, como distractor el imperio ha creado
planos falsos y se tiene el dato de que el número de serie de
estos planos falsos comienza por encima del número 10; es decir
todos los planos falsos tienen números de serie consecutivos
comenzando desde el #11. SOLO si se obtiene un plano verdadero
Chewbacca y Han pueden abordar su nave y ejecutar un mensajeen
consola avisando que han despegado*/

function robarPlanos(idPlano,despegar){
    if (idPlano > 0 && idPlano < 11){
        let mensaje = `El plano que se conseguió fue el ${idPlano}`;
        despegar(null, mensaje);
        
    }else{
        let error = `Pilas! No se ha robado un plano real `;
        despegar(error, null);
    }
}

robarPlanos(3,function(error, message){

    if(error){
        console.log(error);
        console.log("No despegar")
    }else{
        console.log(message);
        console.log("Estamos despegando");
    }
    

    
});

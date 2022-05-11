/*********  Inicio del cotizador ONLINE  ***********/

// Declaro e inicializo parámetros de cotización

let nombreEmpresa = "";
let mtoImplementacionBaseUsd=0;
let cotizActualDolar=0;
let cantEstablecimientos=0;
const cantBaseEstablecimientos=1;
let cantNormas=0;
const cantBaseNorma=1;
let cantUsuarios=0;
const cantBaseUsuarios=60;
let cantDocumentos=0;
const cantBaseDocumentos=100;


// Función de validación de datos

let message = "";

function validaIngreso (valor, tipo)
{
    
    if (valor === null ||   valor === "") 
    {
        message = "El dato solicitado no puede estar vacío."
        return message;
    }
    else
    {
        if(typeof(valor) === tipo)
            {
                message="Perfecto!"
                return message;
            }
            else
            {
                message = "Verifique el dato ingresado!";
                return message;
            }
    }
}


// Solicito al usuario que ingrese los parámetros

alert("Bienvenido, para realizar la cotización por favor completa los datos que te pedimos a continuación: ");


//Valido el nombre de la empresa
 while (validaIngreso(nombreEmpresa, "string") !== "Perfecto!")
{
    nombreEmpresa = prompt("Ingresa el nombre de la empresa");
    alert(validaIngreso(nombreEmpresa, "string"));
    
}

// valido el monto ingresado
mtoImplementacionBaseUsd = prompt("Ingresa el monto base de implementación en USD: ");

while (isNaN(mtoImplementacionBaseUsd) ||  mtoImplementacionBaseUsd.trim()==="" || mtoImplementacionBaseUsd === null || mtoImplementacionBaseUsd<= 0) 
{
    alert("El Monto debe ser un número y mayor que 0");
    mtoImplementacionBaseUsd = prompt("Ingresa el monto base de implementación en USD: ");
    
}
alert("Perfecto!")
mtoImplementacionBaseUsd = mtoImplementacionBaseUsd;

// Valido la cotización ingresada

cotizActualDolar = prompt("Ingresa la cotización del dólar actual - Blue ;)  "); 

while (isNaN(cotizActualDolar) ||  cotizActualDolar.trim()==="" || cotizActualDolar === null || cotizActualDolar<=0 ) 
{
    alert("La cotización debe ser un número y mayor que 0");
    cotizActualDolar = prompt("Ingresa la cotización del dólar actual - Blue ;)  "); 
}
alert("Perfecto!")
cotizActualDolar = cotizActualDolar;

// Valido la cantidad de  establecimientos ingresada
cantEstablecimientos = prompt("Ingresa la cantidad de establecimientos de su empresa: "); 

while (isNaN(cantEstablecimientos) ||  cantEstablecimientos.trim()==="" || cantEstablecimientos === null || cantEstablecimientos<=0) 
{
    alert("La cantidad debe ser un número y mayor que 0");
    cantEstablecimientos = prompt("Ingresa la cantidad de establecimientos de su empresa: "); 
    
}
alert("Perfecto!")
cantEstablecimientos = cantEstablecimientos;


// Valido la cantidad de  normas ingresada
cantNormas = prompt("Ingresa la cantidad de normas certificadas: "); 

while (isNaN(cantNormas) ||  cantNormas.trim()==="" || cantNormas === null) 
{
    alert("La cantidad debe ser un número ");
    cantNormas = prompt("Ingresa la cantidad de normas certificadas: "); 
    
}
alert("Perfecto!")
cantNormas = cantNormas;

// Valido la cantidad de  usuarios ingresada
cantUsuarios = prompt("Ingresa la cantidad de usuarios de su empresa: "); 

while (isNaN(cantUsuarios) ||  cantUsuarios.trim()==="" || cantUsuarios === null || cantUsuarios<=0) 
{
    alert("La cantidad debe ser un número y mayor que 0");
    cantUsuarios = prompt("Ingresa la cantidad de usuarios de su empresa: "); 
    
}
alert("Perfecto!")
cantUsuarios = cantUsuarios;

// Valido la cantidad de  documentos  ingresada
cantDocumentos = prompt("Ingresa la cantidad de documentos de su empresa: "); 

while (isNaN(cantDocumentos) ||  cantDocumentos.trim()==="" || cantDocumentos === null || cantDocumentos<=0) 
{
    alert("La cantidad debe ser un número y mayor que 0");
    cantDocumentos = prompt("Ingresa la cantidad de documentos de su empresa: "); 
    
}
alert("Perfecto!")

cantDocumentos = cantDocumentos;


console.log("Nombre de la empresa: " + nombreEmpresa.toUpperCase() );
console.log("Monto base de implementación (en dólares): $" + mtoImplementacionBaseUsd);
console.log("Cotización del dólar blue: $" + cotizActualDolar);
console.log("Cantidad de establecimientos: " + cantEstablecimientos);
console.log("Cantidad de normas certificadas: " + cantNormas);
console.log("Cantidad de usuarios: " + cantUsuarios);
console.log("Cantidad de documentos: " + cantDocumentos);

function calculaImporte ()
{
    let valorParcial=0;
    let valorEstab=0;
    let valorNormas=0;
    let valorUsuarios=0;
    let valorDocs=0;
    valorParcial = mtoImplementacionBaseUsd * cotizActualDolar;
   
    // Establecimientos
    
    if (cantEstablecimientos > cantBaseEstablecimientos) // si es mayor a la cantidad base lo convierto en porcentaje (10% por cada uno de más) y se lo sumo al valor.
    {
        cantEstablecimientos = cantEstablecimientos - cantBaseEstablecimientos // le resto la base
        
        valorEstab  =  (valorParcial * (cantEstablecimientos * 0.1))
    }

    // Normas
    if (cantNormas > cantBaseNorma) // si es mayor a la cantidad base lo convierto en porcentaje (5% por cada norma de más) y se lo sumo al valor.
    {
        cantNormas = cantNormas - cantBaseNorma // le resto la base
        
        valorNormas = (valorParcial * (cantNormas * 0.05))
    }
    
    // Usuarios
    if (cantUsuarios > cantBaseUsuarios) // si es mayor a la cantidad base lo convierto en porcentaje (12% por cada 30 usuarios de más) y se lo sumo al valor.
    {
        cantUsuarios = cantUsuarios - cantBaseUsuarios;
       
        valorUsuarios = (valorParcial * (Math.trunc(cantUsuarios/30) * 0.12) ); // Divido los usuarios de más por 30, tomo su parte entera y la multiplico por  el porcentaje.
    }
    
    // Documentos 

    if (cantDocumentos > cantBaseDocumentos) // si es mayor a la cantidad base lo convierto en porcentaje (5% por cada 30 documentos de más) y se lo sumo al valor.
    {
        cantDocumentos = cantDocumentos - cantBaseDocumentos;

        
        valorDocs = (valorParcial * (Math.trunc(cantDocumentos/30) * 0.05) ); // Divido los usuarios de más por 30, tomo su parte entera y la multiplico por  el porcentaje.
    }

    valorFinal = valorParcial + valorEstab + valorNormas + valorUsuarios + valorDocs;

    return valorFinal;
}

console.log ("De acuerdo con los datos ingresados el valor es: " + calculaImporte());


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



/**************  BEGIN VALIDATION FUNCTIONS *******************/


//Validación de datos
let message = "";

function validaIngreso(valor, tipo)
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


function userValidation(usrName, usrPassword)
{
     for (let i = 0; i < lstUsers.length; i++) {
      if (lstUsers[i].usrName === usrName && lstUsers[i].usrPassword === usrPassword)
      {
          return true;
      }            
    }
}

function companyValidation() {
    const inputCompanyName = document.getElementById("inputCompanyName");
    if (inputCompanyName.value.trim() === "")
    {
        const lblCompanyName = document.getElementById("lblCompanyName");
        lblCompanyName.style.display = "block";
        lblCompanyName.innerText="El nombre de la empresa no puede estar vacío.";
        
    }
    else
    {
       return nombreEmpresa = inputCompanyName.value;
    }
}

function baseAmountValidation() {
    const inputBaseAmount = document.getElementById("inputBaseAmount");
    if (inputBaseAmount.value.trim() === "" ||  isNaN(inputBaseAmount.value) ||   inputBaseAmount.value<= 0)
    {
        const lblBaseAmount = document.getElementById("lblBaseAmount");
        lblBaseAmount.style.display = "block";
        lblBaseAmount.innerText="El monto inicial debe ser mayor a 0 (cero)";
    }
    else
    {
        return mtoImplementacionBaseUsd =inputBaseAmount.value ;
    }
}

function usdPriceValidation() {
    const inputUsDolarPrice = document.getElementById("inputUsDolarPrice");
    if (inputUsDolarPrice.value.trim() === "" ||  isNaN(inputUsDolarPrice.value) ||   inputUsDolarPrice.value<= 0)
    {
        const lblUsDolarPrice = document.getElementById("lblUsDolarPrice");
        lblUsDolarPrice.style.display = "block";
        lblUsDolarPrice.innerText="La cotización del dólar debe ser mayor a 0 (cero)";
    }
    else
    {
        return cotizActualDolar =inputUsDolarPrice.value ;
    }
}
 

/**************  END VALIDATION FUNCTIONS *******************/

/*************** BEGIN FRONTEND FUNCTIONS **************** */

function showServices(){
    const serviceContainer = document.getElementById("services");
    serviceContainer.style.display='flex';
}

function hideFormSoftware(){
    const formSoftware = document.getElementById("frmSoftwareParameters");
    formSoftware.style.display = 'none'
}

function showFormSoftware(){
    const formSoftware = document.getElementById("frmSoftwareParameters");
    formSoftware.style.display='flex';
    formSoftware.style.flexDirection = 'column';
}

function hideLabels (){
    const labels = document.getElementsByClassName("frmSoftwareParameters__lblError");
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.display='none';
              
    }
}

/*************** END FRONTEND FUNCTIONS **************** */

class Users
{
   constructor (usrName, usrPassword)
   {
       this.usrName = usrName;
       this.usrPassword = usrPassword;
   }
}

//  Hardcoded users list 

const lstUsers = [
    {usrName:"iprieto", usrPassword: "123456"},
    {usrName:"mramos", usrPassword: "12345678"},
    {usrName: "lvergara", usrPassword: "lvergara123" }
]

// Login

const inputUser = document.getElementById("inputUser");
const  inputPass = document.getElementById("inputPass");
let btnLogin = document.getElementById("btnLogin");

btnLogin.onclick = () =>{
    
    let userName = inputUser.value.trim();
    let userPassword = inputPass.value;
    
   if(userName ==="" ||  userPassword ==="" )
   {
       alert("El usuario y la contraseña son obligatorios");
   }
   else
   {
        if (!userValidation(userName, userPassword))
        {
            alert("Su usuario o contraseña no son válidos");
        }
        else
        {
            const usrInfo = document.getElementById("usrInfoDescription");
            usrInfo.innerHTML = `<p>Bienvenido: ${userName}</p>`;
            document.getElementById("frmUserData").remove(); // Si el login es exitoso borro el  formulario del DOM
            showServices(); //muestra los servicios disponibles
        }
   }
}

//Muestro los formularios a completar de acuerdo con el servicio elegido

let btnServiceSoftware = document.getElementById("btnServiceSoftware");
let btnServiceAudit = document.getElementById("btnServiceAudit");
let btnServiceConsultant = document.getElementById("btnServiceConsultant");

btnServiceSoftware.onclick = () =>{
    showFormSoftware();
}

btnServiceAudit.onclick = () => {
    hideFormSoftware();
}

btnServiceConsultant.onclick = () =>{
    hideFormSoftware();
}

const btnSoftwareCalc = document.getElementById("btnSoftwareCalc");
btnSoftwareCalc.onclick = () =>{
    companyValidation();
    baseAmountValidation();
    usdPriceValidation();
    
}

const btnSoftwareClean = document.getElementById("btnSoftwareClean");
btnSoftwareClean.onclick = () =>{
    hideLabels();
}



// // Valido la cantidad de  establecimientos ingresada
// cantEstablecimientos = prompt("Ingresa la cantidad de establecimientos de su empresa: "); 

// while (isNaN(cantEstablecimientos) ||  cantEstablecimientos.trim()==="" || cantEstablecimientos === null || cantEstablecimientos<=0) 
// {
//     alert("La cantidad debe ser un número y mayor que 0");
//     cantEstablecimientos = prompt("Ingresa la cantidad de establecimientos de su empresa: "); 
    
// }

// cantEstablecimientos = cantEstablecimientos;

// // Declaro la clase Establecimiento
//  class Establecimiento
//  {
//     constructor (id, nombre, ciudad)
//     {
//         this.id = id;
//         this.nombre = nombre.toUpperCase();
//         this.ciudad = ciudad.toUpperCase();
//     }
//  }

// const listaEstablecimiento = [];

// // Por cada establecimiento ingresado solicito el nombre y la ciudad
// for (let i = 0; i < cantEstablecimientos ; i++) {
//         let idEstab = i;
//         let nombreEstab = prompt("Ingrese el nombre del establecimiento N° "+ i);
//         let ciudadEstab = prompt("Ingrese la ciudad del establecimiento N° "+i);
//         listaEstablecimiento.push(new Establecimiento (idEstab, nombreEstab, ciudadEstab) );
// }
// alert("Perfecto!")

// // Valido la cantidad de  normas ingresada
// cantNormas = prompt("Ingresa la cantidad de normas certificadas: "); 

// while (isNaN(cantNormas) ||  cantNormas.trim()==="" || cantNormas === null) 
// {
//     alert("La cantidad debe ser un número ");
//     cantNormas = prompt("Ingresa la cantidad de normas certificadas: "); 
    
// }
// alert("Perfecto!")
// cantNormas = cantNormas;

// // Valido la cantidad de  usuarios ingresada
// cantUsuarios = prompt("Ingresa la cantidad de usuarios de su empresa: "); 

// while (isNaN(cantUsuarios) ||  cantUsuarios.trim()==="" || cantUsuarios === null || cantUsuarios<=0) 
// {
//     alert("La cantidad debe ser un número y mayor que 0");
//     cantUsuarios = prompt("Ingresa la cantidad de usuarios de su empresa: "); 
    
// }
// alert("Perfecto!")
// cantUsuarios = cantUsuarios;

// // Valido la cantidad de  documentos  ingresada
// cantDocumentos = prompt("Ingresa la cantidad de documentos de su empresa: "); 

// while (isNaN(cantDocumentos) ||  cantDocumentos.trim()==="" || cantDocumentos === null || cantDocumentos<=0) 
// {
//     alert("La cantidad debe ser un número y mayor que 0");
//     cantDocumentos = prompt("Ingresa la cantidad de documentos de su empresa: "); 
    
// }
// alert("Perfecto!")

// cantDocumentos = cantDocumentos;

//  const quotationParameters = document.getElementById("quotationParameters");
//  quotationParameters.innerHTML = `<h4> Datos para la cotización </h4>
//     <p>Nombre de la empresa: ${nombreEmpresa.toUpperCase()} </p>
//     <p>Monto base de implementación (en dólares): u$s ${mtoImplementacionBaseUsd} </p>
//     <p>Cotización del dólar blue: $ ${cotizActualDolar} </p>
//     <p>Cantidad de establecimientos:  ${cantEstablecimientos} </p>
//     `
// // Muestro los establecimientos ingresados
// for (const estab of listaEstablecimiento)
// {
//     const branchP = document.createElement("p");
//     branchP.innerText= `Establecimiento: ${estab.id}  - ${estab.nombre} - ${estab.ciudad}`
//     quotationParameters.appendChild(branchP);
// }
// const standardNumber = document.createElement("p");
// standardNumber.innerText = `Cantidad de normas certificadas: ${cantNormas}`
// quotationParameters.appendChild(standardNumber);
// const usersNumber = document.createElement("p");
// usersNumber.innerText = `Cantidad de usuarios:  ${cantUsuarios}`
// quotationParameters.appendChild(usersNumber);
// const documentNumber = document.createElement("p");
// documentNumber.innerText = `Cantidad de documentos:  ${cantDocumentos}`
// quotationParameters.appendChild(documentNumber);


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

// const price = document.getElementById("price");
//  price.innerHTML = `<h4> Precio de la cotización</h4>
//     <p>De acuerdo con los parámetros ingresados, el valor es: $ ${calculaImporte()} </p>`




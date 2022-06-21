/*********  Inicio del cotizador ONLINE  ***********/

// Declaro e inicializo parámetros de cotización

let nombreEmpresa = "";
let mtoImplementacionBaseUsd = 0;
let cotizActualDolar = 0;
let cantEstablecimientos = 0;
const cantBaseEstablecimientos = 1;
let cantNormas = 0;
const cantBaseNorma = 1;
let cantUsuarios = 0;
const cantBaseUsuarios = 60;
let cantDocumentos = 0;
const cantBaseDocumentos = 100;

/**************  BEGIN VALIDATION FUNCTIONS *******************/

function userValidation(usrName, usrPassword) {
    let listStoragedUsers = JSON.parse(localStorage.getItem("usuarios")); //parseo el JSON para buscar la coincidencia del usuario que se loguea

    for (let i = 0; i < localStorage.length; i++) {
        
         if (listStoragedUsers[i].usrName === usrName && listStoragedUsers[i].usrPassword === usrPassword) {
             return true;
         }
    }
}

function companyValidation() {
    const inputCompanyName = document.getElementById("inputCompanyName");
    if (inputCompanyName.value.trim() === "") {
        const lblCompanyName = document.getElementById("lblCompanyName");
        lblCompanyName.style.display = "block";
        lblCompanyName.innerText = "El nombre de la empresa no puede estar vacío.";

    } else {
        return nombreEmpresa = inputCompanyName.value;
    }
}

function baseAmountValidation() {
    const inputBaseAmount = document.getElementById("inputBaseAmount");
    if (inputBaseAmount.value.trim() === "" || isNaN(inputBaseAmount.value) || inputBaseAmount.value <= 0) {
        const lblBaseAmount = document.getElementById("lblBaseAmount");
        lblBaseAmount.style.display = "block";
        lblBaseAmount.innerText = "El monto inicial debe ser mayor a 0 (cero)";
    } else {
        return mtoImplementacionBaseUsd = inputBaseAmount.value;
    }
}

function usdPriceValidation() {
    const inputUsDolarPrice = document.getElementById("inputUsDolarPrice");
    if (inputUsDolarPrice.value.trim() === "" || isNaN(inputUsDolarPrice.value) || inputUsDolarPrice.value <= 0) {
        const lblUsDolarPrice = document.getElementById("lblUsDolarPrice");
        lblUsDolarPrice.style.display = "block";
        lblUsDolarPrice.innerText = "La cotización del dólar debe ser mayor a 0 (cero)";
    } else {
        return cotizActualDolar = inputUsDolarPrice.value;
    }
}

function branchQuantityValidation() {
    const inputBranchsQuantity = document.getElementById("inputBranchsQuantity");
    if (inputBranchsQuantity.value.trim() === "" || isNaN(inputBranchsQuantity.value) || inputBranchsQuantity.value <= 0) {
        const lblBranchsQuantity = document.getElementById("lblBranchsQuantity");
        lblBranchsQuantity.style.display = "block";
        lblBranchsQuantity.innerText = "La cantidad  de establecimientos debe ser mayor a 0 (cero)";
    } 
    else
    {
        return cantEstablecimientos = inputBranchsQuantity.value;
    }
}

function standardQuantityValidation() {
    const inputStandardsQuantity = document.getElementById("inputStandardsQuantity");
    if (inputStandardsQuantity.value.trim() === "" || isNaN(inputStandardsQuantity.value)) {
        const lblStandardsQuantity = document.getElementById("lblStandardsQuantity");
        lblStandardsQuantity.style.display = "block";
        lblStandardsQuantity.innerText = "La cantidad  de normas debe ser válida";
    } else {
        return cantNormas = inputStandardsQuantity.value;
    }
}

function usersQuantityValidation() {
    const inputUsersQuantity = document.getElementById("inputUsersQuantity");
    if (inputUsersQuantity.value.trim() === "" || isNaN(inputUsersQuantity.value || inputUsersQuantity.value <= 0)) {
        const lblUsersQuantity = document.getElementById("lblUsersQuantity");
        lblUsersQuantity.style.display = "block";
        lblUsersQuantity.innerText = "La cantidad  de usuarios debe ser mayor a cero (0).";
    } else {
        return cantUsuarios = inputUsersQuantity.value;
    }
}

function documentsQuantityValidation() {
    const inputDocumentsQuantity = document.getElementById("inputDocumentsQuantity");
    if (inputDocumentsQuantity.value.trim() === "" || isNaN(inputDocumentsQuantity.value || inputDocumentsQuantity.value <= 0)) {
        const lblDocumentsQuantity = document.getElementById("lblDocumentsQuantity");
        lblDocumentsQuantity.style.display = "block";
        lblDocumentsQuantity.innerText = "La cantidad  de documentos debe ser mayor a cero (0).";
    } else {
        return cantDocumentos = inputDocumentsQuantity.value;
    }
}

/**************  END VALIDATION FUNCTIONS *******************/

/*************** BEGIN FRONTEND FUNCTIONS **************** */

function showServices() {
    const serviceContainer = document.getElementById("services");
    serviceContainer.style.display = 'flex';
}

function hideFormSoftware() {
    const formSoftware = document.getElementById("frmSoftwareParameters");
    formSoftware.style.display = 'none';
    const softwareReferences = document.getElementById("softwareReferences");
    softwareReferences.style.display = 'none';
    const price = document.getElementById("price");
    price.style.display = 'none';
}

function showFormSoftware() {
    const formSoftware = document.getElementById("frmSoftwareParameters");
    formSoftware.style.display = 'flex';
    formSoftware.style.flexDirection = 'column';
}

function hideLabels() {
    const labels = document.getElementsByClassName("frmSoftwareParameters__lblError");
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.display = 'none';
    }
}

// async references load 

async function showReferences () {
    const  resp =await fetch('assets/data/references.json');
    const data = await resp.json();

    const contenedor = document.getElementById("softwareReferences");
    contenedor.style.display = 'flex';
    contenedor.style.flexDirection = 'column';
    contenedor.innerHTML= `<h4>Referencias - Valores base </h4>`;

    data.forEach((ref)=>{
        const div = document.createElement('div');
        div.innerHTML =`<p style="font-weight: bold">${ref.titulo}</p>
                                    <p>Cantidad base: ${ref.base} </p>
                                    <p>Detalle: ${ref.detalle} </p>`;
                                    
     contenedor.append(div);   

    }
    )
}

/*************** END FRONTEND FUNCTIONS **************** */

class Users {
    constructor(usrName, usrPassword) {
        this.usrName = usrName;
        this.usrPassword = usrPassword;
    }
}

//  Hardcoded users list 

const lstUsers = [{
        usrName: "iprieto",
        usrPassword: "123456"
    },
    {
        usrName: "mramos",
        usrPassword: "12345678"
    },
    {
        usrName: "lvergara",
        usrPassword: "lvergara123"
    }
]

//Guardo en el local storage los usuarios creados
localStorage.setItem("usuarios", JSON.stringify(lstUsers));

// Login

const inputUser = document.getElementById("inputUser");
const inputPass = document.getElementById("inputPass");
let btnLogin = document.getElementById("btnLogin");

btnLogin.onclick = () => {

    let userName = inputUser.value.trim();
    let userPassword = inputPass.value;

    if (userName === "" || userPassword === "") {
        swal({
            icon: "error",
            title:"ERROR",
            text: "El usuario y la contraseña son obligatorios"
        });
    } 
    else 
    {
        if (!userValidation(userName, userPassword)) {
            swal({
                icon: "error",
                title:"ERROR",
                text: "Su usuario o contraseña no son válidos"
            });
        } 
        else
        {
            const usrInfo = document.getElementById("usrInfoDescription");
            usrInfo.innerHTML = `<p>Bienvenido: ${userName}</p>`;
            document.getElementById("usrLogin").remove(); // Si el login es exitoso borro el  formulario del DOM
            showServices(); //muestra los servicios disponibles
        }
    }
}

//Muestro los formularios a completar de acuerdo con el servicio elegido

let btnServiceSoftware = document.getElementById("btnServiceSoftware");
let btnServiceAudit = document.getElementById("btnServiceAudit");
let btnServiceConsultant = document.getElementById("btnServiceConsultant");

btnServiceSoftware.onclick = () => {
    showFormSoftware();
    showReferences();
}

btnServiceAudit.onclick = () => {
    hideFormSoftware();
}

btnServiceConsultant.onclick = () => {
    hideFormSoftware();
}

// Botón calcular cotización del servicio de software
const btnSoftwareCalc = document.getElementById("btnSoftwareCalc");
btnSoftwareCalc.onclick = () => {
    companyValidation();
    baseAmountValidation();
    usdPriceValidation();
    branchQuantityValidation();
    standardQuantityValidation();
    usersQuantityValidation();
    documentsQuantityValidation();
    // pasó las validaciones de todos los campos - > realizo el cálculo
    const price = document.getElementById("price");
    price.style.display = 'flex';
    price.style.flexDirection = 'column';
    price.innerHTML = `<h4> Precio de la cotización</h4>
    <p>De acuerdo con los parámetros ingresados, el valor es: $ ${calculaImporte()} </p>`

}

// Limpia formulario de cotización del servicio de software
const btnSoftwareClean = document.getElementById("btnSoftwareClean");
btnSoftwareClean.onclick = () => {
    hideLabels();
    nombreEmpresa = "";
    mtoImplementacionBaseUsd = 0;
    cotizActualDolar = 0;
    cantEstablecimientos = 0;
    cantNormas = 0;
    cantUsuarios = 0;
    cantDocumentos = 0;
    const price = document.getElementById("price");
    price.style.display = 'flex';
    price.style.flexDirection = 'column';
    price.innerHTML = `<h4> Precio de la cotización</h4>
    <p>De acuerdo con los parámetros ingresados, el valor es: $ 0.00</p>`

}


function calculaImporte() {
    let valorParcial = 0;
    let valorEstab = 0;
    let valorNormas = 0;
    let valorUsuarios = 0;
    let valorDocs = 0;
    valorParcial = mtoImplementacionBaseUsd * cotizActualDolar;

    // Establecimientos

    cantEstablecimientos > cantBaseEstablecimientos == true ? valorEstab = ((cantEstablecimientos - cantBaseEstablecimientos)*0.1) * valorParcial : false;
 
    // Normas

    cantNormas > cantBaseNorma == true && (valorNormas=((cantNormas - cantBaseNorma)*0.05) * valorParcial);

     // Usuarios

    cantUsuarios > cantBaseUsuarios == true ? valorUsuarios = (valorParcial * (Math.trunc((cantUsuarios - cantBaseUsuarios) / 30) * 0.12)) : false;

    // Documentos 

    cantDocumentos > cantBaseDocumentos == true ? valorDocs=(valorParcial * (Math.trunc((cantDocumentos - cantBaseDocumentos) / 30) * 0.05)) : false

  
    valorFinal = valorParcial + valorEstab + valorNormas + valorUsuarios + valorDocs;

    return valorFinal;
}


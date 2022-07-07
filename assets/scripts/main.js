/*********  Inicio del cotizador ONLINE  ***********/

// Declaro e inicializo parámetros de cotización

/* general parameters*/
let nombreEmpresa = "";
let mtoImplementacionBaseUsd = 0;
let cotizActualDolar = 0;
let cantNormas = 0;
const cantBaseNorma = 1;
let cantDocumentos = 0;
const cantBaseDocumentos = 100;

/*software parameters */
let cantUsuarios = 0;
const cantBaseUsuarios = 60;
let cantEstablecimientos = 0;
const cantBaseEstablecimientos = 1;


/* Audit parameters */ 
let audRemota = "";

/* Consulting parameters */
let ReunionesSemanales = 0;
const cantBaseReuniones = 1;



/**************  BEGIN VALIDATION FUNCTIONS *******************/

function userValidation(usrName, usrPassword) {
    let listStoragedUsers = JSON.parse(localStorage.getItem("usuarios")); //parseo el JSON para buscar la coincidencia del usuario que se loguea

    for (let i = 0; i < localStorage.length; i++) {
        
         if (listStoragedUsers[i].usrName === usrName && listStoragedUsers[i].usrPassword === usrPassword) {
             return true;
         }
    }
}

function companyValidation(service) {
    const inputCompanyName = document.getElementById(service+"InputCompanyName");
    if (inputCompanyName.value.trim() === "") {
        const lblCompanyName = document.getElementById(service+"LblCompanyName");
        lblCompanyName.style.display = "block";
        lblCompanyName.innerText = "El nombre de la empresa no puede estar vacío.";
        return false;
    } else {
        return nombreEmpresa = inputCompanyName.value;
    }
}

function baseAmountValidation(service) {
    const inputBaseAmount = document.getElementById(service+"InputBaseAmount");
    if (inputBaseAmount.value.trim() === "" || isNaN(inputBaseAmount.value) || inputBaseAmount.value <= 0) {
        const lblBaseAmount = document.getElementById(service+"LblBaseAmount");
        lblBaseAmount.style.display = "block";
        lblBaseAmount.innerText = "El monto inicial debe ser mayor a 0 (cero)";
        return false;
    } else {
        return mtoImplementacionBaseUsd = inputBaseAmount.value;
    }
}

function usdPriceValidation(service) {
    const inputUsDolarPrice = document.getElementById(service+"InputUsDolarPrice");
    if (inputUsDolarPrice.value.trim() === "" || isNaN(inputUsDolarPrice.value) || inputUsDolarPrice.value <= 0) {
        const lblUsDolarPrice = document.getElementById(service+"LblUsDolarPrice");
        lblUsDolarPrice.style.display = "block";
        lblUsDolarPrice.innerText = "La cotización del dólar debe ser mayor a 0 (cero)";
        return false;
    } else {
        return cotizActualDolar = inputUsDolarPrice.value;
    }
}

function branchQuantityValidation(service) {
    const inputBranchsQuantity = document.getElementById(service+"InputBranchsQuantity");
    if (inputBranchsQuantity.value.trim() === "" || isNaN(inputBranchsQuantity.value) || inputBranchsQuantity.value <= 0) {
        const lblBranchsQuantity = document.getElementById(service+"LblBranchsQuantity");
        lblBranchsQuantity.style.display = "block";
        lblBranchsQuantity.innerText = "La cantidad  de establecimientos debe ser mayor a 0 (cero)";
        return false;
    } 
    else
    {
        return cantEstablecimientos = inputBranchsQuantity.value;
    }
}

function standardQuantityValidation(service) {
    const inputStandardsQuantity = document.getElementById(service+"InputStandardsQuantity");
    if (inputStandardsQuantity.value.trim() === "" || isNaN(inputStandardsQuantity.value)) {
        const lblStandardsQuantity = document.getElementById(service+"LblStandardsQuantity");
        lblStandardsQuantity.style.display = "block";
        lblStandardsQuantity.innerText = "La cantidad  de normas debe ser válida";
        return false;
    } else {
        return cantNormas = inputStandardsQuantity.value;
    }
}

function usersQuantityValidation(service) {
    const inputUsersQuantity = document.getElementById(service+"InputUsersQuantity");
    if (inputUsersQuantity.value.trim() === "" || isNaN(inputUsersQuantity.value || inputUsersQuantity.value <= 0)) {
        const lblUsersQuantity = document.getElementById(service+"LblUsersQuantity");
        lblUsersQuantity.style.display = "block";
        lblUsersQuantity.innerText = "La cantidad  de usuarios debe ser mayor a cero (0).";
        return false;
    } else {
        return cantUsuarios = inputUsersQuantity.value;
    }
}

function documentsQuantityValidation(service) {
    const inputDocumentsQuantity = document.getElementById(service+"InputDocumentsQuantity");
    if (inputDocumentsQuantity.value.trim() === "" || isNaN(inputDocumentsQuantity.value || inputDocumentsQuantity.value <= 0)) {
        const lblDocumentsQuantity = document.getElementById(service+"LblDocumentsQuantity");
        lblDocumentsQuantity.style.display = "block";
        lblDocumentsQuantity.innerText = "La cantidad  de documentos debe ser mayor a cero (0).";
        return false;
    } else {
        return cantDocumentos = inputDocumentsQuantity.value;
    }
}

function locationValidation(service) {
    const inputLocation = document.getElementById(service+"InputLocation");
    if (inputLocation.value.trim() !== "" || inputLocation.value.trim() === "Remota" || inputLocation.value.trim() === "In-situ" ) {
        return audRemota = inputLocation.value;
      
    } else {
        const lblLocation = document.getElementById(service+"LblLocation");
        lblLocation.style.display = "block";
        lblLocation.innerText = "La Locación debe ser 'Remota' o 'In-situ'. ";
        return false;
    }
}

function meetValidation(service) {
    const InputCantVisitas = document.getElementById(service+"InputCantVisitas");
    if (InputCantVisitas.value.trim() === "" || isNaN(InputCantVisitas.value || InputCantVisitas.value <= 0)) {
        const LblCantVisitas = document.getElementById(service+"LblCantVisitas");
        LblCantVisitas.style.display = "block";
        LblCantVisitas.innerText = "La cantidad  de visitas debe ser mayor a cero (0).";
        return false;
    } else {
        return ReunionesSemanales = InputCantVisitas.value;
    }
}

/**************  END VALIDATION FUNCTIONS *******************/

/*************** BEGIN FRONTEND FUNCTIONS **************** */

function showServices() {
    const serviceContainer = document.getElementById("services");
    serviceContainer.style.display = 'flex';
}

/*Oculta formularios segun parametro de servicios*/
function hideForm(service) {
    if (service==="software"){
        const formu = document.getElementById("frmSoftwareParameters");
        formu.style.display = 'none';
        const softwareReferences = document.getElementById("softwareReferences");
        softwareReferences.style.display = 'none';
    }
    if (service==="audit"){
        const formu = document.getElementById("frmAuditParameters");
        formu.style.display = 'none';
        const auditReferences = document.getElementById("auditReferences");
        auditReferences.style.display = 'none';
    }
    if (service==="consultant"){
        const formu = document.getElementById("frmConsultantParameters");
        formu.style.display = 'none';
        const auditReferences = document.getElementById("consultantReferences");
        auditReferences.style.display = 'none';
    }
    const price = document.getElementById("price");
    price.style.display = 'none';
}

/* Muesta formularios */
function showFormSoftware() {
    const formSoftware = document.getElementById("frmSoftwareParameters");
    formSoftware.style.display = 'flex';
    formSoftware.style.flexDirection = 'column';
}


function showFormAudit() {
    const formAudit = document.getElementById("frmAuditParameters");
    formAudit.style.display = 'flex';
    formAudit.style.flexDirection = 'column';
}

function showFormConsultant() {
    const formConsultant = document.getElementById("frmConsultantParameters");
    formConsultant.style.display = 'flex';
    formConsultant.style.flexDirection = 'column';
}


/* Oculta etiquetas segun parametro de servicio*/
function hideLabels(service) {
    if (service ==="software"){
        const labels = document.getElementsByClassName("frmSoftwareParameters__lblError");
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.display = 'none';
        }
    }
    if (service ==="audit"){
        const labels = document.getElementsByClassName("frmAuditParameters__lblError");
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.display = 'none';
        }
    }

    if (service ==="consultant"){
        const labels = document.getElementsByClassName("frmConsultantParameters__lblError");
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.display = 'none';
        }
    }
    
}

// async references load 

async function showReferences (service) {
    const  resp =await fetch('assets/data/references.json');
    const data = await resp.json();

    if (service== "software"){
        const contenedor = document.getElementById("softwareReferences");
        contenedor.style.display = 'flex';
        contenedor.style.flexDirection = 'row';
        contenedor.innerHTML= `<h4></h4>`;

        data.forEach((ref)=>{
            const div = document.createElement('div');
            if (ref.categoria == "software") {
                div.innerHTML =`<p style="font-weight: bold; color: black;">${ref.titulo}</p>
                                        <p>Cantidad base: ${ref.base} </p>
                                        <p>Detalle: ${ref.detalle} </p>`
                                        div.className='references_details'
                                        contenedor.append(div);   
             }
         }
         )
    }
    if (service== "audit"){
        const contenedor = document.getElementById("auditReferences");
        contenedor.style.display = 'flex';
        contenedor.style.flexDirection = 'row';
        contenedor.innerHTML= `<h4></h4>`;

        data.forEach((ref)=>{
            const div = document.createElement('div');
            if (ref.categoria == "auditoria") {
                div.innerHTML =`<p style="font-weight: bold; color: black;">${ref.titulo}</p>
                                        <p>Cantidad base: ${ref.base} </p>
                                        <p>Detalle: ${ref.detalle} </p>`
                                        div.className='references_details'
                                        contenedor.append(div);   
             }
         }
         )
    }

    if (service== "consultant"){
        const contenedor = document.getElementById("consultantReferences");
        contenedor.style.display = 'flex';
        contenedor.style.flexDirection = 'row';
        contenedor.innerHTML= `<h4></h4>`;

        data.forEach((ref)=>{
            const div = document.createElement('div');
            if (ref.categoria == "consultoria") {
                div.innerHTML =`<p style="font-weight: bold; color: black;">${ref.titulo}</p>
                                        <p>Cantidad base: ${ref.base} </p>
                                        <p>Detalle: ${ref.detalle} </p>`
                                        div.className='references_details'
                                        contenedor.append(div);   
             }
         }
         )
    }
    
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
    hideForm("audit");
    hideForm("consultant")
    showFormSoftware();
    showReferences("software");
}

btnServiceAudit.onclick = () => {
    hideForm("software");
    hideForm("consultant")
    showReferences("audit");
    showFormAudit();
}

btnServiceConsultant.onclick = () => {
    hideForm("software");
    hideForm("audit")
    showReferences("consultant");
    showFormConsultant();
}

// Botón calcular cotización del servicio de software
const btnSoftwareCalc = document.getElementById("btnSoftwareCalc");
btnSoftwareCalc.onclick = () => {
    if (companyValidation("soft") && baseAmountValidation("soft") && usdPriceValidation("soft") && branchQuantityValidation("soft") && standardQuantityValidation("soft") &&  usersQuantityValidation("soft") && documentsQuantityValidation("soft")) {
        // pasó las validaciones de todos los campos - > realizo el cálculo
    hideLabels("software");
    const price = document.getElementById("price");
    price.style.display = 'flex';
    price.style.flexDirection = 'column';
    price.innerHTML = `<h4> Precio de la cotización</h4>
    <p>De acuerdo con los parámetros ingresados, el valor es: $ ${calculaImporte("software")} </p>`
    }
}

// Limpia formulario de cotización del servicio de software
const btnSoftwareClean = document.getElementById("btnSoftwareClean");
btnSoftwareClean.onclick = () => {
    hideLabels("software");
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

// Botón calcular cotización del servicio de Auditoría
const btnAuditCalc = document.getElementById("btnAuditCalc");
btnAuditCalc.onclick = () => {
    if ( companyValidation("audit") &&  baseAmountValidation("audit") && usdPriceValidation("audit") && standardQuantityValidation("audit") && documentsQuantityValidation("audit") &&  locationValidation("audit") ){
            // pasó las validaciones de todos los campos - > realizo el cálculo
        hideLabels("audit");
        const price = document.getElementById("price");
        price.style.display = 'flex';
        price.style.flexDirection = 'column';
        price.innerHTML = `<h4> Precio de la cotización</h4>
        <p>De acuerdo con los parámetros ingresados, el valor es: $ ${calculaImporte("audit")} </p>`
        }
}
// Limpia formulario de cotización del servicio de software
const btnAuditClean = document.getElementById("btnAuditClean");
btnAuditClean.onclick = () => {
    hideLabels("audit");
    nombreEmpresa = "";
    mtoImplementacionBaseUsd = 0;
    cotizActualDolar = 0;
    cantNormas = 0;
    cantDocumentos = 0;
    audRemota ="";    
    const price = document.getElementById("price");
    price.style.display = 'flex';
    price.style.flexDirection = 'column';
    price.innerHTML = `<h4> Precio de la cotización</h4>
    <p>De acuerdo con los parámetros ingresados, el valor es: $ 0.00</p>`
}

// Botón calcular cotización del servicio de Consultoría
const btnConsultantCalc = document.getElementById("btnConsultantCalc");
btnConsultantCalc.onclick = () => {
    if ( companyValidation("consultant") &&  baseAmountValidation("consultant") && usdPriceValidation("consultant") && standardQuantityValidation("consultant") && documentsQuantityValidation("consultant") &&  meetValidation("consultant") ){
            // pasó las validaciones de todos los campos - > realizo el cálculo
        hideLabels("consultant");
        const price = document.getElementById("price");
        price.style.display = 'flex';
        price.style.flexDirection = 'column';
        price.innerHTML = `<h4> Precio de la cotización</h4>
        <p>De acuerdo con los parámetros ingresados, el valor es: $ ${calculaImporte("consultant")} </p>`
        }
}
// Limpia formulario de cotización del servicio de software
const btnConsultantClean = document.getElementById("btnConsultantClean");
btnConsultantClean.onclick = () => {
    hideLabels("consultant");
    nombreEmpresa = "";
    mtoImplementacionBaseUsd = 0;
    cotizActualDolar = 0;
    cantNormas = 0;
    cantDocumentos = 0;
    ReunionesSemanales=0;
    const price = document.getElementById("price");
    price.style.display = 'flex';
    price.style.flexDirection = 'column';
    price.innerHTML = `<h4> Precio de la cotización</h4>
    <p>De acuerdo con los parámetros ingresados, el valor es: $ 0.00</p>`
}

function calculaImporte(service) {
    let valorParcial = 0;
    let valorEstab = 0;
    let valorNormas = 0;
    let valorUsuarios = 0;
    let valorDocs = 0;
    let valorLocation = 0;
    let valorReuniones = 0;
    valorParcial = mtoImplementacionBaseUsd * cotizActualDolar;

    // Establecimientos

    if (service === "software") {
        cantEstablecimientos > cantBaseEstablecimientos == true ? valorEstab = ((cantEstablecimientos - cantBaseEstablecimientos)*0.1) * valorParcial : false;
    }
    
    // Normas
    if (service === "software") {
        cantNormas > cantBaseNorma == true && (valorNormas=((cantNormas - cantBaseNorma)*0.05) * valorParcial);
    }else if (service === "audit"){
                cantNormas > cantBaseNorma == true && (valorNormas=((cantNormas - cantBaseNorma)*0.15) * valorParcial);
    }

    // Usuarios

    if (service === "software") {
        cantUsuarios > cantBaseUsuarios == true ? valorUsuarios = (valorParcial * (Math.trunc((cantUsuarios - cantBaseUsuarios) / 30) * 0.12)) : false;
    }

    // Documentos 

    cantDocumentos > cantBaseDocumentos == true ? valorDocs=(valorParcial * (Math.trunc((cantDocumentos - cantBaseDocumentos) / 30) * 0.05)) : false

    // Locación de la auditoría

    if (service === "audit") {
        if (audRemota === "In-situ"){
            valorLocation = (valorParcial+valorDocs+valorNormas)*0.20;
        }
        
    }

    // Reuniones

    if (service === "consultant") {
         ReunionesSemanales > cantBaseReuniones == true ? valorReuniones = (valorParcial+valorDocs+valorNormas)*0.20:false;
        
    }

  
    valorFinal = valorParcial + valorEstab + valorNormas + valorUsuarios + valorDocs+valorLocation+valorReuniones;

    return valorFinal;
}


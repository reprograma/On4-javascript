//Fase 2
//Limpe os campos preenchidos quando o formulário for submetido
//Remova o alert e em seu lugar exiba o texto "Endereço cadastrado com sucesso" 
//no elemento endereco__subtitle


const inputNome = document.getElementById("enderecoInputNome");
const inputCEP = document.getElementById("enderecoInputCEP");
const inputRua = document.getElementById("enderecoInputRua");
const inputNumero = document.getElementById("enderecoInputNumero");
const inputComplemento = document.getElementById("enderecoInputComplemento");



const button = document.querySelector(".endereco__button");


button.addEventListener("click", function (event) {
    event.preventDefault();


    if (inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " ") {
        inputNome.focus();
        return false;
    } else if (inputCEP.value === undefined || inputCEP.value === null || inputCEP.value === "" || inputCEP.value === " ") {
        inputCEP.focus();
        return false;
    } else if (inputRua.value === undefined || inputRua.value === null || inputRua.value === "" || inputRua.value === " ") {
        inputRua.focus();
        return false;
    } else if (inputNumero.value === undefined || inputNumero.value === null || inputNumero.value === "" || inputNumero.value === " ") {
        inputNumero.focus();
        return false;
    }

    inputNome.value =""
    inputCEP.value =""
    inputRua.value =""
    inputNumero.value =""

    inputComplemento.value =""

    document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso!"
    return true;
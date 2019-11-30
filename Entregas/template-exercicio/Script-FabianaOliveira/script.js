const inputNome = document.getElementById("enderecoInputNome");
const inputCEP = document.getElementById("enderecoInputCEP");
const inputRua = document.getElementById("enderecoInputRua");
const inputNumero = document.getElementById("enderecoInputNumero");
const inputComplemento = document.getElementById("enderecoInputComplemento");



const button = document.querySelector(".endereco__button");


button.addEventListener("click", function(event){
    event.preventDefault();

    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
      inputNome.focus();
      return false;
    
    
      }else if(inputCEP.value === undefined || inputCEP.value === null || inputCEP.value === "" || inputCEP.value === " "){
        inputCEP.focus();
        return false;
    
    
      }else if(inputRua.value === undefined || inputRua.value === null || inputRua.value === "" || inputRua.value === " "){
        inputRua.focus();
        return false;
    
    
     }else if (inputNumero.value === undefined || inputNumero.value === null || inputNumero.value === "" || inputNumero.value === " "){
        inputNumero.focus();
        return false;
         
    
       }else if (inputComplemento.value === undefined || inputComplemento.value === null || inputComplemento.value === "" || inputComplemento.value === " "){
        inputComplemento.focus();
        return false;
    }
    
               alert("Cadastrado com sucesso!")
    return true;
})
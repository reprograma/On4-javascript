//Fase 2
//Limpe os campos preenchidos quando o formulário for submetido
//Remova o alert e em seu lugar exiba o texto "Endereço cadastrado com sucesso" no elemento endereco__subtitle

function cadastro (){
    if( document.getElementById("nome").value == "") {
        alert ("Por favor, preencha todos os campos");
        document.getElementById("nome").focus();
        return false;
    }
    if( document.getElementById("cep").value == "") {
        alert ("Por favor, preencha todos os campos");
        document.getElementById("cep").focus();
        return false;
    }
    if( document.getElementById("rua").value == "") {
        alert ("Por favor, preencha todos os campos");
        document.getElementById("rua").focus();
        return false;
    }
    if( document.getElementById("numero").value == "") {
        alert ("Por favor, preencha todos os campos");
        document.getElementById("numero").focus();
        return false;
    }
    if( document.getElementById("complemento").value == "") {
        alert ("Por favor, preencha todos os campos");
        document.getElementById("complemento").focus();
        return false;
    }
    
    nome.value = "";
    cep.value = "";
    rua.value = "";
    numero.value = "";
    complemento.value = "";

    document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso!"
}
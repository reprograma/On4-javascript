//Fase 1 Verificar se os campos Nome, CEP, Rua, Número do formulário de endereço foram preenchido. Obs.: o campo complemento não precisar ser preenchido.
//Se os campos necessários estiverem prenchidos exibir um alerta que diz "Endereço cadastrado com sucesso"

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
    } else {
       alert("Endereço cadastrado com sucesso!") 
    }
}
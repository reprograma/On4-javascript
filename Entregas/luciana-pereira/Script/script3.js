//Desafio
//A cada endereço submetido no form, exibir os dados cadastrados em uma div que deve ser inserida dentro da div lista

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
    

    document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso!"

    let listaDeCadastro = document.querySelector("div");
    let novoCadastro = document.createElement("p");
    novoCadastro.textContent = nome.value;

    let enderecoCadastrado = document.createElement("p");
    endereco.textContent = `${rua.value}, ${numero.value}, ${complemento.value}, 
    ${cep.value}`;
    listaDeCadastro.appendChild(novoCadastro);
    listaDeCadastro.appendChild(enderecoCadastrado);

    document.getElementById("lista").appendChild(listaDeCadastro);

    

    return true;

}

/* FASE 1

Verificar se os campos Nome, CEP, Rua, Número do formulário de endereço foram preenchidos. 
Obs.: o campo complemento não precisar ser preenchido.

Se os campos necessários estiverem prenchidos exibir um alerta que diz "Endereço cadastrado com sucesso"*/


const botao = document.querySelector(".endereco__button")
const InputNome = document.getElementById("enderecoInputNome")
const InputCEP = document.getElementById("enderecoInputCEP")
const InputRua = document.getElementById("enderecoInputRua")
const InputNumero = document.getElementById("enderecoInputNumero")
const InputComplemento = document.getElementById("enderecoInputComplemento")


console.log(botao, InputNome, InputCEP, InputRua, InputNumero, InputComplemento)




botao.addEventListener("click", function (event) { //function em evento
    event.preventDefault() //pausa o evento padrão de um elemento (como formulário, por exemplo)

    /* NOME */

    const valorNome = InputNome.value;
    const valorCEP = InputCEP.value;
    const valorRua = InputRua.value;
    const valorNumero = InputNumero.value;


    //se valorNome for vazio, mandamos uma mensagem de erro
//caso contrário a gente manda uma mensagem de sucesso

    if (valorNome,valorCEP,valorRua,valorNumero == "") {
        alert("Preencha todos os campos solicitados.")
    } else {
        alert(`Endereço cadastrado com sucesso!`)

    }
})





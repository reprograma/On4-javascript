 /* FASE 2

Limpe os campos preenchidos quando o formulário for submetido

Remova o alert e em seu lugar exiba o texto "Endereço cadastrado com sucesso" no elemento `endereco__subtitle`
*/

const botao = document.querySelector(".endereco__button")
const InputNome = document.getElementById("enderecoInputNome")
const InputCEP = document.getElementById("enderecoInputCEP")
const InputRua = document.getElementById("enderecoInputRua")
const InputNumero = document.getElementById("enderecoInputNumero")
const InputComplemento = document.getElementById("enderecoInputComplemento")
const mensagem=document.querySelector(".endereco__subtitle")

console.log(botao, InputNome, InputCEP, InputRua, InputNumero, InputComplemento, mensagem)




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
    mensagem.textContent=`Endereço cadastrado com sucesso!`

}


    InputNome.value=""
    InputCEP.value=""
    InputRua.value=""
    InputNumero.value=""
})





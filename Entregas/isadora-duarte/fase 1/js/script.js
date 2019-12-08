const InputNome = document.getElementById("enderecoInputNome")
const InputCEP = document.getElementById("enderecoInputCEP")
const InputRua = document.getElementById("enderecoInputRua")
const InputNumero = document.getElementById("enderecoInputNumero")
const InputComplemento = document.getElementById("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")

console.log(InputNome, InputCEP, InputRua, InputNumero, InputComplemento, botao)

botao.addEventListener("click", function (event) { 
    event.preventDefault()

    const valorNome = InputNome.value;
    const valorCEP = InputCEP.value;
    const valorRua = InputRua.value;
    const valorNumero = InputNumero.value;

    if (valorNome,valorCEP,valorRua,valorNumero == "") {
        alert("Preencha todos os campos, por favor.")
    } else {
        alert(`Cadastro realizado com sucesso!`)

    }
})





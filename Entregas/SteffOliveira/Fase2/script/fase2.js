//1 passo chamar os elementos
const nome = document.getElementById("enderecoInputNome")
const cep = document.getElementById("enderecoInputCEP")
const rua = document.getElementById("enderecoInputRua")
const numero = document.getElementById("enderecoInputNumero")
const complemento = document.getElementById("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")

console.log(nome, cep, rua, numero, complemento, botao)

//2 passo entender se o botão ta funcionando
//formularios tem evento padrão que da reload na tela
botao.addEventListener("click", function (event) {
    event.preventDefault()

    if (nome.value == "") {
        nome.focus()
        return false
    } else if (cep.value == "") {
        cep.focus()
        return false
    } else if (rua.value == "") {
        rua.focus()
        return false
    } else if (numero.value == "") {
        numero.focus()
        return false
    }

    nome.value = ""
    cep.value = ""
    rua.value = ""
    numero.value = ""
    complemento.value = ""

    document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso!"
    return true;
})
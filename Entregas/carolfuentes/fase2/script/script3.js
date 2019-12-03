const nome = document.getElementById("enderecoInputNome")
const cep = document.getElementById("enderecoInputCEP")
const rua = document.getElementById("enderecoInputRua")
const numero = document.getElementById("enderecoInputNumero")
const complemento = document.getElementById("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")
const mensagem = document.querySelector(".endereco__subtitle")

console.log(nome, cep, rua, numero, complemento, botao)

botao.addEventListener("click", acao)

function acao(event) {
    event.preventDefault()

    const nomeValor = nome.value
    const cepValor = cep.value
    const ruaValor = rua.value
    const numeroValor = numero.value
    const complementoValor = complemento.value

    if (nomeValor == "") {
        alert("Nome não pode ser vazio!")
    } else if (cepValor == "") {    
        alert("CEP não pode ser um campo vazio!")
    } else if (ruaValor == "") {
        alert("Rua não pode ser um campo vazio!")
    } else if (numeroValor == "") {
        alert("Número não pode ser um campo vazio!")
    } else {
        mensagem.textContent = "Endereço cadastrado com sucesso!"
        nome.value = ""
        cep.value = ""
        rua.value = ""
        numero.value = ""
        complemento.value = ""
    }
    console.log(nomeValor, cepValor, ruaValor, numeroValor, complementoValor)
}


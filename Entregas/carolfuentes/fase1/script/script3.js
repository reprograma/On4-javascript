const nome = document.getElementById("enderecoInputNome")
const cep = document.getElementById("enderecoInputCEP")
const rua = document.getElementById("enderecoInputRua")
const numero = document.getElementById("enderecoInputNumero")
const botao = document.querySelector(".endereco__button")
const mensagem = document.querySelector(".endereco__subtitle")

console.log(nome, cep, rua, numero,botao)

botao.addEventListener("click", acao)

function acao(event) {
    event.preventDefault()

    const nomeValor = nome.value
    const cepValor = cep.value
    const ruaValor = rua.value
    const numeroValor = numero.value

    if (nomeValor == "") {
        alert("Nome não pode ser vazio!")
    } else if (cepValor == "") {    
        alert("CEP não pode ser um campo vazio!")
    } else if (ruaValor == "") {
        alert("Rua não pode ser um campo vazio!")
    } else if (numeroValor == "") {
        alert("Número não pode ser um campo vazio!")
    } else {
        alert("Endereço cadastrado com sucesso!")
    
    }
    console.log(nomeValor, cepValor, ruaValor, numeroValor)
}


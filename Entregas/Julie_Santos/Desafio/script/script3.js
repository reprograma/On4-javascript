const nome = document.getElementById("enderecoInputNome")
const cep = document.getElementById("enderecoInputCEP")
const rua = document.getElementById("enderecoInputRua")
const numero = document.getElementById("enderecoInputNumero")
const complemento = document.getElementById("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")
const mensagem = document.getElementById("mensagem")
const cadastradoSucesso = document.querySelector(".endereco__subtitle")
const casa = document.querySelector(".endereco_casa")

botao.addEventListener("click", acaoQueVaiSerExecutada)
function acaoQueVaiSerExecutada(event) {
    event.preventDefault()

    const nomeValor = nome.value
    const cepValor = cep.value
    const ruaValor = rua.value
    const numeroValor = numero.value
    const complementoValor = complemento.value

    if (nomeValor == "") {
        mensagem.textContent = "O nome não pode ser vazio"
        nome.focus()
    } else if (cepValor == "") {
        mensagem.textContent = "O cep não pode ser vazio"
        cep.focus()
    } else if (ruaValor == "") {
        mensagem.textContent = "A rua não pode ser vazia"
        rua.focus()
    } else if (numeroValor == "") {
        mensagem.textContent = "O número não pode ser vazio"
        numero.focus()
    } else {
        cadastradoSucesso.textContent = "Endereço cadastrado com sucesso"
        nome.value = ""
        cep.value = ""
        rua.value = ""
        numero.value = ""
        complemento.value = ""
    }

    const linha = document.createElement("p")
    linha.textContent = `${Number(rua.value)}, número ${numero.value} - ${cep.value}`
    casa.appendChild(linha)

}
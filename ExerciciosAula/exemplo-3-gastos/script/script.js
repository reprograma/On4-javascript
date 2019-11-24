const nomeInput = document.getElementById("transacaoInputName")
const valorInput = document.getElementById("transacaoInputMoney")
const dataInput = document.getElementById("transacaoInputDate")
const botao = document.querySelector(".transacao__button")
const extrato = document.querySelector(".extrato")

botao.addEventListener("click", criarTransacao)

function criarTransacao(event){
    event.preventDefault()

    //sempre pegar os valores do input dentro do evento
    console.log(nomeInput.value, valorInput.value, dataInput.value) 

    const linha = document.createElement("div") // vai criar um elemento em memório

    linha.textContent = `${nomeInput.value}, R$${valorInput.value}, ${dataInput.value}`

    extrato.appendChild(linha) // vai pegar o nosso elemento da memória e vai inserir no html dentro do elemento extrato
}
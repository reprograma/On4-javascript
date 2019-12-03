const nome = document.getElementById("enderecoInputNome")
const cep = document.getElementById("enderecoInputCEP")
const rua = document.getElementById("enderecoInputRua")
const numero = document.getElementById("enderecoInputNumero")
const botao = document.querySelector(".button")



botao.addEventListener("click", function (event) {
    event.preventDefault();

    const nomeValor = nome.value
    const cepValor = cep.value
    const ruaValor = rua.value
    const numeroValor = numero.value

    if (nomeValor, cepValor, ruaValor, numeroValor == nome.value, cep.value, rua.value, numero.value)
        alert("Endereço cadastrado com sucesso")
})
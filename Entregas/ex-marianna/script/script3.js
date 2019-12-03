
//A cada endereço submetido no form, exibir os dados cadastrados em uma div que deve ser inserida dentro da div `lista`


const nomeInput = document.getElementById("enderecoInputNome")
const CEPInput = document.getElementById("enderecoInputCEP")
const ruaInput = document.getElementById("enderecoInputRua")
const numeroInput = document.getElementById("enderecoInputNumero")
const complementoInput = document.getElementById("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")
const lista = document.querySelector(".lista_enderecos")

//console.log(nome, CEP, rua, numero,lista)

botao.addEventListener("click", acaoQueVaiSerExecutada)

function acaoQueVaiSerExecutada() {
	event.preventDefault() //previnir o evento de reload do form

	const nomeValor = nomeInput.value
	const CEPValor = CEPInput.value
	const ruaValor = ruaInput.value
	const numeroValor = numeroInput.value
	const complementoValor = complementoInput.value

	if (nomeValor == "") {
		//se o nome não estiver preenchido - da mensagem de erro
		alert("O nome não pode ser vazio!")
		nomeInput.focus()

	} else if (CEPValor == "") {
		//se a CEP não estiver preenchido - da mensagem de erro
		alert("O CEP não pode ser vazio!")
		CEPInput.focus()

	} else if (ruaValor == "") {
		//se a rua não estiver preenchida - da mensagem de erro
		alert("Ocupe a rua, ela não pode ficar vazia")
		ruaInput.focus()

	} else if (numeroValor == "") {
		//se o número não estiver preenchida - da mensagem de erro
		alert("O número não pode ser vazio!")
		numeroInput.focus()

	} else if (complementoValor == "") {
		//se só o complemento não estiver preenchido - da mensagem de sucesso
		document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso!"

	} else {
		//se só o complemento não estiver preenchido - da mensagem de sucesso
		document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso!"

		const linha = document.createElement("div")

		const nome = document.createElement("p")
		nome.textContent = nomeInput.value

		const endereco = document.createElement("p")
		endereco.textContent = `${ruaInput.value}, ${numeroInput.value} ${complementoInput.value} - ${CEPInput.value}`

		linha.appendChild(nome)
		linha.appendChild(endereco)

		document.getElementById("lista").appendChild(linha)

		//limpar formulario
		nomeInput.value = ""
		CEPInput.value = ""
		ruaInput.value = ""
		numeroInput.value = ""
		complementoInput.value = ""
	}
	console.log(nomeValor, CEPValor, ruaValor, numeroValor, complementoValor)
}

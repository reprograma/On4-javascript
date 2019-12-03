//**Fase 1**
//Verificar se os campos Nome, CEP, Rua, Número do formulário de endereço foram preenchido. 
//Obs.: o campo complemento não precisar ser preenchido.
//Se os campos necessários estiverem prenchidos exibir um alerta que diz "Endereço cadastrado com sucesso"

const nome = document.getElementById("enderecoInputNome")
const CEP = document.getElementById("enderecoInputCEP")
const rua = document.getElementById("enderecoInputRua")
const numero = document.getElementById("enderecoInputNumero")
const complemento = document.getElementById("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")

//console.log(nome, CEP, rua, numero)

botao.addEventListener("click", acaoQueVaiSerExecutada)

function acaoQueVaiSerExecutada() {
	event.preventDefault() //previnir o evento de reload do form

	const nomeValor = nome.value
	const CEPValor = CEP.value
	const ruaValor = rua.value
	const numeroValor = numero.value
	const complementoValor = complemento.value

	if (nomeValor == "") {
		//se o nome não estiver preenchido - da mensagem de erro
		alert("O nome não pode ser vazio!")
		nome.focus()

	} else if (CEPValor == "") {
		//se a CEP não estiver preenchido - da mensagem de erro
		alert("O CEP não pode ser vazio!")
		CEP.focus()

	} else if (ruaValor == "") {
		//se a rua não estiver preenchida - da mensagem de erro
		alert("Ocupe a rua, ela não pode ficar vazia")
		rua.focus()

	} else if (numeroValor == "") {
		//se o número não estiver preenchida - da mensagem de erro
		alert("O número não pode ser vazio!")
		numero.focus()

	} else if (complementoValor == "") {
		//se só o complemento não estiver preenchido - da mensagem de sucesso
		alert("Muito bem, nota 100! Endereço cadastrado com sucesso")

	} else {
		//se só o complemento não estiver preenchido - da mensagem de sucesso
		alert("Muito bem, nota 100! Endereço cadastrado com sucesso")

		//limpar formulario
		nome.value = ""
		CEP.value = ""
		rua.value = ""
		numero.value = ""
		complemento.value = ""
	}
	console.log(nomeValor, CEPValor, ruaValor, numeroValor, complementoValor)
}
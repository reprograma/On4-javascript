const campoTexto = document.getElementById("feedbackInputMessage")
const botao = document.querySelector(".feedback__button")
const caixaFeedback = document.querySelector(".testimonials")

botao.addEventListener("click", criarFeedback)

function criarFeedback(){
    const texto = campoTexto.value
    
    const itemFeedback = document.createElement("div")
    // cria um elemento em memório, ele fica limbo até a gente colocar na tela
    itemFeedback.textContent = texto
    // <div> blah blah </div>
    caixaFeedback.appendChild(itemFeedback)
}
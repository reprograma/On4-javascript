let botao = document.querySelector(".news__button")
let inputEmail = document.querySelector(".news__input")

botao.addEventListener("click", function(){
    //ação que o evento vai realizar quando for acionado

    let valorDoEmail = inputEmail.value // a partir do clique do botão estamos pegando o que está escrito no input de email

    // alert(valorDoEmail)
    
    // alert("Olá, seu email: "+ valorDoEmail +" foi cadastrado com sucesso") 
    // concatenação de strings


    alert(`Olá, seu email: ${valorDoEmail} foi cadastrado com sucesso`)
    // template string - usa crase ao inves de aspas
})

console.log(botao, inputEmail)
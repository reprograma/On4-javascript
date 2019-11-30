const botaoMenu = document.querySelector(".sidebar-menu__button")
const menu = document.querySelector(".sidebar-menu")

botaoMenu.addEventListener("click", function(){
    console.log("olá")
    if(menu.style.left == "-430px"){
        menu.style.left = "0px"
    }else{
        menu.style.left = "-430px";
    }
})
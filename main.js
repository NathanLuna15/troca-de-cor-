"use strct"

const botaoTrocarCor = document.getElementById("botao-trocar-cor")

function trocarCor(){
    const corUsuario = document.getElementById("cor-usuario").value
    document.documentElement.style.setProperty("--color-bg", corUsuario)
}
botaoTrocarCor.addEventListener("click", trocarCor)






const black =document.getElementById("modo-black")
const white =document.getElementById("modo-white")

function modoescuro(){
    const black = document.getElementById("modo-black").value
    
}
function modoclaro(){

}

black.addEventListener("click", modoescuro) 
white.addEventListener("click", trocarCor)



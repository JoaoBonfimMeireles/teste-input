let number = (Math.round(Math.random()*10))
console.log(number)
let mensagem = "Você é um gênio!";
let mensagem2 = "Você errou. Tente novamente.";
let alterar = document.getElementById("text")


function jogo() {
    let input = Number(document.getElementById("input").value)
    if(input == number) {
        return alterar.innerHTML = mensagem
    }else {
        return alterar.innerHTML = mensagem2
    }
}

let button = document.getElementById("button")
button.addEventListener("click", jogo)
let number = Math.round(Math.random() * 10);
console.log(number);
let mensagem = "Você é um gênio!";
let mensagem2 = "Você errou. Tente novamente.";
let alterar = document.getElementById("text");
let tentativa = [];

function jogo() {
    let input = Number(document.getElementById("input").value);
    tentativa.push(input);
    if (input === number) {
        alterar.innerHTML = `${mensagem} o número é ${number} e o numero de tentativas é ${tentativa.length}`;
    } else {
        alterar.innerHTML = mensagem2;
        
    }
    console.log(tentativa);
}

let inputField = document.getElementById("input")

inputField.addEventListener("click", function() {
    inputField.value = ""})

let button = document.getElementById("button");
button.addEventListener("click", jogo);
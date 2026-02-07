let coinFlip = Math.round(Math.random());
let choice = prompt("Choose heads or tails: ").toLowerCase();

if (coinFlip == 0){
    if (choice === 'heads') {
        alert("The flip was heads and you choose heads...you win!");
    } else {
        alert("The flip was heads but you choose tails...you lose!");
    }
} else {
    if (choice === 'heads') {
        alert("The flip was heads and you choose heads...you lose!");
    } else {
        alert("The flip was heads but you choose tails...you win!");
    }
}
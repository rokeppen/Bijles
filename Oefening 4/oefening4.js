let guesses = 0, value;

function guessNumber() {
    let guess = document.getElementById("guess").value;
    if (!guess) {
        alert("Je hebt nog geen getal ingegeven!");
        return;
    }
    guess = parseInt(guess);
    guesses++;
    if (guess === value) {
        document.getElementById("result").innerHTML = "Proficiat! Goed geraden in " + guesses + " keer raden";
        document.getElementById("guess").disabled = true;
        document.getElementById("guess-button").disabled = true;
        document.getElementById("init-flag").innerHTML = "Spel afgelopen! Start een nieuw spel!";
        guesses = 0;
    } else {
        document.getElementById("result").innerHTML = guess < value ? "Hoger!" : "Lager!";
    }
    document.getElementById("guess").value = null;
}

function start() {
    value = Math.floor(Math.random()*10) + 1;
    document.getElementById("result").innerHTML = "";
    document.getElementById("guess").disabled = false;
    document.getElementById("guess-button").disabled = false;
    document.getElementById("init-flag").innerHTML = "Nieuw spel gestart";
}
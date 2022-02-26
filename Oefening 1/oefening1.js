let person = prompt("Geef je voornaam");
let day = new Date().toLocaleDateString("nl-BE", { weekday: 'long' });
document.getElementById("header").innerHTML = "Welkom " + person + " het is vandaag: " + day;

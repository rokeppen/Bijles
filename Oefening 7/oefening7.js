function start() {
    let number = prompt("Geef een geheel getal:");
    if (!number.match(/^\d+$/)) {
        alert("Geef getal ingegeven, probeer opnieuw a.u.b.");
        return;
    }
    alert("Het getal is " + (parseInt(number) % 2 === 0 ? "even" : "oneven"));
}
function calculate() {
    const first = document.getElementById("number-1").value;
    const second = document.getElementById("number-2").value;
    const third = document.getElementById("number-3").value;
    if (!first || !second || !third) {
        alert("Vul drie getallen in a.u.b.");
        return;
    }
    let values = [parseInt(first), parseInt(second), parseInt(third)];
    values = values.sort();
    document.getElementById("smallest").value = values[0];
    document.getElementById("biggest").value = values[2];
    document.getElementById("small-to-big").value = values.join(" ");
    document.getElementById("big-to-small").value = values.reverse().join(" ");
}

function clearFields() {
    document.getElementById("number-1").value = null;
    document.getElementById("number-2").value = null;
    document.getElementById("number-3").value = null;
    document.getElementById("smallest").value = null;
    document.getElementById("biggest").value = null;
    document.getElementById("small-to-big").value = null;
    document.getElementById("big-to-small").value = null;
}
function create() {
    const amount = document.getElementById("amount").value;
    const rule = document.getElementById("rule").value;
    if (!amount || !rule) {
        alert("Vul beide vakken aantal en strafwerk in.");
        return;
    }
    let rules = [];
    for (let i = 1; i <= parseInt(amount); i++) {
        rules.push(i + " " + rule);
    }
    document.getElementById("rules").value = rules.join("\n");
}

function clearFields() {
    document.getElementById("amount").value = null;
    document.getElementById("rule").value = null;
    document.getElementById("rules").value = null;
}
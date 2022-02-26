function generate() {
    const number = document.getElementById("table").value;
    if (!number) {
        alert("Vul het tekstvak in a.u.b.!");
        return;
    }
    let result = [];
    if (document.getElementById("type").value === "*") {
        for (let i = 1; i <= 10; i++) {
            result.push(i + " x " + number + " = " + (i * number));
        }
    } else {
        for (let i = 1; i <= 10; i++) {
            result.push((i * number) + " : " + number + " = " + i);
        }
    }
    document.getElementById("result").innerHTML = result.join("<br>");
}
function calculate() {
    let first = document.getElementById("input-1").value;
    let sign = document.getElementById("sign").value;
    let second = document.getElementById("input-2").value;
    if (!first || !second) {
        alert("Vul beide vakken in a.u.b.!");
        return;
    }
    document.getElementById("result").value = eval(first + sign + second);
}
function count() {
    const input = document.getElementById("input").value;
    if (!input) {
        alert("Geef een woord of zin in a.u.b.")
        return;
    }
    document.getElementById("vowels").value = (input.match(/[aeiou]/gi) || []).length;
    document.getElementById("vowels-list").value = (input.match(/[aeiou]/gi) || []).join(" ");
    document.getElementById("consonants-list").value = (input.match(/[b-df-hj-np-tv-z]/gi) || []).join(" ");

}
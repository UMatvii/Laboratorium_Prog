const users = {
    "0": {
        "imie": "Matvii",
        "nazwisko": "Ulytskyi",
        "pin": "1234",
        "pieniadzy": 100
    },
    "1": {
        "imie": "Maria",
        "nazwisko": "Korol",
        "pin": "0000",
        "pieniadzy": 50
    }
}


function log() {
    let login = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (users[login] && users[login].pin == pin) {
        window.location.href = "Bank.html";
        const user = users[login];
        const obj = JSON.parse(user);
        document.getElementById("Info").innerHTML = `Dzień dobry ${obj.imie} ${obj.nazwisko}, \n Pan/Pani posiada: ${obj.pieniadzy} zł.`;
    }
    else {
        alert("Niepoprawny login lub password");
    }
};
const users = '{"0": {"imie":"Matvii", "nazwisko": "Ulytskyi", "pin": "1234", "pieniadzy": 100}, "1": { "imie": "Maria", "nazwisko": "Korol", "pin": "0000", "pieniadzy": 50 } }';

function log() {
    user_obj = JSON.parse(users);
    let login = document.getElementById("username").value;
    let password = document.getElementById("password").value;
   
    document.getElementById("test").innerHTML = user_obj[login].pin;
    if (user_obj[login].pin == password) {
        console.log(`user_obj[login] = ${user_obj[login]}`);
        log_no = login;
        console.log(`log_no = ${log_no}`);
        window.location.href = "Bank.html?" + login;
    }
    else {
        alert("Niepoprawny login lub password");
    }
};
function user_info() {
    var log_no = location.search.substring(1);
    console.log(`log_no = ${log_no}`);
    user_obj = JSON.parse(users);
    document.getElementById("Info").innerHTML = `Dzień dobry ${user_obj[log_no].imie} ${user_obj[log_no].nazwisko}, \n Pan/Pani posiada: ${user_obj[log_no].pieniadzy} zł.`
    
} 
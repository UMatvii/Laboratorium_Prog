for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year!!");
let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
console.log("Happy New Year!!");
function NWD(x, y) {
    while (x != y) {
        if (x > y) {
            x = x - y;
            NWD(x, y);
        }
        else {
            y = y - x;
            NWD(x, y);
        }
    }
}
document
var x = document.getElementById("liczba1");
var y = document.getElementById("liczba2");
var res = NWD(x, y);
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

function liczby() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var wynik = NWD(num1, num2);
    document.getElementById("wynik").innerHTML = `NWD = (${num1},${num2}) = ${wynik}`
}

function NWD(a, b) {
    while (a != b) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
        return a;
}

let s = 0;
let numbers1 = '';
let list_nums = [];
let list_opers = [];
let F = [];


function display(a) {
    document.getElementById("wynik_kalk").value += a;
    if (a != '+' && a != '-' && a != '*' && a != '/' && a != '**' && a != '=') {
        numbers1 = numbers1 + a;
    }
    else if (a === '+' || a === '-' || a === '*' || a === '/' || a === '**') {
        list_nums.push(numbers1);
        numbers1 = '';
        list_opers.push(a);
    }
}


function calculate() {
    list_nums.push(numbers1);
    numbers1 = '';
    F = Cleaning(list_nums);
    let obl = [];
    for (let x in list_opers) {
        if (list_opers[x] === '**') {
            let k = (F[x]);
            let r = (F[x + 1]);
             s = k ** r;
             F[x] = s;
           // F[x + 1] = '';
           // F = Cleaning(F);
        } 
    } 
    console.log(F);
    console.log(list_opers);
    console.log(parseFloat(s))
}


function clearScreen() {
    list_nums.length = 0;
    list_opers.length = 0;
    document.getElementById("wynik_kalk").value = "";
}


function Cleaning(nums) {
    let D = [];
    for (let i in nums) {
        if (nums[i] != '') {
            D.push(nums[i]);
        }
    }
    F = D;
    return F;
}
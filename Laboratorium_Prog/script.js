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
let x = 0;
let y = 0;
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
    for (y in list_opers) {
        if (list_opers[y] === '**') {
            x = y;
            let x1 = ++x;
            --x;
            let k = F[x];
            let r = (F[x1]);
            s = parseFloat(k) ** parseFloat(r);
            F[x] = s;
            F[x1] = '';
            F = Cleaning(F);
            list_opers[y] = '';
            list_opers = Cleaning_opers(list_opers);
        } 
    }
    for (y in list_opers) {
        if (list_opers[y] === '*') {
            x = y;
            let x1 = ++x;
            --x;
            let k = F[x];
            let r = (F[x1]);
            s = parseFloat(k) * parseFloat(r);
            F[x] = s;
            F[x1] = '';
            F = Cleaning(F);
            list_opers[y] = '';
            list_opers = Cleaning_opers(list_opers);
        }
        if (list_opers.length > y && list_opers[y] === '/') {
            x = y;
            let x1 = ++x;
            --x;
            let k = F[x];
            let r = (F[x1]);
            s = parseFloat(k) / parseFloat(r);
            F[x] = s;
            F[x1] = '';
            F = Cleaning(F);
            list_opers[y] = ''
            list_opers = Cleaning_opers(list_opers);
        }
    }  
    for (y in list_opers) {
        if (list_opers[y] === '-') {
            x = y;
            let x1 = ++x;
            --x;
            let k = F[x];
            let r = (F[x1]);
            s = parseFloat(k) - parseFloat(r);
            F[x] = s;
            F[x1] = '';
            F = Cleaning(F);
            list_opers[y] = '';
            list_opers = Cleaning_opers(list_opers);
        }
        if (list_opers[y] === '+') {
            x = y;
            let x1 = ++x;
            --x;
            let k = F[x];
            let r = (F[x1]);
            s = parseFloat(k) + parseFloat(r);
            F[x] = s;
            F[x1] = '';
            F = Cleaning(F);
            list_opers[y] = '';
            list_opers = Cleaning_opers(list_opers);
        }
    }
    display(` = ${s}`);
}


function clearScreen() {
    list_nums.length = 0;
    list_opers.length = 0;
    numbers1 = 0;
    F.length = 0;
    x = '';
    y = '';
    s = '';
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
function Cleaning_opers(oper) {
    let Op = [];
    for (let j in oper) {
        if (oper[j] != '') {
            Op.push(oper[j]);
        }
    }
    list_opers = Op;
    return list_opers;
}

/* На вход приходит отсортированный масив чисел. Нужно найти любую пару чисел которые будут равны загаданой сумме или вывести что результатов нет
let D = [-5, -1, 2, 4, 7, 8, 10, 15];
let a = 0;
let b = 0;
let i1 = 0;
let i2 = D.length-1;
let x_wyn = 0;
while (i1 <= i2) {
    a = D[i1];
    b = D[i2];
    if (parseFloat(a) + parseFloat(b) > 16) {
        i2--;
    } else if (parseFloat(a) + parseFloat(b) < 16) {
        i1++
    } else {
        x_wyn = parseFloat(a) + parseFloat(b);
        console.log(`Wynik: a = ${a}, + b = ${b} = ${x_wyn}`);
        break;
    }
}
if (i2 > i1) {console.log("Ничего не найдено");} 
*/
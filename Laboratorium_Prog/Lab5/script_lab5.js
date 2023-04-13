for (let i = 0; i <= 10; i++) {
    const p = document.createElement("p");
    if (i === 0) {
        p.textContent = `0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |`; 
    } else {
        p.textContent = `${i} | ${i * 1} | ${i * 2} | ${i * 3} | ${i * 4} | ${i * 5} | ${i * 6} | ${i * 7} | ${i * 8} | ${i * 9} | ${i * 10} |`;
    }
    document.getElementById("tabliczka_mnozenia").appendChild(p);
}



const names = ['Matvii', 'Bogdan', 'John', 'Oleksandr', 'Victoria', 'Pawel'];
const surnames = ['Ulytskyi', 'Mamskii', 'Jozef', 'Brydko', 'Luchko', 'Chan'];


function DaneOsob() {
    const name = names[Math.floor(Math.random() * names.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    const age = Math.floor(Math.random() * 63) + 18;
    const phone = Math.floor(Math.random() * 3000000) + 5000000;
    return { name, surname, age, phone };
}

const ludzi = [];
for (let i = 0; i < 20; i++) {
    ludzi.push(DaneOsob());
}

let count = parseInt(prompt("Podaj ilość rekordów: "));
console.log(ludzi.slice(0, count));

ludzi.map(item => {
    let div = document.createElement('div');
    div.innerHTML += `<p>${item.name}</p>`;
    div.innerHTML += `<p>${item.surname}</p>`;
    div.innerHTML += `<p>${item.age}</p>`;
    div.innerHTML += `<p>${item.phone}</p>`;
    document.getElementById("Wyswetlanie").appendChild(div);
});

const people = [];
const output = document.getElementById("Wyswetlanie");
people.forEach(persona => {
    const informacje = document.createElement('div');
    const nameBox = document.createElement('p');
    const surnameBox = document.createElement('p');
    const ageBox = document.createElement('p');
    const phoneBox = document.createElement('p');
    const nameText = document.createTextNode("Name" + persona.name);
    const surnameText = document.createTextNode("Surname" + persona.surname);
    const ageText = document.createTextNode("Age" + persona.age);
    const phoneText = document.createTextNode("Phone" + persona.phone);
    nameBox.appendChild(nameText);
    surnameBox.appendChild(surnameText);
    ageBox.appendChild(ageText);
    phoneBox.appendChild(phoneText);
    informacje.appendChild(nameBox);
    informacje.appendChild(surnameBox);
    informacje.appendChild(ageBox);
    informacje.appendChild(phoneBox);
    output.appendChild(informacje);
});
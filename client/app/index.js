let campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

let tbody = document.querySelector('table	tbody');

document.querySelector('.form').addEventListener('submit', (event) => {
    alert('oi');
});

let tr = document.createElement('tr');

campos.forEach((campo) => {
    let td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
})


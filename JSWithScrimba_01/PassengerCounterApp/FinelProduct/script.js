let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");

let count = 0;
let total = 0;

function increment() {
    count +=  1;
    countEl.textContent = count;
};

function save() {
    saveEl.textContent += ` ${count}  -  `;
    total += count;
    totalEl.textContent = total;
    count = 0;
    countEl.textContent = count
}

function restart() {
    count = 0;
    countEl.textContent = count;
}
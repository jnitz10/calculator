

// const del = document.getElementById('zero');

// del.addEventListener('mousedown', function() {console.log("sdf")});

function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return Number(x) - Number(y);
}

function multiply(x, y) {
    return Number(x) * Number(y);
}

function divide(x, y) {
    var solution = Number(x) / Number(y);
    return solution.toFixed(3);
}

function operate(x, op, y) {
    if (op == 'add') {
        return add(x, y);
    } else if (op == 'subtract') {
        return subtract(x, y);
    } else if (op == 'multiply') {
        return multiply(x, y);
    } else {
        return divide(x, y);
    }

}
const topLine = document.getElementById('topLine');
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('click', function() {
    console.log(key.innerHTML);
    topLine.innerHTML += key.innerHTML;
    }));
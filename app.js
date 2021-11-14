

// const del = document.getElementById('zero');

// del.addEventListener('mousedown', function() {console.log("sdf")});

const keyVals = [
    {
        keyName: 'one',
        keyVal: '1'
    },
    {
        keyName: 'two',
        keyVal: '2'
    },
    {
        keyName: 'three',
        keyVal: '3'
    },
    {
        keyName: 'four',
        keyVal: '4'
    },
    {
        keyName: 'five',
        keyVal: '5'
    },
    {
        keyName: 'six',
        keyVal: '6'
    },
    {
        keyName: 'seven',
        keyVal: '7'
    },
    {
        keyName: 'eight',
        keyVal: '8'
    },
    {
        keyName: 'nine',
        keyVal: '9'
    },
    {
        keyName: 'zero',
        keyVal: '0'
    },
    {
        keyName: 'decimal',
        keyVal: '.'
    },
    {
        keyName: 'add',
        keyVal: '+'
    },
    {
        keyName: 'subtract',
        keyVal: '-'
    },
    {
        keyName: 'multiply',
        keyVal: 'x'
    },
    {
        keyName: 'divide',
        keyVal: '÷'
    }
]


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
    console.log(key.id);
    topLine.innerHTML += key.id;
    }));

const clear = document.getElementById('clear');
clear.addEventListener('click', function() {
    topLine.innerHTML = '';
});

const del = document.getElementById('delete');
del.addEventListener('click', function() {
    topLine.innerHTML = topLine.innerHTML.slice(0,-1);
});
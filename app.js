


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

function getKeyVal(name) { // function to match calc key ID with needed value
    for (const x of keyVals) {
        if (name === x.keyName) {
            return x.keyVal;
        }
    }
}


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

class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    length() {
        return this.top;
    }
    peek() {
        return this.data[this.top - 1];
    }
    isEmpty() {
        return this.top === 0;
    }
    pop() {
        if(this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop(); 
        }
    }
    print() {
        var top = this.top - 1;
        while(top >= 0) {
            console.log(this.data[top]);
            top--;
        }
    }
}

let topLineStack = new Stack;
const topLine = document.getElementById('topLine');
const numbers = Array.from(document.querySelectorAll('.numbers'));
numbers.forEach(num => num.addEventListener('click', function() {
    topLineStack.push(getKeyVal(num.id));
    console.log(getKeyVal(num.id));
    // TODO: display numbers on top line
}));


const clear = document.getElementById('clear');
clear.addEventListener('click', function() {
    topLine.innerHTML = '';
});

const del = document.getElementById('delete');
del.addEventListener('click', function() {
    topLineStack.pop();
});
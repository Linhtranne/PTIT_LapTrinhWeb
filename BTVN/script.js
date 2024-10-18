function insert(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function calculate() {
    let expression = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(expression);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function backspace() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.substring(0, result.length - 1);
}

function toggleSign() {
    let current = document.getElementById("result").value;
    if (current.charAt(0) === '-') {
        document.getElementById("result").value = current.substring(1);
    } else {
        document.getElementById("result").value = '-' + current;
    }
}

function sqrt() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(current);
}
function square() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(current, 2);
}

function reciprocal() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = 1 / current;
}
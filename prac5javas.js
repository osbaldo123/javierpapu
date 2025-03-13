function Sumar() {
    var num1 = parseFloat(document.getElementById('nums1').value);
    var num2 = parseFloat(document.getElementById('nums2').value);
    var resultado = num1 + num2;
    document.getElementById('resul1').innerHTML = "resultado: " + resultado;
}

function Restar() {
    var num1 = parseFloat(document.getElementById('numr1').value);
    var num2 = parseFloat(document.getElementById('numr2').value);
    var resultado = num1 - num2;
    document.getElementById('resul2').innerHTML = "resultado: " + resultado;
}

function Multiplicar() {
    var num1 = parseFloat(document.getElementById('numm1').value);
    var num2 = parseFloat(document.getElementById('numm2').value);
    var resultado = num1 * num2;
    document.getElementById('resul3').innerHTML = "resultado: " + resultado;
}

function Dividir() {
    var num1 = parseFloat(document.getElementById('numd1').value);
    var num2 = parseFloat(document.getElementById('numd2').value);
    if (num2 != 0) {
        var resultado = num1 / num2;
        document.getElementById('resul4').innerHTML = "resultado: " + resultado;
    } else {
        alert("No se puede dividir por cero.");
    }
}

function calcularFactorial() {
    var num = parseInt(document.getElementById('numFactorial').value);
    if (num < 0) {
        document.getElementById('resulFactorial').innerHTML = "El número debe ser positivo.";
        return;
    }
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('resulFactorial').innerHTML = "resultado: " + factorial;
}

function verificarParImpar() {
    var num = parseInt(document.getElementById('numParImpar').value);
    if (isNaN(num)) {
        document.getElementById('resulParImpar').innerHTML = "Ingrese un número válido.";
        return;
    }
    var resultado = (num % 2 === 0) ? "Par" : "Impar";
    document.getElementById('resulParImpar').innerHTML = "resultado: " + resultado;
}

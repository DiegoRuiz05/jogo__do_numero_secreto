
function calcularImc(){
let inputPeso = parseFloat(document.getElementById('peso').value)
let inputAltura = parseFloat(document.getElementById('altura').value)
let res = document.getElementById('res')
let calculo = inputPeso/(inputAltura*inputAltura)

res.innerHTML = calculo
}

 
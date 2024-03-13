function calcular() {
    let valorReal = parseInt(document.getElementById('real').value)
    let dolar = 4.80
    let res = document.getElementById('res')
    res.innerHTML =  valorReal/dolar
}
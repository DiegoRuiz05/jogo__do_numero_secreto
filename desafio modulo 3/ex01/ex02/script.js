numeroCalculado = fatorial(3)

function fatorial(x) {
    let c = 1
    do {
        c = c*x
        x--
    } while (x == 1)
    return c
}
console.log(numeroCalculado)
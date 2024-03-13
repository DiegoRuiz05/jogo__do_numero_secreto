let titulo = document.getElementById('titulo')
console.log('Olá, mundo!')








function receberNome(nome) {
    console.log(`Olá, ${nome}`)
}
receberNome('Diego')





function dobrarNumero(n1) {
    
    return n1*2;

}
let resultadoDobrado = dobrarNumero(7)
console.log(resultadoDobrado)






function media(x,y,z){
    return (x+y+z)/3

}
let resultadoMedia = media(4,9,2)
console.log(`A media é ${resultadoMedia}`)






function numeroMaior(x,y){
    if(x>y){
        return x;
    } else{
        return y;
    }
}
let resultadoMaior = numeroMaior(10,9)
console.log(resultadoMaior)




function multiplaPorEleMesmo (x) {
    return x*x;
}
let resultadomultiplaPorEleMesmo = multiplaPorEleMesmo(7)
alert(`O resultado dobrado é: ${resultadomultiplaPorEleMesmo}`)



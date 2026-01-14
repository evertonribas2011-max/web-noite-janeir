function soma(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("resposta")
    // nao pode deixar console log nos codigos
    //console.log(typeof numero1, typeof numero2)

    resp.textContent = numero1 + numero2
}

function subtrair(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("resposta1")

    resp.textContent = numero3 - numero4

}
function multiplicar(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var resp = document.getElementById("resposta2")

    resp. innerHTML = numero5 * numero6

}
function dividir(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("resposta3")

    resp.innerHTML = numero7 / numero8

    //condicional se o primeiro numero digitado igual a zero 
    //textContent = "Não Existe divisão por 0"
}
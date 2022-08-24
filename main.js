

function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector ('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = '<p>Sua velocidade atual é de <stron>${vel}</stron> km</p>'
    res.innerHTML += `<p>Dirija sempre com segurança!</p>`
}
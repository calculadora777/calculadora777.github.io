var p_res = document.getElementById('p_res')

function adiciona_res(item) {
    p_res.innerHTML += item
}
function limpa() {
    p_res.innerHTML = ''
    return
}
function calcular() {

    if (p_res.textContent[0] != '√' && p_res.textContent[0] != 'x') {
        let resultado = eval(p_res.textContent)
        p_res.innerHTML = resultado
    } else if (p_res.textContent[0] == '√') {
        let resultado = eval(p_res.textContent.slice(1))
        resultado = resultado ** 0.5
        p_res.innerHTML = resultado
    } else if (p_res.innerHTML[0] == 'x') {
        let resultado = eval(p_res.textContent.slice(1))
        resultado = resultado * resultado
        p_res.innerHTML = resultado
    }
    return
}
function adiciona_raiz() {
    if (p_res.textContent == '') {
        p_res.innerHTML += '√'
    }
    return
}
function adiciona_pot() {
    if (p_res.textContent == '') {
        p_res.innerHTML += 'x'
    }
    return
}
function adiciona_ponto(item) {
    if (p_res.textContent[p_res.textContent.length - 1] != '.' && p_res.textContent.length != 0) {
        p_res.innerHTML += item
    }
}
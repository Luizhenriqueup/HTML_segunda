function getDados(){
    let dados = document.querySelector('#email');
    document.getElementById.innerHTML('mail').innerHTML = dados.value
}

function getDados2(){
    let dados = document.querySelectorAll('input'); 
    let divDados = document.getElementById('dados');
    for (let i=0; i< dados.length; i++){
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = dados[i].value;
        divDados.appendChild(paragrafo);
    }
}
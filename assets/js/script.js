let votosPedro = 0;
let votosLaura = 0;

function votarPedro() {
    votosPedro++;
    document.getElementById('votosPedro').textContent = votosPedro;
}

function votarLaura() {
    votosLaura++;
    document.getElementById('votosLaura').textContent = votosLaura;
}

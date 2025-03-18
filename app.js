let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert('Por favor, insira um nome válido');
        return;
    }

    amigos.push(nome);
    input.value = "";
    printarAmigos();
}

function printarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const i = document.createElement('i');
        i.textContent = amigo;
        lista.appendChild(i);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('Por favor, insira um nome válido');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `O amigo secreto sorteado é: <span>${amigoSorteado}</span>`;

    amigos = [];
    printarAmigos();
}

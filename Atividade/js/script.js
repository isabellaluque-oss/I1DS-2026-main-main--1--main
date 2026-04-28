const cadastrar = (event) => {

//Parar a propagaçao padrao do evento
    event.preventDefault();

    //capturar os valores dos campos dos elementos por id
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
}
//capturando o elemento da lista por id
let lista = document.getElementById("lista");
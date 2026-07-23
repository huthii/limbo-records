const botao = document.getElementById("explorar");

botao.addEventListener("click", () => {
    document.querySelector(".albuns").scrollIntoView({
        behavior: "smooth"
    });
});

const formulario = document.querySelector(".formulario-contato");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Mensagem enviada! Obrigado por entrar em contato com a Limbo Records.");
});

const campocep = document.getElementById("cep");
const endereco = document.getElementById("endereco");

campocep.addEventListener("blur", () => {

    const cep = campocep.value.replace("-", "");

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {

            if (dados.erro) {
                endereco.textContent = "CEP não encontrado.";
                return;
            }
            endereco.textContent =
                `${dados.localidade}/${dados.uf}`;
        });
});
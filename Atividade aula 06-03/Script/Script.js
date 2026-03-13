const nome = document.querySelector('input[placeholder="Nome"]');
const idade = document.querySelector('input[placeholder="Idade"]');
const cidade = document.querySelector('input[placeholder="Cidade"]');
const curso = document.querySelector('input[placeholder="Curso"]');

const materia = document.querySelector('input[placeholder="Digite a matéria"]');
const horas = document.querySelector('input[placeholder="Horas"]');
const texto = document.querySelector("textarea");

const contador = document.createElement("p");
contador.classList.add("contador");

texto.parentNode.appendChild(contador);

texto.addEventListener("input", function () {
    contador.textContent = "Caracteres: " + texto.value.length;
});


const resultado = document.createElement("div");
resultado.className = "container text-center mt-5 resultado";

document.body.appendChild(resultado);


const botao = document.createElement("button");
botao.textContent = "Gerar resumo";
botao.className = "btn btn-primary mt-3 d-block mx-auto";

document.body.appendChild(botao);


botao.addEventListener("click", function () {

    if (
        nome.value === "" ||
        idade.value === "" ||
        cidade.value === "" ||
        curso.value === "" ||
        materia.value === "" ||
        horas.value === ""
    ) {
        resultado.innerHTML = "<p class='erro'>Preencha todos os campos!</p>";
        return;
    }

    if (idade.value <= 0 || horas.value <= 0) {
        resultado.innerHTML = "<p class='erro'>Valores numéricos inválidos.</p>";
        return;
    }

    const radio = document.querySelector('input[name="estudo"]:checked');
    let modoEstudo = radio ? radio.nextSibling.textContent.trim() : "não informado";

    resultado.innerHTML = `
        <h3 class="mb-3">Resumo</h3>
        <p><strong>Nome:</strong> ${nome.value}</p>
        <p><strong>Cidade:</strong> ${cidade.value}</p>
        <p><strong>Curso:</strong> ${curso.value}</p>
        <p><strong>Matéria favorita:</strong> ${materia.value}</p>
        <p><strong>Horas de estudo:</strong> ${horas.value}</p>
        <p><strong>Modo de estudo:</strong> ${modoEstudo}</p>
        <p><strong>Comentário:</strong> ${texto.value}</p>
    `;
});

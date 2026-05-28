const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // PEGAR VALORES
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // VALIDAR EMAIL
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        mensagem.innerHTML = "Email inválido!";
        mensagem.style.color = "red";
        return;
    }

    // VALIDAR SENHA
    // mínimo 8 caracteres + letra + número + caractere especial
    const regexSenha =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    if (!regexSenha.test(senha)) {
        mensagem.innerHTML =
            "Senha fraca! Use letra, número e caractere especial.";
        mensagem.style.color = "red";
        return;
    }

    // CRIAR JSON
    const dados = {
        nome: nome,
        email: email,
        senha: senha
    };

    console.log("JSON enviado:");
    console.log(JSON.stringify(dados));

    // MENSAGEM DE SUCESSO
    mensagem.innerHTML = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    // LIMPAR FORMULÁRIO
    form.reset();
});
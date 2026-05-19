document.addEventListener("DOMContentLoaded", () => {
    console.log("Sistema de Cadastro Inicializado...");
});

const dadosIniciais = {
    usuarios: [
        {
            id: generateUUID(),
            login: "Admilson@gmail.com",
            senha: "123",
            nome: "Administrador do Sistema",
            email: "Admilson@gmail.com",
            grupo: "administradores",
            grupoDePermissoes: "administradores",
            status: "Ativo",
            criadoEm: new Date().toISOString()
        },
        {
            id: generateUUID(),
            login: "user@gmail.com",
            senha: "123",
            nome: "Usuario Comum",
            email: "user@gmail.com",
            grupo: "operadores",
            grupoDePermissoes: "operadores",
            status: "Ativo",
            criadoEm: new Date().toISOString()
        }
    ]
};

const formCadastro = document.getElementById("registroForm");

formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;
    const grupo = document.querySelector('input[name="grupo-permissoes"]:checked');

    if (!grupo) {
        alert("Selecione um grupo de permissões.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    const usuariosJSON = localStorage.getItem("db_usuarios");
    let db_usuarios;

    if (usuariosJSON) {
        db_usuarios = JSON.parse(usuariosJSON);

        if (!db_usuarios.usuarios) {
            db_usuarios.usuarios = [];
        }
    } else {
        db_usuarios = dadosIniciais;
    }

    const usuarioExiste = db_usuarios.usuarios.find(
        usuario => String(usuario.email).toLowerCase() === email.toLowerCase()
    );

    if (usuarioExiste) {
        alert("Este e-mail já está cadastrado.");
        return;
    }

    const novoUsuario = {
        id: generateUUID(),
        login: email,
        senha: senha,
        nome: nome,
        email: email,
        grupo: grupo.value,
        grupoDePermissoes: grupo.value,
        status: "Ativo",
        criadoEm: new Date().toISOString()
    };

    db_usuarios.usuarios.push(novoUsuario);
    localStorage.setItem("db_usuarios", JSON.stringify(db_usuarios));

    alert("Cadastro salvo com sucesso!");
    window.location.href = "usuarios.html";
});

function generateUUID() {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;

        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }

        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

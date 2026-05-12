document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Cadastro Inicializado...");

    const btnDark = document.getElementById('btnDarkMode');

//btnDark.addEventListener('click', () => {
    //document.body.classList.toggle('dark-theme');
    // Salva a preferência no navegador
    //const isDark = document.body.classList.contains('dark-theme');
    //localStorage.setItem('theme', isDark ? 'dark' : 'light');
//});

});

const dadosIniciais = {
    usuarios: [
        { "id": generateUUID (), "login": "Admilson@gmail.com", "senha": "123", "nome": "Administrador do Sistema", "email": "Admilson@gmail.com"},

        { "id": generateUUID (), "login": "user@gmail.com", "senha": "123", "nome": "Usuario Comum", "email": "user@gmail.com"},
    ]
};

const formCadastro = document.getElementById('registroForm');

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;

        const email = document.getElementById('email').value;

        const senha = document.getElementById('senha').value;

        const confirmarSenha = document.getElementById('confirmar-senha').value;

        const setor = document.getElementById('setor').value;

        const grupo = document.querySelector(
            'input[name="grupo-permissoes"]:checked'
        );

        // VALIDAÇÃO
        if (senha !== confirmarSenha) {

            alert("As senhas não coincidem.");

            return;
        }
    
   let usuariosJSON = localStorage.getItem("db_usuarios");

let db_usuarios;

if (usuariosJSON) {

    db_usuarios = JSON.parse(usuariosJSON);

    // Garante que usuarios exista
    if (!db_usuarios.usuarios) {

        db_usuarios.usuarios = [];
    }

} else {

    db_usuarios = {
        usuarios: []
    };
}

    // VERIFICA EMAIL REPETIDO
        const usuarioExiste = db_usuarios.usuarios.find(
            usuario => usuario.email === email
        );
       if (usuarioExiste) {

            alert("Este e-mail já está cadastrado.");

            return;
        }
     // Novo usuário
    const novoUsuario = {
            id: generateUUID(),
            login: email,
            senha: senha,
            nome: email,
            email: email,
            setor: setor,
            grupoDePermissoes: grupo.value
        };

    // Adiciona no array
    db_usuarios.usuarios.push(novoUsuario);

    // Salva novamente
        localStorage.setItem("db_usuarios", JSON.stringify(db_usuarios));

        alert("Cadastro salvo com sucesso! Agora você pode logar.");
    // Opcional: Redirecionar para a página de login
      window.location.href = "usuarios.html"; 
    });


function irParaEtapa2() {
    document.getElementById('etapa1').style.display = 'none';
    document.getElementById('etapa2').style.display = 'block';
}

function generateUUID() {

    var d = new Date().getTime();

    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {

        var r = Math.random() * 16;

        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }

        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
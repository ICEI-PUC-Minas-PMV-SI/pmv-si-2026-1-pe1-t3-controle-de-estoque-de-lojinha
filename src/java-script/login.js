const LOGIN_URL= "login.html";

var db_usuarios = {};

var usuarioCorrente = {};

/* Função para criar usuários randomicos, o professor disse que aprederemos melhor mais tarde */

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const dadosIniciais = {
    usuarios: [
        { "id": generateUUID (), "login": "Admilson@gmail.com", "senha": "123", "nome": "Administrador do Sistema", "email": "Admilson@gmail.com", "grupo": "administradores", "grupoDePermissoes": "administradores"},

        { "id": generateUUID (), "login": "user@gmail.com", "senha": "123", "nome": "Usuario Comum", "email": "user@gmail.com", "grupo": "operadores", "grupoDePermissoes": "operadores"},
    ]
};

function initLoginApp() {
     usuarioCorrenteJSON = 
     sessionStorage.getItem("usuarioCorrente");
        if (usuarioCorrenteJSON) {
            usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
        }

        if (usuarioCorrente && usuarioCorrente.login && !usuarioCorrente.grupo) {
            var usuariosJSON = localStorage.getItem("db_usuarios");
            if (usuariosJSON) {
                var db = JSON.parse(usuariosJSON);
                var usuarioEncontrado = db.usuarios.find(function(u) {
                    return u.login === usuarioCorrente.login;
                });
                if (usuarioEncontrado) {
                    usuarioCorrente.grupo = usuarioEncontrado.grupo || usuarioEncontrado.grupoDePermissoes || "visitantes";
                    sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
                }
            }
        }

// A partir dos dados salvos no LocalStorage, ele obtem uma string //

var usuariosJSON = localStorage.getItem("db_usuarios");

if (!usuariosJSON) { alert("Dados não encontrados no LocalStorage. \n ----> Fazendo carga inicial...");
    db_usuarios = dadosIniciais;
        localStorage.setItem("db_usuarios", JSON.stringify(dadosIniciais));
} else { db_usuarios = JSON.parse(usuariosJSON);
       }

db_usuarios.usuarios.forEach(function(u) {
    if (!u.grupo && !u.grupoDePermissoes) {
        if (u.login && u.login.toLowerCase().indexOf("adm") !== -1) {
            u.grupo = "administradores";
            u.grupoDePermissoes = "administradores";
        } else {
            u.grupo = "operadores";
            u.grupoDePermissoes = "operadores";
        }
    }
});

const existeAdmin = db_usuarios.usuarios.find(
            usuario =>
                usuario.login === "Admilson@gmail.com"
        );
if (!existeAdmin) {

            db_usuarios.usuarios.push({
                id: generateUUID(),
                login: "Admilson@gmail.com",
                senha: "123",
                nome: "Administrador do Sistema",
                email: "Admilson@gmail.com",
                grupo: "administradores",
                grupoDePermissoes: "administradores"
            });
        }
const existeUser = db_usuarios.usuarios.find(
            usuario =>
                usuario.login === "user@gmail.com"
        );
if (!existeUser) {

            db_usuarios.usuarios.push({
                id: generateUUID(),
                login: "user@gmail.com",
                senha: "123",
                nome: "Usuario Comum",
                email: "user@gmail.com",
                grupo: "operadores",
                grupoDePermissoes: "operadores"
            });
        }
localStorage.setItem(
            "db_usuarios",
            JSON.stringify(db_usuarios)
        );
       
};

// Primeiro verifica se o login esta composto por login e senha e depois olha em todos os itens do banco de dados se existe o usuário informado no formulário de login //
function loginUser (login, senha) {
    for (var i = 0; i < db_usuarios.usuarios.length; i++) { 
        var usuario = db_usuarios.usuarios[i];
    if (login == usuario.login && senha == usuario.senha) {
         usuarioCorrente.id = usuario.id;
         usuarioCorrente.login = usuario.login;
         usuarioCorrente.email = usuario.email;
         usuarioCorrente.nome = usuario.nome;
         usuarioCorrente.grupo = usuario.grupo || usuario.grupoDePermissoes || "visitantes";
    
        sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
        return true;
    }
}
    return false;
}

// ^ No conjunto acima ao achar o login ele carrega o usuário corrente(antes disso ele converte para string) e salva no sessionStorage aberto anteriormente se for encontrado, true e se não o retorno e false //

// Função para criar o botão de Logout, apaga o usuário corrente do sessionStorage //
function logoutUser() {
    usuarioCorrente = {};
    sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
       window.location = LOGIN_URL;

}

// Função para criar um novo usuário contendo as informações necessárias //
function addUser (login, senha, nome, email, grupo) {
    let newId = generateUUID ();
    let usuario = { "id": newId, "login": login, "senha": senha,
    "nome": nome, "email": email, "grupo": grupo || "operadores", "grupoDePermissoes": grupo || "operadores" };
       db_usuarios.usuarios.push (usuario);
       localStorage.setItem("db_usuarios", JSON.stringify (db_usuarios));
    }


function setUserPass () {

}
function verificaLogin() {

    // Busca usuário logado
    let usuarioCorrenteJSON =
        sessionStorage.getItem("usuarioCorrente");

    // Se não existir
    if (!usuarioCorrenteJSON) {

        window.location.href = "login.html";

        return;
    }

    let usuario = JSON.parse(usuarioCorrenteJSON);

    // Se objeto vazio
    if (!usuario.login) {

        window.location.href = "login.html";
    }
}

initLoginApp();
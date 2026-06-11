var PERMISSAO_POR_PAGINA = {
    "dashboard.html": "visualizarDashboard",
    "produtos.html": "gerenciarProdutos",
    "cadastrop.html": "gerenciarProdutos",
    "saidas.html": "registrarEntradaSaida",
    "relatorios.html": "acessarRelatorios",
    "usuarios.html": "gerenciarUsuarios",
    "cadastro.html": "gerenciarUsuarios",
    "calculadora.html": "acessarCalculadora",
    "calculadora.html": "acessarCalculadora",
    "configuracoes.html": "alterarConfiguracoes"
};

var MAPA_NOMES_GRUPOS = {
    administradores: "Adm",
    gerentes: "Gerentes",
    operadores: "Operadores",
    visitantes: "Visitantes"
};

function obtemGrupoUsuario() {
    if (typeof usuarioCorrente !== "undefined" && usuarioCorrente && usuarioCorrente.grupo) {
        return usuarioCorrente.grupo;
    }

    var sessao = sessionStorage.getItem("usuarioCorrente");
    if (!sessao) return null;

    try {
        var usuario = JSON.parse(sessao);
        if (usuario.grupo) return usuario.grupo;

        var db = JSON.parse(localStorage.getItem("db_usuarios") || "{}");
        var encontrado = (db.usuarios || []).find(function(u) {
            return u.login === usuario.login;
        });
        var grupo = (encontrado && (encontrado.grupo || encontrado.grupoDePermissoes)) || "visitantes";

        usuario.grupo = grupo;
        sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuario));
        if (typeof usuarioCorrente !== "undefined") {
            usuarioCorrente.grupo = grupo;
        }
        return grupo;
    } catch (_) {
        return "visitantes";
    }
}

function carregaConfigPermissoes() {
    try {
        var dados = localStorage.getItem("db_configuracoes");
        return dados ? JSON.parse(dados) : null;
    } catch (_) {
        return null;
    }
}

function verificaPermissao(chavePermissao) {
    var grupo = obtemGrupoUsuario();
    if (!grupo) return false;

    var config = carregaConfigPermissoes();
    if (!config || !config.permissoes) return true;

    var permissoesGrupo = config.permissoes[grupo];
    return permissoesGrupo ? Boolean(permissoesGrupo[chavePermissao]) : false;
}

function paginaRequerPermissao() {
    var pagina = window.location.pathname.split("/").pop() || "dashboard.html";
    return PERMISSAO_POR_PAGINA[pagina] || null;
}

function redirecionaSeSemAcesso() {
    var sessao = sessionStorage.getItem("usuarioCorrente");
    if (!sessao) {
        window.location.href = "login.html";
        return;
    }

    try {
        var usuario = JSON.parse(sessao);
        if (!usuario.login) {
            window.location.href = "login.html";
            return;
        }
    } catch (_) {
        window.location.href = "login.html";
        return;
    }

    var chave = paginaRequerPermissao();
    if (!chave) return;

    if (!verificaPermissao(chave)) {
        window.location.href = "dashboard.html";
    }
}

function atualizaInterface() {
    var grupo = obtemGrupoUsuario();

    var labelGrupo = document.querySelector(".app-sidebar-user-group");
    if (labelGrupo && grupo) {
        labelGrupo.textContent = MAPA_NOMES_GRUPOS[grupo] || grupo;
    }

    var config = carregaConfigPermissoes();
    if (!config || !config.permissoes) return;

    var permissoesGrupo = config.permissoes[grupo];
    if (!permissoesGrupo) return;

    document.querySelectorAll(".app-sidebar-nav-item").forEach(function(link) {
        var href = link.getAttribute("href");
        if (!href) return;

        var pagina = href.split("/").pop();
        var chave = PERMISSAO_POR_PAGINA[pagina];

        if (chave && !permissoesGrupo[chave]) {
            link.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    redirecionaSeSemAcesso();
    atualizaInterface();
});

const SETTINGS_STORAGE_KEY = "db_configuracoes";

const DEFAULT_SETTINGS = {
    grupoAtivo: "administradores",
    permissoes: {
        administradores: {
            visualizarDashboard: true,
            gerenciarProdutos: true,
            registrarEntradaSaida: true,
            acessarRelatorios: true,
            gerenciarUsuarios: true,
            acessarCalculadora: true,
            alterarConfiguracoes: true,
            gerarBackup: true
        },
        gerentes: {
            visualizarDashboard: true,
            gerenciarProdutos: true,
            registrarEntradaSaida: true,
            acessarRelatorios: true,
            gerenciarUsuarios: true,
            acessarCalculadora: true,
            alterarConfiguracoes: false,
            gerarBackup: true
        },
        operadores: {
            visualizarDashboard: true,
            gerenciarProdutos: true,
            registrarEntradaSaida: true,
            acessarRelatorios: false,
            gerenciarUsuarios: false,
            acessarCalculadora: true,
            alterarConfiguracoes: false,
            gerarBackup: false
        },
        visitantes: {
            visualizarDashboard: true,
            gerenciarProdutos: false,
            registrarEntradaSaida: false,
            acessarRelatorios: false,
            gerenciarUsuarios: false,
            acessarCalculadora: false,
            alterarConfiguracoes: false,
            gerarBackup: false
        }
    },
    preferencias: {
        confirmacaoSaida: false,
        modoEscuro: false,
        notificacoesEmail: true,
        relatoriosAutomaticos: true
    },
    atualizadoEm: null
};

let configuracoes = carregaConfiguracoes();

document.addEventListener("DOMContentLoaded", () => {
    aplicaTema();

    if (!localStorage.getItem(SETTINGS_STORAGE_KEY)) {
        salvaConfiguracoes(false);
    }

    renderizaConfiguracoes();
    registraEventos();
});

function carregaConfiguracoes() {
    const dadosSalvos = localStorage.getItem(SETTINGS_STORAGE_KEY);

    if (!dadosSalvos) {
        return clonaObjeto(DEFAULT_SETTINGS);
    }

    try {
        return mesclaConfiguracoes(JSON.parse(dadosSalvos));
    } catch (error) {
        console.warn("Configurações inválidas no localStorage. Recriando dados padrão.", error);
        localStorage.removeItem(SETTINGS_STORAGE_KEY);
        return clonaObjeto(DEFAULT_SETTINGS);
    }
}

function mesclaConfiguracoes(configuracoesSalvas) {
    const configuracoesCompletas = clonaObjeto(DEFAULT_SETTINGS);

    configuracoesCompletas.grupoAtivo =
        configuracoesSalvas.grupoAtivo || configuracoesCompletas.grupoAtivo;

    configuracoesCompletas.atualizadoEm =
        configuracoesSalvas.atualizadoEm || configuracoesCompletas.atualizadoEm;

    Object.keys(configuracoesCompletas.permissoes).forEach(grupo => {
        configuracoesCompletas.permissoes[grupo] = {
            ...configuracoesCompletas.permissoes[grupo],
            ...(configuracoesSalvas.permissoes?.[grupo] || {})
        };
    });

    configuracoesCompletas.preferencias = {
        ...configuracoesCompletas.preferencias,
        ...(configuracoesSalvas.preferencias || {})
    };

    if (!configuracoesCompletas.permissoes[configuracoesCompletas.grupoAtivo]) {
        configuracoesCompletas.grupoAtivo = DEFAULT_SETTINGS.grupoAtivo;
    }

    return configuracoesCompletas;
}

function salvaConfiguracoes(exibirFeedback = true) {
    configuracoes.atualizadoEm = new Date().toISOString();

    localStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify(configuracoes)
    );

    if (exibirFeedback) {
        exibeFeedback("Configurações salvas");
    }
}

function registraEventos() {
    document.querySelectorAll("[data-permission-group]").forEach(botao => {
        botao.addEventListener("click", () => {
            configuracoes.grupoAtivo = botao.dataset.permissionGroup;
            salvaConfiguracoes(false);
            renderizaConfiguracoes();
        });
    });

    document.querySelectorAll("[data-permission-key]").forEach(botao => {
        botao.addEventListener("click", () => {
            const grupo = configuracoes.grupoAtivo;
            const permissao = botao.dataset.permissionKey;

            configuracoes.permissoes[grupo][permissao] =
                !configuracoes.permissoes[grupo][permissao];

            salvaConfiguracoes();
            renderizaPermissoes();
        });
    });

    document.querySelectorAll("[data-preference-key]").forEach(botao => {
        botao.addEventListener("click", () => {
            const preferencia = botao.dataset.preferenceKey;

            configuracoes.preferencias[preferencia] =
                !configuracoes.preferencias[preferencia];

            salvaConfiguracoes();
            aplicaTema();
            renderizaPreferencias();
        });
    });
}

function renderizaConfiguracoes() {
    renderizaGrupoAtivo();
    renderizaPermissoes();
    renderizaPreferencias();
}

function renderizaGrupoAtivo() {
    document.querySelectorAll("[data-permission-group]").forEach(botao => {
        const estaAtivo = botao.dataset.permissionGroup === configuracoes.grupoAtivo;

        botao.classList.toggle("permissions-tab-active", estaAtivo);
        botao.setAttribute("aria-pressed", String(estaAtivo));
    });
}

function renderizaPermissoes() {
    const permissoesDoGrupo =
        configuracoes.permissoes[configuracoes.grupoAtivo] || {};

    document.querySelectorAll("[data-permission-key]").forEach(botao => {
        const estaAtivo = Boolean(permissoesDoGrupo[botao.dataset.permissionKey]);

        atualizaSwitch(botao, estaAtivo);
    });
}

function renderizaPreferencias() {
    document.querySelectorAll("[data-preference-key]").forEach(botao => {
        const estaAtivo = Boolean(configuracoes.preferencias[botao.dataset.preferenceKey]);

        atualizaSwitch(botao, estaAtivo);
    });
}

function atualizaSwitch(botao, estaAtivo) {
    botao.classList.toggle("settings-switch-on", estaAtivo);
    botao.setAttribute("aria-pressed", String(estaAtivo));
}

function aplicaTema() {
    document.body.classList.toggle(
        "settings-theme-dark",
        Boolean(configuracoes.preferencias.modoEscuro)
    );
}

function exibeFeedback(mensagem) {
    const feedback = document.querySelector(".settings-feedback");

    if (!feedback) {
        return;
    }

    feedback.textContent = mensagem;
    feedback.classList.add("settings-feedback-visible");

    window.clearTimeout(exibeFeedback.timeoutId);

    exibeFeedback.timeoutId = window.setTimeout(() => {
        feedback.classList.remove("settings-feedback-visible");
    }, 1600);
}

function clonaObjeto(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

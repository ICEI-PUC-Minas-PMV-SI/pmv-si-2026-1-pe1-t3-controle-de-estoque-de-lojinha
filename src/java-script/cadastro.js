
function generateUUID() {
    const d  = new Date().getTime();
    const d2 = (performance?.now ? performance.now() * 1000 : 0);
    let d1   = d;
    let d2c  = d2;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r;
        if (d1 > 0) { r = (d1 + Math.random() * 16) % 16 | 0; d1 = Math.floor(d1 / 16); }
        else        { r = (d2c + Math.random() * 16) % 16 | 0; d2c = Math.floor(d2c / 16); }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const USUARIOS_SEED = [
    {
        id: generateUUID(),
        login: 'Admilson@gmail.com',
        senha: '123',
        nome: 'Administrador do Sistema',
        email: 'Admilson@gmail.com',
        grupo: 'administradores',
        grupoDePermissoes: 'administradores',
        status: 'Ativo',
        criadoEm: new Date().toISOString()
    },
    {
        id: generateUUID(),
        login: 'user@gmail.com',
        senha: '123',
        nome: 'Usuario Comum',
        email: 'user@gmail.com',
        grupo: 'operadores',
        grupoDePermissoes: 'operadores',
        status: 'Ativo',
        criadoEm: new Date().toISOString()
    }
];


function getUsuarios() {
    const raw = localStorage.getItem('db_usuarios');
    if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.usuarios?.length) return parsed;
    }
    const db = { usuarios: USUARIOS_SEED };
    localStorage.setItem('db_usuarios', JSON.stringify(db));
    return db;
}

function saveUsuarios(db) {
    localStorage.setItem('db_usuarios', JSON.stringify(db));
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('Sistema de Cadastro Inicializado...');

    const idEdicao = localStorage.getItem('usuarioEdicao');
    const form     = document.getElementById('registroForm');


    if (idEdicao) {
        const db      = getUsuarios();
        const usuario = db.usuarios.find(u => u.id === idEdicao);

        if (usuario) {
            setValue('nome',            usuario.nome  || '');
            setValue('email',           usuario.email || '');
            setValue('senha',           usuario.senha || '');
            setValue('confirmar-senha', usuario.senha || '');

            const radio = document.querySelector(
                `input[name="grupo-permissoes"][value="${usuario.grupo}"]`
            );
            if (radio) radio.checked = true;
        }
    }

    form.addEventListener('submit', event => {
        event.preventDefault();

        const nome    = getValue('nome');
        const email   = getValue('email');
        const senha   = getValue('senha');
        const confirmar = getValue('confirmar-senha');
        const grupoEl = document.querySelector('input[name="grupo-permissoes"]:checked');

  
        if (!grupoEl) {
            mostrarErro('Selecione um grupo de permissões.');
            return;
        }
        if (senha !== confirmar) {
            mostrarErro('As senhas não coincidem.');
            return;
        }
        if (senha.length < 3) {
            mostrarErro('A senha deve ter no mínimo 3 caracteres.');
            return;
        }

        const db = getUsuarios();

        if (idEdicao) {
            const index = db.usuarios.findIndex(u => u.id === idEdicao);
            if (index !== -1) {
                db.usuarios[index] = {
                    ...db.usuarios[index],
                    login: email,
                    senha,
                    nome,
                    email,
                    grupo: grupoEl.value,
                    grupoDePermissoes: grupoEl.value,
                };
                saveUsuarios(db);
                localStorage.removeItem('usuarioEdicao');
                alert('Usuário atualizado com sucesso!');
                window.location.href = 'usuarios.html';
            }
        } else {
            
            const jaExiste = db.usuarios.some(
                u => u.email.toLowerCase() === email.toLowerCase()
            );
            if (jaExiste) {
                mostrarErro('Este e-mail já está cadastrado.');
                return;
            }

            db.usuarios.push({
                id: generateUUID(),
                login: email,
                senha,
                nome,
                email,
                grupo: grupoEl.value,
                grupoDePermissoes: grupoEl.value,
                status: 'Ativo',
                criadoEm: new Date().toISOString()
            });
            saveUsuarios(db);
            alert('Cadastro salvo com sucesso!');
            window.location.href = 'usuarios.html';
        }
    });
});

function getValue(id) {
    return document.getElementById(id)?.value.trim() ?? '';
}

function setValue(id, valor) {
    const el = document.getElementById(id);
    if (el) el.value = valor;
}

function mostrarErro(msg) {
    alert(msg);
}
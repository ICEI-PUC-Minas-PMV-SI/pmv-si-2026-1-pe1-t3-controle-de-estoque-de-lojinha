const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailLogin = document.getElementById('emailLogin').value;
    const senhaLogin = document.getElementById('senhaLogin').value;

    // 1. Busca a string no "HD" do navegador
    const dadosSalvos = localStorage.getItem('usuarioCadastrado');

    if (dadosSalvos) {
        // 2. Transforma a string de volta em Objeto
        const usuario = JSON.parse(dadosSalvos);

        // 3. Comparação de Lógica (Igual ao C#)
        if (emailLogin === usuario.email && senhaLogin === usuario.senha) {
            alert("Login realizado com sucesso! Bem-vindo.");
        } else {
            alert("E-mail ou senha incorretos.");
        }
    } else {
        alert("Nenhum usuário encontrado no sistema.");
    }
});
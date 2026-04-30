document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Cadastro Inicializado...");

    const btnDark = document.getElementById('btnDarkMode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Salva a preferência no navegador
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
// Ao carregar a página, verifica a preferência salva
});
// Seleciona o formulário
const formCadastro = document.getElementById('meuCadastro');

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar

    // Cria um objeto com os dados dos inputs
    const usuario = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        Setor: document.getElementById('setor').value,
        Grupodepermissoes: document.getElementById('grupo-de-permissoes').value,  
        // Adicione outros campos aqui
    };

    // Salva no localStorage convertendo para String
    localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));

    alert("Cadastro salvo com sucesso! Agora você pode logar.");
    // Opcional: Redirecionar para a página de login
      window.location.href = "login.html"; 
});
// Exemplo simples de troca de tela
function irParaEtapa2() {
    document.getElementById('etapa1').style.display = 'none';
    document.getElementById('etapa2').style.display = 'block';
}
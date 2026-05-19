
 document.addEventListener('DOMContentLoaded',()=>{

   console.log("Sistema de Produtos Inicializado...");

const botao = document.getElementById('btnCadastrar');

botao.addEventListener('click',(event) => {

 event.preventDefault();

 const db_produtos = JSON.parse(localStorage.getItem('db_produtos')) || {
    produtos: []
};

function generateUUID() {
    return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0;
        let v = c == 'x' ? r : (r & 0x3 | 0x8);

        return v.toString(16);
    });
}

const produto = {
    id: generateUUID(),
    nome: document.getElementById('produto').value,
    quantidade: document.getElementById('quantidade').value,
    preco: document.getElementById('preco').value,
    fornecedor: document.getElementById('fornecedor').value,
    notaFiscal:document.getElementById('notaFiscal').value,
    data:document.getElementById('data').value,
    observacoes:document.getElementById('observacoes').value

};

if(
produto.nome ===""||
produto.quantidade ===""||
produto.preco ===""
){

alert("Preencha os campos obrigatórios!");

return;

}

db_produtos.produtos.push(produto);
localStorage.setItem('db_produtos', JSON.stringify(db_produtos));

alert("Produto cadastrado com sucesso!");

console.log(produto);

document.getElementById('produto').value="";
document.getElementById('quantidade').value="";
document.getElementById('preco').value="";
document.getElementById('fornecedor').value="";
document.getElementById('notaFiscal').value="";
document.getElementById('data').value="";
document.getElementById('observacoes').value="";

});

});
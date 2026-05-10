
 document.addEventListener('DOMContentLoaded',()=>{
   console.log("Sistema de Produtos Inicializado...");

const botao=document.getElementById('btnCadastrar');
botao.addEventListener('click',(event)=>{
event.preventDefault();

const produto={

nome:document.getElementById('produto').value,
quantidade:document.getElementById('quantidade').value,
preco:document.getElementById('preco').value,
fornecedor:document.getElementById('fornecedor').value,
notaFiscal:document.getElementById('notaFiscal').value,
data:document.getElementById('data').value,
observacoes:document.getElementById('observacoes').value

};

if(
produto.nome===""||
produto.quantidade===""||
produto.preco===""
){

alert("Preencha os campos obrigatórios!");

return;

}

localStorage.setItem('produtoCadastrado',JSON.stringify(produto));

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
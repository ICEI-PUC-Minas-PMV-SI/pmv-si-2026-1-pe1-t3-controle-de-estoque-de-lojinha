
 document.addEventListener('DOMContentLoaded', () => {

    console.log("Sistema de Produtos Inicializado...");

    const botao =
        document.getElementById('btnCadastrar');


    const idEdicao =
        localStorage.getItem('produtoEdicao');

    if (idEdicao) {

        const db_produtos = JSON.parse(
            localStorage.getItem('db_produtos')
        );

        const produto = db_produtos.produtos.find(
            p => p.id === idEdicao
        );

        if (produto) {

            document.getElementById('produto').value =
                produto.nome || '';

            document.getElementById('quantidade').value =
                produto.quantidade || '';

            document.getElementById('preco').value =
                produto.preco || '';

            document.getElementById('fornecedor').value =
                produto.fornecedor || '';

            document.getElementById('notaFiscal').value =
                produto.notaFiscal || '';

            document.getElementById('data').value =
                produto.data || '';

            document.getElementById('observacoes').value =
                produto.observacoes || '';
        }
    }


    botao.addEventListener('click', (event) => {

        event.preventDefault();

        const db_produtos = JSON.parse(
            localStorage.getItem('db_produtos')
        ) || {
            produtos: []
        };

        function generateUUID() {

            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
                .replace(/[xy]/g, function(c) {

                    let r =
                        Math.random() * 16 | 0;

                    let v =
                        c == 'x'
                        ? r
                        : (r & 0x3 | 0x8);

                    return v.toString(16);
                });
        }

        const produto = {

            id: idEdicao || generateUUID(),

            nome:
                document.getElementById('produto').value,

            quantidade:
                document.getElementById('quantidade').value,

            preco:
                document.getElementById('preco').value,

            fornecedor:
                document.getElementById('fornecedor').value,

            notaFiscal:
                document.getElementById('notaFiscal').value,

            data:
                document.getElementById('data').value,

            observacoes:
                document.getElementById('observacoes').value
        };

        if (
            produto.nome === "" ||
            produto.quantidade === "" ||
            produto.preco === ""
        ) {

            alert(
                "Preencha os campos obrigatórios!"
            );

            return;
        }

        if (idEdicao) {

            const index =
                db_produtos.produtos.findIndex(
                    p => p.id === idEdicao
                );

            if (index !== -1) {

                db_produtos.produtos[index] =
                    produto;
            }

            localStorage.removeItem(
                'produtoEdicao'
            );

            alert(
                "Produto atualizado com sucesso!"
            );

        } else {


            db_produtos.produtos.push(produto);

            alert(
                "Produto cadastrado com sucesso!"
            );
        }

        localStorage.setItem(
            'db_produtos',
            JSON.stringify(db_produtos)
        );

        window.location.href =
            "./produtos.html";
    });
});


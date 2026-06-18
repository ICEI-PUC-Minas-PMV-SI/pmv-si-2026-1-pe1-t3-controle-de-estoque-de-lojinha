
const SEED_PRODUTOS = [
    // --- Janeiro 2026 ---
    { id: 'p1',  nome: 'Biscoito Recheado Chocolate 150g', quantidade: '45', preco: '3.50',  estoqueMinimo: '10', fornecedor: 'Fabrica de Biscoitos',   notaFiscal: 'NF-2025-001', data: '2026-01-10', observacoes: '' },
    { id: 'p2',  nome: 'Arroz Tipo 1 5kg',                  quantidade: '20', preco: '24.90', estoqueMinimo: '8',  fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-002', data: '2026-01-12', observacoes: '' },
    { id: 'p3',  nome: 'Feijão Carioca 1kg',                quantidade: '50', preco: '7.80',  estoqueMinimo: '15', fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-003', data: '2026-01-18', observacoes: '' },
    { id: 'p4',  nome: 'Óleo de Soja 900ml',                quantidade: '35', preco: '6.50',  estoqueMinimo: '12', fornecedor: 'Alimentos Sul Ltda',     notaFiscal: 'NF-2025-004', data: '2026-01-22', observacoes: '' },
    { id: 'p5',  nome: 'Açúcar Cristal 2kg',                quantidade: '25', preco: '4.20',  estoqueMinimo: '10', fornecedor: 'Usina Doce Vida',        notaFiscal: 'NF-2025-005', data: '2026-01-28', observacoes: '' },
    { id: 'p6',  nome: 'Farinha de Trigo 1kg',              quantidade: '40', preco: '4.50',  estoqueMinimo: '12', fornecedor: 'Moinho Central',         notaFiscal: 'NF-2025-006', data: '2026-01-30', observacoes: '' },

    // --- Fevereiro 2026 ---
    { id: 'p7',  nome: 'Café Torrado Moído 500g',           quantidade: '18', preco: '14.90', estoqueMinimo: '6',  fornecedor: 'Café São Paulo',         notaFiscal: 'NF-2025-007', data: '2026-02-05', observacoes: '' },
    { id: 'p8',  nome: 'Macarrão Espaguete 500g',           quantidade: '48', preco: '4.30',  estoqueMinimo: '20', fornecedor: 'Massa Boa Indústria',    notaFiscal: 'NF-2025-008', data: '2026-02-10', observacoes: '' },
    { id: 'p9',  nome: 'Molho de Tomate 340g',              quantidade: '32', preco: '3.90',  estoqueMinimo: '10', fornecedor: 'Alimentos Sul Ltda',     notaFiscal: 'NF-2025-009', data: '2026-02-14', observacoes: '' },
    { id: 'p10', nome: 'Leite Integral 1L',                 quantidade: '0',  preco: '5.20',  estoqueMinimo: '15', fornecedor: 'Laticínios Minas',       notaFiscal: 'NF-2025-010', data: '2026-02-18', observacoes: 'Produto em falta' },
    { id: 'p11', nome: 'Biscoito Recheado Morango 150g',    quantidade: '28', preco: '3.50',  estoqueMinimo: '10', fornecedor: 'Fabrica de Biscoitos',   notaFiscal: 'NF-2025-011', data: '2026-02-22', observacoes: '' },
    { id: 'p12', nome: 'Sal Refinado 1kg',                  quantidade: '55', preco: '2.10',  estoqueMinimo: '20', fornecedor: 'Usina Doce Vida',        notaFiscal: 'NF-2025-012', data: '2026-02-26', observacoes: '' },

    // --- Março 2026 ---
    { id: 'p13', nome: 'Biscoito Recheado Baunilha 150g',   quantidade: '26', preco: '3.50',  estoqueMinimo: '10', fornecedor: 'Fabrica de Biscoitos',   notaFiscal: 'NF-2025-013', data: '2026-03-04', observacoes: '' },
    { id: 'p14', nome: 'Arroz Parboilizado 5kg',            quantidade: '22', preco: '26.50', estoqueMinimo: '8',  fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-014', data: '2026-03-08', observacoes: '' },
    { id: 'p15', nome: 'Feijão Preto 1kg',                  quantidade: '38', preco: '8.20',  estoqueMinimo: '15', fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-015', data: '2026-03-12', observacoes: '' },
    { id: 'p16', nome: 'Achocolatado em Pó 400g',           quantidade: '14', preco: '8.90',  estoqueMinimo: '8',  fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-016', data: '2026-03-18', observacoes: '' },
    { id: 'p17', nome: 'Extrato de Tomate 300g',            quantidade: '28', preco: '3.20',  estoqueMinimo: '10', fornecedor: 'Alimentos Sul Ltda',     notaFiscal: 'NF-2025-017', data: '2026-03-22', observacoes: '' },
    { id: 'p18', nome: 'Sabonete 90g',                      quantidade: '60', preco: '2.50',  estoqueMinimo: '20', fornecedor: 'Higiene Brasil',         notaFiscal: 'NF-2025-018', data: '2026-03-28', observacoes: '' },

    // --- Abril 2026 ---
    { id: 'p19', nome: 'Creme Dental 90g',                  quantidade: '40', preco: '3.90',  estoqueMinimo: '10', fornecedor: 'Higiene Brasil',         notaFiscal: 'NF-2025-019', data: '2026-04-03', observacoes: '' },
    { id: 'p20', nome: 'Detergente Líquido 500ml',          quantidade: '45', preco: '2.90',  estoqueMinimo: '15', fornecedor: 'Limpeza Total',          notaFiscal: 'NF-2025-020', data: '2026-04-08', observacoes: '' },
    { id: 'p21', nome: 'Água Sanitária 1L',                 quantidade: '30', preco: '3.60',  estoqueMinimo: '10', fornecedor: 'Limpeza Total',          notaFiscal: 'NF-2025-021', data: '2026-04-12', observacoes: '' },
    { id: 'p22', nome: 'Sabão em Pó 1kg',                   quantidade: '18', preco: '12.90', estoqueMinimo: '6',  fornecedor: 'Limpeza Total',          notaFiscal: 'NF-2025-022', data: '2026-04-18', observacoes: '' },
    { id: 'p23', nome: 'Margarina 500g',                    quantidade: '22', preco: '6.20',  estoqueMinimo: '8',  fornecedor: 'Laticínios Minas',       notaFiscal: 'NF-2025-023', data: '2026-04-25', observacoes: '' },

    // --- Maio 2026 ---
    { id: 'p24', nome: 'Refrigerante Cola 2L',              quantidade: '35', preco: '7.90',  estoqueMinimo: '12', fornecedor: 'Bebidas Geladas',        notaFiscal: 'NF-2025-024', data: '2026-05-04', observacoes: '' },
    { id: 'p25', nome: 'Suco de Laranja 1L',                quantidade: '20', preco: '6.40',  estoqueMinimo: '8',  fornecedor: 'Bebidas Geladas',        notaFiscal: 'NF-2025-025', data: '2026-05-08', observacoes: '' },
    { id: 'p26', nome: 'Água Mineral 500ml',                quantidade: '80', preco: '1.80',  estoqueMinimo: '30', fornecedor: 'Bebidas Geladas',        notaFiscal: 'NF-2025-026', data: '2026-05-12', observacoes: '' },
    { id: 'p27', nome: 'Cerveja Lata 350ml',                quantidade: '72', preco: '3.50',  estoqueMinimo: '24', fornecedor: 'Bebidas Geladas',        notaFiscal: 'NF-2025-027', data: '2026-05-18', observacoes: '' },
    { id: 'p28', nome: 'Requeijão Cremoso 200g',            quantidade: '16', preco: '7.40',  estoqueMinimo: '6',  fornecedor: 'Laticínios Minas',       notaFiscal: 'NF-2025-028', data: '2026-05-25', observacoes: '' },

    // --- Junho 2026 ---
    { id: 'p29', nome: 'Amaciante 500ml',                   quantidade: '28', preco: '5.80',  estoqueMinimo: '10', fornecedor: 'Limpeza Total',          notaFiscal: 'NF-2025-029', data: '2026-06-01', observacoes: '' },
    { id: 'p30', nome: 'Papel Higiênico 12x 30m',           quantidade: '48', preco: '14.90', estoqueMinimo: '12', fornecedor: 'Higiene Brasil',         notaFiscal: 'NF-2025-030', data: '2026-06-03', observacoes: '' },
    { id: 'p31', nome: 'Biscoito Salgado Cream Cracker 200g',quantidade: '32', preco: '4.10',  estoqueMinimo: '10', fornecedor: 'Fabrica de Biscoitos',   notaFiscal: 'NF-2025-031', data: '2026-06-06', observacoes: '' },
    { id: 'p32', nome: 'Leite Condensado 395g',             quantidade: '24', preco: '6.90',  estoqueMinimo: '8',  fornecedor: 'Laticínios Minas',       notaFiscal: 'NF-2025-032', data: '2026-06-10', observacoes: '' },
    { id: 'p33', nome: 'Farinha de Mandioca 1kg',           quantidade: '20', preco: '5.30',  estoqueMinimo: '8',  fornecedor: 'Moinho Central',         notaFiscal: 'NF-2025-033', data: '2026-06-14', observacoes: '' },
    { id: 'p34', nome: 'Milho de Pipoca 500g',              quantidade: '30', preco: '4.70',  estoqueMinimo: '10', fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-034', data: '2026-06-18', observacoes: '' },
];

function gerarId(prefixo = 'id') {
    return `${prefixo}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

function escapeHtml(valor) {
    const mapa = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return String(valor ?? '').replace(/[&<>"']/g, c => mapa[c]);
}

function formatarMoeda(valor) {
    const num = parseFloat(valor) || 0;
    return `R$ ${num.toFixed(2).replace('.', ',')}`;
}

function formatarData(dataISO) {
    if (!dataISO) return '-';
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
}

const DB = {
    getProdutos() {
        return JSON.parse(localStorage.getItem('db_produtos')) || { produtos: [] };
    },
    saveProdutos(db) {
        localStorage.setItem('db_produtos', JSON.stringify(db));
    },
    getCompras() {
        return JSON.parse(localStorage.getItem('db_compras')) || { compras: [] };
    },
    saveCompras(db) {
        localStorage.setItem('db_compras', JSON.stringify(db));
    }
};

const DB_PRODUTOS_VERSAO = '2';

function inicializarDados() {
    const versaoSalva = localStorage.getItem('db_produtos_versao');
    if (versaoSalva !== DB_PRODUTOS_VERSAO) {
        DB.saveProdutos({ produtos: SEED_PRODUTOS });
        localStorage.setItem('db_produtos_versao', DB_PRODUTOS_VERSAO);
    }
}

let compraAtual = { itens: [] };

function adicionarItemCompra() {
    const nome  = document.getElementById('produto-compra').value.trim();
    const qtd   = Number(document.getElementById('qtd-compra').value);
    const preco = parseFloat(document.getElementById('preco-compra').value);

    if (!nome || !qtd || isNaN(preco) || preco < 0) {
        mostrarAlerta('Preencha produto, quantidade e preço unitário.', 'aviso');
        return;
    }

    compraAtual.itens.push({ produtoNome: nome, quantidade: qtd, preco: preco.toFixed(2) });

    document.getElementById('produto-compra').value = '';
    document.getElementById('qtd-compra').value     = '';
    document.getElementById('preco-compra').value   = '';
    document.getElementById('produto-compra').focus();

    renderizarItensCompra();
}

function removerItemCompra(index) {
    compraAtual.itens.splice(index, 1);
    renderizarItensCompra();
}

function renderizarItensCompra() {
    const container = document.getElementById('lista-itens-compra');

    if (compraAtual.itens.length === 0) {
        container.innerHTML = '<p class="itens-vazio">Nenhum item adicionado ainda.</p>';
        return;
    }

    container.innerHTML = compraAtual.itens.map((item, i) => `
        <div class="item-compra">
            <span class="item-compra-nome">${escapeHtml(item.produtoNome)}</span>
            <span class="item-compra-info">Qtd: ${item.quantidade}</span>
            <span class="item-compra-info">${formatarMoeda(item.preco)}</span>
            <button type="button" class="item-compra-remover" onclick="removerItemCompra(${i})" title="Remover item" aria-label="Remover ${escapeHtml(item.produtoNome)}">&times;</button>
        </div>
    `).join('');
}

function finalizarCompra() {
    const nf        = document.getElementById('nf-compra').value.trim();
    const fornecedor = document.getElementById('fornecedor-compra').value.trim();
    const data      = document.getElementById('data-compra').value;

    if (!nf || !fornecedor || !data) {
        mostrarAlerta('Preencha Nota Fiscal, Fornecedor e Data da compra.', 'aviso');
        return;
    }
    if (compraAtual.itens.length === 0) {
        mostrarAlerta('Adicione pelo menos um produto à compra.', 'aviso');
        return;
    }

    const db_compras = DB.getCompras();
    const novaCompra = {
        id: gerarId('c'),
        notaFiscal: nf,
        fornecedor,
        data,
        itens: compraAtual.itens.map(i => ({ ...i }))
    };
    db_compras.compras.push(novaCompra);
    DB.saveCompras(db_compras);

    const db_produtos = DB.getProdutos();
    for (const item of compraAtual.itens) {
        const existente = db_produtos.produtos.find(
            p => p.nome.toLowerCase() === item.produtoNome.toLowerCase()
        );
        if (existente) {
            existente.quantidade = (Number(existente.quantidade) || 0) + Number(item.quantidade);
            existente.fornecedor = fornecedor;
            existente.notaFiscal = nf;
        } else {
            db_produtos.produtos.push({
                id: gerarId('p'),
                nome: item.produtoNome,
                quantidade: String(item.quantidade),
                preco: parseFloat(item.preco).toFixed(2),
                estoqueMinimo: '0',
                fornecedor,
                notaFiscal: nf,
                data,
                observacoes: ''
            });
        }
    }
    DB.saveProdutos(db_produtos);

    compraAtual.itens = [];
    document.getElementById('nf-compra').value         = '';
    document.getElementById('fornecedor-compra').value = '';
    document.getElementById('data-compra').value       = '';
    renderizarItensCompra();
    carregarDatalistProdutos();
    aplicarBusca();

    mostrarAlerta('Compra finalizada! Estoque atualizado com sucesso.', 'sucesso');
}


function cadastrarProduto() {
    const nome          = document.getElementById('cad-nome').value.trim();
    const precoVenda    = document.getElementById('cad-preco-venda').value;
    const estoqueMinimo = document.getElementById('cad-estoque-minimo').value;
    const obs           = document.getElementById('cad-obs').value.trim();

    if (!nome || !precoVenda) {
        mostrarAlerta('Preencha pelo menos o Nome e o Preço de Venda.', 'aviso');
        return;
    }

    const db = DB.getProdutos();
    const jaExiste = db.produtos.some(p => p.nome.toLowerCase() === nome.toLowerCase());
    if (jaExiste) {
        mostrarAlerta('Já existe um produto com este nome.', 'aviso');
        return;
    }

    const novo = {
        id: gerarId('p'),
        nome,
        quantidade: '0',
        preco: parseFloat(precoVenda).toFixed(2),
        estoqueMinimo: estoqueMinimo || '0',
        fornecedor: '',
        notaFiscal: '',
        data: new Date().toISOString().slice(0, 10),
        observacoes: obs
    };

    db.produtos.push(novo);
    DB.saveProdutos(db);

    ['cad-nome','cad-preco-venda',
     'cad-estoque-minimo','cad-obs'].forEach(id => {
        document.getElementById(id).value = '';
    });

    carregarDatalistProdutos();
    aplicarBusca();
    mostrarAlerta(`Produto "${nome}" cadastrado com sucesso!`, 'sucesso');
}

function classeEstoque(produto) {
    const qtd = Number(produto.quantidade) || 0;
    const min = Number(produto.estoqueMinimo) || 0;
    if (qtd <= 0)   return 'inactive';
    if (qtd <= min) return 'warning';
    return 'active';
}

function renderizarEstoque(filtro = '') {
    const db = DB.getProdutos();
    const termo = filtro.trim().toLowerCase();

    const lista = (db.produtos || []).filter(p => {
        
        return (p.nome || '').toLowerCase().includes(termo);
    });

    const tbody = document.getElementById('table-estoque');

    if (lista.length === 0) {
        tbody.innerHTML = `<tr class="empty-row"><td colspan="5">Nenhum produto encontrado.</td></tr>`;
        return;
    }

    tbody.innerHTML = lista.map(p => {
        const classe = classeEstoque(p);
        const qtd    = Number(p.quantidade) || 0;
        const min    = Number(p.estoqueMinimo) || 0;

        
        let badgeClasse = 'badge-ok';
        if (qtd <= 0)        badgeClasse = 'badge-sem';
        else if (qtd <= min) badgeClasse = 'badge-baixo';

        return `
            <tr>
                <td class="tabela-nome">${escapeHtml(p.nome || '-')}</td>
                <td class="col-center">
                    <span class="qtd-badge ${badgeClasse}">${qtd}</span>
                </td>
                <td class="col-center col-muted">${escapeHtml(p.estoqueMinimo || '0')}</td>
                <td class="col-center col-preco">${formatarMoeda(p.preco)}</td>
                <td class="col-center">
                    <span class="acoes-group">
                        <button type="button" class="btn-ico btn-ico-edit"
                            onclick="abrirEdicaoProduto('${p.id}')" title="Editar produto">
                            <img src="../../docs/img/icons/edit-pencil.svg" alt="Editar">
                        </button>
                        <button type="button" class="btn-ico btn-ico-del"
                            onclick="excluirProduto('${p.id}')" title="Excluir produto">
                            <img src="../../docs/img/icons/trash-delete.svg" alt="Excluir">
                        </button>
                    </span>
                </td>
            </tr>
        `;
    }).join('');
}

function excluirProduto(id) {
    if (!confirm('Deseja excluir este produto?')) return;
    const db = DB.getProdutos();
    db.produtos = db.produtos.filter(p => p.id !== id);
    DB.saveProdutos(db);
    carregarDatalistProdutos();
    aplicarBusca();
}

function abrirEdicaoProduto(id) {
    const db = DB.getProdutos();
    const produto = db.produtos.find(p => p.id === id);
    if (!produto) return;

    document.getElementById('edit-id').value              = produto.id;
    document.getElementById('edit-nome').value             = produto.nome || '';
    document.getElementById('edit-preco').value            = produto.preco || '';
    document.getElementById('edit-quantidade').value       = produto.quantidade || '0';
    document.getElementById('edit-estoque-minimo').value   = produto.estoqueMinimo || '0';
    document.getElementById('edit-fornecedor').value       = produto.fornecedor || '';
    document.getElementById('edit-nota-fiscal').value      = produto.notaFiscal || '';
    document.getElementById('edit-data').value             = produto.data || '';
    document.getElementById('edit-obs').value              = produto.observacoes || '';

    document.getElementById('modal-editar').style.display = 'flex';
}

function salvarEdicaoProduto() {
    const id = document.getElementById('edit-id').value;
    const db = DB.getProdutos();
    const produto = db.produtos.find(p => p.id === id);
    if (!produto) return;

    const nome = document.getElementById('edit-nome').value.trim();
    if (!nome) { mostrarAlerta('O nome do produto não pode ficar vazio.', 'aviso'); return; }

    produto.nome            = nome;
    produto.preco           = parseFloat(document.getElementById('edit-preco').value) ? parseFloat(document.getElementById('edit-preco').value).toFixed(2) : produto.preco;
    produto.quantidade      = document.getElementById('edit-quantidade').value || '0';
    produto.estoqueMinimo   = document.getElementById('edit-estoque-minimo').value || '0';
    produto.fornecedor      = document.getElementById('edit-fornecedor').value.trim() || '';
    produto.notaFiscal      = document.getElementById('edit-nota-fiscal').value.trim() || '';
    produto.data            = document.getElementById('edit-data').value || new Date().toISOString().slice(0, 10);
    produto.observacoes     = document.getElementById('edit-obs').value.trim() || '';

    DB.saveProdutos(db);
    carregarDatalistProdutos();
    aplicarBusca();
    document.getElementById('modal-editar').style.display = 'none';
    mostrarAlerta('Produto atualizado com sucesso!', 'sucesso');
}

function fecharModalEditar() {
    document.getElementById('modal-editar').style.display = 'none';
}


function renderizarEntradas(filtro = '') {
    const db_compras = DB.getCompras();
    const termo = filtro.trim().toLowerCase();
    const linhas = [];

    for (const compra of db_compras.compras) {
        
        const matchCompra =
            (compra.notaFiscal || '').toLowerCase().includes(termo) ||
            (compra.fornecedor || '').toLowerCase().includes(termo);

        for (const item of compra.itens) {
            const matchItem = (item.produtoNome || '').toLowerCase().includes(termo);
            if (!termo || matchItem || matchCompra) {
                linhas.push(`
                <tr>
                    <td class="tabela-nome">${escapeHtml(item.produtoNome)}</td>
                    <td class="col-center col-muted">${escapeHtml(String(item.quantidade))}</td>
                    <td class="col-center col-preco">${formatarMoeda(item.preco)}</td>
                    <td class="col-center col-muted">${formatarData(compra.data)}</td>
                    <td class="col-center">${escapeHtml(compra.notaFiscal || '-')}</td>
                    <td class="col-muted">${escapeHtml(compra.fornecedor || '-')}</td>
                    <td class="col-center">
                        <span class="acoes-group">
                            <button type="button" class="btn-ico btn-ico-edit"
                                onclick="abrirDetalhesCompra('${compra.id}')" title="Ver detalhes">
                                <img src="../../docs/img/icons/search.svg" alt="Detalhes" style="width:15px;height:15px;">
                            </button>
                        </span>
                    </td>
                </tr>
            `);
            }
        }
    }

    document.getElementById('table-entradas').innerHTML = linhas.length
        ? linhas.join('')
        : '<tr class="empty-row"><td colspan="7">Nenhuma entrada registrada.</td></tr>';
}

function abrirDetalhesCompra(compraId) {
    const db_compras = DB.getCompras();
    const compra = db_compras.compras.find(c => c.id === compraId);
    if (!compra) return;

    const itensHtml = compra.itens.map(item => `
        <div class="modal-item">
            <span class="modal-item-nome">${escapeHtml(item.produtoNome)}</span>
            <span class="modal-item-info">Qtd: <strong>${item.quantidade}</strong></span>
            <span class="modal-item-info">${formatarMoeda(item.preco)}</span>
        </div>
    `).join('');

    document.getElementById('modal-conteudo').innerHTML = `
        <div class="modal-meta">
            <div class="modal-meta-row"><span>Nota Fiscal</span><strong>${escapeHtml(compra.notaFiscal)}</strong></div>
            <div class="modal-meta-row"><span>Fornecedor</span><strong>${escapeHtml(compra.fornecedor)}</strong></div>
            <div class="modal-meta-row"><span>Data</span><strong>${formatarData(compra.data)}</strong></div>
        </div>
        <p class="modal-section-label">Itens</p>
        <div class="modal-itens">${itensHtml}</div>
    `;

    document.getElementById('modal-detalhes').style.display = 'flex';
}

function inicializarModoSwitcher() {
    const modoSwitcher = document.getElementById('modoSwitcher');
    modoSwitcher.querySelectorAll('.modo-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            const modo = btn.dataset.modo;
            modoSwitcher.querySelectorAll('.modo-tab').forEach(b => b.classList.remove('modo-tab-ativo'));
            btn.classList.add('modo-tab-ativo');

            const isCompra = modo === 'compra';
            document.getElementById('modo-compra-fields').style.display = isCompra ? '' : 'none';
            document.getElementById('modo-produto-fields').style.display = isCompra ? 'none' : '';
            document.getElementById('toolbar-title').textContent = isCompra ? 'Nova Compra' : 'Cadastrar Produto';
        });
    });

    const abaSwitcher = document.getElementById('abaSwitcher');
    abaSwitcher.querySelectorAll('.modo-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            const aba = btn.dataset.aba;
            abaSwitcher.querySelectorAll('.modo-tab').forEach(b => b.classList.remove('modo-tab-ativo'));
            btn.classList.add('modo-tab-ativo');

            const isEstoque = aba === 'estoque';
            document.getElementById('aba-estoque').style.display  = isEstoque ? '' : 'none';
            document.getElementById('aba-entradas').style.display = isEstoque ? 'none' : '';
            document.getElementById('painel-titulo').textContent  = isEstoque ? 'Estoque' : 'Entradas Recentes';

        
            const buscaInput = document.getElementById('busca-produtos');
            buscaInput.placeholder = isEstoque ? 'Nome do produto...' : 'Nome, NF ou fornecedor...';

        
            aplicarBusca();
        });
    });
}


function carregarDatalistProdutos() {
    const db = DB.getProdutos();
    const lista = document.getElementById('lista-produtos');
    lista.innerHTML = db.produtos
        .map(p => `<option value="${escapeHtml(p.nome)}">`)
        .join('');
}

function preencherPrecoPorProduto() {
    const nome = document.getElementById('produto-compra').value;
    const db = DB.getProdutos();
    const produto = db.produtos.find(p => p.nome.toLowerCase() === nome.toLowerCase());
    if (produto) {
        document.getElementById('preco-compra').value = produto.preco || '';
    }
}


function aplicarBusca() {
    const valor = document.getElementById('busca-produtos').value;
    const isEstoque = document.getElementById('aba-estoque').style.display !== 'none';
    if (isEstoque) {
        renderizarEstoque(valor);
    } else {
        renderizarEntradas(valor);
    }
}

function mostrarAlerta(mensagem, tipo = 'sucesso') {
    let el = document.getElementById('alerta-global');
    if (!el) {
        el = document.createElement('div');
        el.id = 'alerta-global';
        el.className = 'alerta-global';
        document.body.appendChild(el);
    }
    el.textContent = mensagem;
    el.className = `alerta-global alerta-${tipo} alerta-visivel`;
    clearTimeout(el._timeout);
    el._timeout = setTimeout(() => el.classList.remove('alerta-visivel'), 3500);
}


window.addEventListener('load', () => {
    inicializarDados();
    inicializarModoSwitcher();
    carregarDatalistProdutos();
    renderizarItensCompra();
    renderizarEstoque();

    document.getElementById('btnAdicionarItem').addEventListener('click', adicionarItemCompra);
    document.getElementById('btnFinalizarCompra').addEventListener('click', finalizarCompra);

    document.getElementById('produto-compra').addEventListener('change', preencherPrecoPorProduto);
    document.getElementById('produto-compra').addEventListener('input', () => {
        renderizarEstoque(document.getElementById('produto-compra').value);
    });

    document.getElementById('btnCadastrarProduto').addEventListener('click', cadastrarProduto);

    document.getElementById('busca-produtos').addEventListener('input', aplicarBusca);

    document.getElementById('btnFecharModal').addEventListener('click', () => {
        document.getElementById('modal-detalhes').style.display = 'none';
    });
    document.getElementById('modal-detalhes').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.style.display = 'none';
    });

    document.getElementById('btnSalvarEdicao').addEventListener('click', salvarEdicaoProduto);
    document.getElementById('btnFecharModalEditar').addEventListener('click', fecharModalEditar);
    document.getElementById('modal-editar').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) fecharModalEditar();
    });

    window.removerItemCompra     = removerItemCompra;
    window.excluirProduto        = excluirProduto;
    window.abrirEdicaoProduto    = abrirEdicaoProduto;
    window.salvarEdicaoProduto   = salvarEdicaoProduto;
    window.fecharModalEditar     = fecharModalEditar;
    window.abrirDetalhesCompra   = abrirDetalhesCompra;
});
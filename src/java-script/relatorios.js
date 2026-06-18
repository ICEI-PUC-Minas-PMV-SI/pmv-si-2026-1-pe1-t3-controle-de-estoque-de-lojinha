let grafico = null;

/* ═══════════════════════════════════════════════════════════════
   Seeds de dados — mesma base usada em produtos.js e saidas.html
   ═══════════════════════════════════════════════════════════════ */

const SEED_PRODUTOS = [
  { id: 'p1',  nome: 'Biscoito Recheado Chocolate 150g', quantidade: '45', preco: '3.50',  estoqueMinimo: '10', fornecedor: 'Fabrica de Biscoitos',   notaFiscal: 'NF-2025-001', data: '2026-01-10', observacoes: '' },
  { id: 'p2',  nome: 'Arroz Tipo 1 5kg',                  quantidade: '20', preco: '24.90', estoqueMinimo: '8',  fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-002', data: '2026-01-12', observacoes: '' },
  { id: 'p3',  nome: 'Feijão Carioca 1kg',                quantidade: '50', preco: '7.80',  estoqueMinimo: '15', fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-003', data: '2026-01-18', observacoes: '' },
  { id: 'p4',  nome: 'Óleo de Soja 900ml',                quantidade: '35', preco: '6.50',  estoqueMinimo: '12', fornecedor: 'Alimentos Sul Ltda',     notaFiscal: 'NF-2025-004', data: '2026-01-22', observacoes: '' },
  { id: 'p5',  nome: 'Açúcar Cristal 2kg',                quantidade: '25', preco: '4.20',  estoqueMinimo: '10', fornecedor: 'Usina Doce Vida',        notaFiscal: 'NF-2025-005', data: '2026-01-28', observacoes: '' },
  { id: 'p6',  nome: 'Farinha de Trigo 1kg',              quantidade: '40', preco: '4.50',  estoqueMinimo: '12', fornecedor: 'Moinho Central',         notaFiscal: 'NF-2025-006', data: '2026-01-30', observacoes: '' },
  { id: 'p7',  nome: 'Café Torrado Moído 500g',           quantidade: '18', preco: '14.90', estoqueMinimo: '6',  fornecedor: 'Café São Paulo',         notaFiscal: 'NF-2025-007', data: '2026-02-05', observacoes: '' },
  { id: 'p8',  nome: 'Macarrão Espaguete 500g',           quantidade: '48', preco: '4.30',  estoqueMinimo: '20', fornecedor: 'Massa Boa Indústria',    notaFiscal: 'NF-2025-008', data: '2026-02-10', observacoes: '' },
  { id: 'p9',  nome: 'Molho de Tomate 340g',              quantidade: '32', preco: '3.90',  estoqueMinimo: '10', fornecedor: 'Alimentos Sul Ltda',     notaFiscal: 'NF-2025-009', data: '2026-02-14', observacoes: '' },
  { id: 'p10', nome: 'Leite Integral 1L',                 quantidade: '0',  preco: '5.20',  estoqueMinimo: '15', fornecedor: 'Laticínios Minas',       notaFiscal: 'NF-2025-010', data: '2026-02-18', observacoes: 'Produto em falta' },
  { id: 'p11', nome: 'Biscoito Recheado Morango 150g',    quantidade: '28', preco: '3.50',  estoqueMinimo: '10', fornecedor: 'Fabrica de Biscoitos',   notaFiscal: 'NF-2025-011', data: '2026-02-22', observacoes: '' },
  { id: 'p12', nome: 'Sal Refinado 1kg',                  quantidade: '55', preco: '2.10',  estoqueMinimo: '20', fornecedor: 'Usina Doce Vida',        notaFiscal: 'NF-2025-012', data: '2026-02-26', observacoes: '' },
  { id: 'p13', nome: 'Biscoito Recheado Baunilha 150g',   quantidade: '26', preco: '3.50',  estoqueMinimo: '10', fornecedor: 'Fabrica de Biscoitos',   notaFiscal: 'NF-2025-013', data: '2026-03-04', observacoes: '' },
  { id: 'p14', nome: 'Arroz Parboilizado 5kg',            quantidade: '22', preco: '26.50', estoqueMinimo: '8',  fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-014', data: '2026-03-08', observacoes: '' },
  { id: 'p15', nome: 'Feijão Preto 1kg',                  quantidade: '38', preco: '8.20',  estoqueMinimo: '15', fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-015', data: '2026-03-12', observacoes: '' },
  { id: 'p16', nome: 'Achocolatado em Pó 400g',           quantidade: '14', preco: '8.90',  estoqueMinimo: '8',  fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-016', data: '2026-03-18', observacoes: '' },
  { id: 'p17', nome: 'Extrato de Tomate 300g',            quantidade: '28', preco: '3.20',  estoqueMinimo: '10', fornecedor: 'Alimentos Sul Ltda',     notaFiscal: 'NF-2025-017', data: '2026-03-22', observacoes: '' },
  { id: 'p18', nome: 'Sabonete 90g',                      quantidade: '60', preco: '2.50',  estoqueMinimo: '20', fornecedor: 'Higiene Brasil',         notaFiscal: 'NF-2025-018', data: '2026-03-28', observacoes: '' },
  { id: 'p19', nome: 'Creme Dental 90g',                  quantidade: '40', preco: '3.90',  estoqueMinimo: '10', fornecedor: 'Higiene Brasil',         notaFiscal: 'NF-2025-019', data: '2026-04-03', observacoes: '' },
  { id: 'p20', nome: 'Detergente Líquido 500ml',          quantidade: '45', preco: '2.90',  estoqueMinimo: '15', fornecedor: 'Limpeza Total',          notaFiscal: 'NF-2025-020', data: '2026-04-08', observacoes: '' },
  { id: 'p21', nome: 'Água Sanitária 1L',                 quantidade: '30', preco: '3.60',  estoqueMinimo: '10', fornecedor: 'Limpeza Total',          notaFiscal: 'NF-2025-021', data: '2026-04-12', observacoes: '' },
  { id: 'p22', nome: 'Sabão em Pó 1kg',                   quantidade: '18', preco: '12.90', estoqueMinimo: '6',  fornecedor: 'Limpeza Total',          notaFiscal: 'NF-2025-022', data: '2026-04-18', observacoes: '' },
  { id: 'p23', nome: 'Margarina 500g',                    quantidade: '22', preco: '6.20',  estoqueMinimo: '8',  fornecedor: 'Laticínios Minas',       notaFiscal: 'NF-2025-023', data: '2026-04-25', observacoes: '' },
  { id: 'p24', nome: 'Refrigerante Cola 2L',              quantidade: '35', preco: '7.90',  estoqueMinimo: '12', fornecedor: 'Bebidas Geladas',        notaFiscal: 'NF-2025-024', data: '2026-05-04', observacoes: '' },
  { id: 'p25', nome: 'Suco de Laranja 1L',                quantidade: '20', preco: '6.40',  estoqueMinimo: '8',  fornecedor: 'Bebidas Geladas',        notaFiscal: 'NF-2025-025', data: '2026-05-08', observacoes: '' },
  { id: 'p26', nome: 'Água Mineral 500ml',                quantidade: '80', preco: '1.80',  estoqueMinimo: '30', fornecedor: 'Bebidas Geladas',        notaFiscal: 'NF-2025-026', data: '2026-05-12', observacoes: '' },
  { id: 'p27', nome: 'Cerveja Lata 350ml',                quantidade: '72', preco: '3.50',  estoqueMinimo: '24', fornecedor: 'Bebidas Geladas',        notaFiscal: 'NF-2025-027', data: '2026-05-18', observacoes: '' },
  { id: 'p28', nome: 'Requeijão Cremoso 200g',            quantidade: '16', preco: '7.40',  estoqueMinimo: '6',  fornecedor: 'Laticínios Minas',       notaFiscal: 'NF-2025-028', data: '2026-05-25', observacoes: '' },
  { id: 'p29', nome: 'Amaciante 500ml',                   quantidade: '28', preco: '5.80',  estoqueMinimo: '10', fornecedor: 'Limpeza Total',          notaFiscal: 'NF-2025-029', data: '2026-06-01', observacoes: '' },
  { id: 'p30', nome: 'Papel Higiênico 12x 30m',           quantidade: '48', preco: '14.90', estoqueMinimo: '12', fornecedor: 'Higiene Brasil',         notaFiscal: 'NF-2025-030', data: '2026-06-03', observacoes: '' },
  { id: 'p31', nome: 'Biscoito Salgado Cream Cracker 200g',quantidade: '32', preco: '4.10',  estoqueMinimo: '10', fornecedor: 'Fabrica de Biscoitos',   notaFiscal: 'NF-2025-031', data: '2026-06-06', observacoes: '' },
  { id: 'p32', nome: 'Leite Condensado 395g',             quantidade: '24', preco: '6.90',  estoqueMinimo: '8',  fornecedor: 'Laticínios Minas',       notaFiscal: 'NF-2025-032', data: '2026-06-10', observacoes: '' },
  { id: 'p33', nome: 'Farinha de Mandioca 1kg',           quantidade: '20', preco: '5.30',  estoqueMinimo: '8',  fornecedor: 'Moinho Central',         notaFiscal: 'NF-2025-033', data: '2026-06-14', observacoes: '' },
  { id: 'p34', nome: 'Milho de Pipoca 500g',              quantidade: '30', preco: '4.70',  estoqueMinimo: '10', fornecedor: 'Cereal Distribuidora',   notaFiscal: 'NF-2025-034', data: '2026-06-18', observacoes: '' },
];

const SEED_SAIDAS = [
  { codigo: 1001, produto: 'Arroz Tipo 1 5kg',             quantidade: 3,  preco: '24.90', fornecedor: 'Mercado Central',  nf: 'V-0001', data: '2026-01-12', observacoes: '' },
  { codigo: 1002, produto: 'Feijão Carioca 1kg',            quantidade: 5,  preco: '7.80',  fornecedor: 'Mercado Central',  nf: 'V-0001', data: '2026-01-12', observacoes: '' },
  { codigo: 1003, produto: 'Óleo de Soja 900ml',            quantidade: 4,  preco: '6.50',  fornecedor: 'Mercado Central',  nf: 'V-0002', data: '2026-01-18', observacoes: '' },
  { codigo: 1004, produto: 'Açúcar Cristal 2kg',            quantidade: 6,  preco: '4.20',  fornecedor: 'Padaria Pão Quente', nf: 'V-0003', data: '2026-01-22', observacoes: '' },
  { codigo: 1005, produto: 'Biscoito Recheado Chocolate 150g', quantidade: 8, preco: '3.50', fornecedor: 'Padaria Pão Quente', nf: 'V-0003', data: '2026-01-22', observacoes: '' },
  { codigo: 1006, produto: 'Café Torrado Moído 500g',       quantidade: 4,  preco: '14.90', fornecedor: 'Mercado Central',  nf: 'V-0004', data: '2026-02-08', observacoes: '' },
  { codigo: 1007, produto: 'Macarrão Espaguete 500g',       quantidade: 10, preco: '4.30',  fornecedor: 'Mercado Central',  nf: 'V-0004', data: '2026-02-08', observacoes: '' },
  { codigo: 1008, produto: 'Molho de Tomate 340g',          quantidade: 6,  preco: '3.90',  fornecedor: 'Mercado Central',  nf: 'V-0005', data: '2026-02-15', observacoes: '' },
  { codigo: 1009, produto: 'Biscoito Recheado Morango 150g',quantidade: 5,  preco: '3.50',  fornecedor: 'Padaria Pão Quente', nf: 'V-0006', data: '2026-02-22', observacoes: '' },
  { codigo: 1010, produto: 'Sal Refinado 1kg',              quantidade: 10, preco: '2.10',  fornecedor: 'Mercado Central',  nf: 'V-0007', data: '2026-02-26', observacoes: '' },
  { codigo: 1011, produto: 'Arroz Parboilizado 5kg',        quantidade: 3,  preco: '26.50', fornecedor: 'Mercado Central',  nf: 'V-0008', data: '2026-03-06', observacoes: '' },
  { codigo: 1012, produto: 'Feijão Preto 1kg',              quantidade: 6,  preco: '8.20',  fornecedor: 'Mercado Central',  nf: 'V-0008', data: '2026-03-06', observacoes: '' },
  { codigo: 1013, produto: 'Achocolatado em Pó 400g',       quantidade: 3,  preco: '8.90',  fornecedor: 'Padaria Pão Quente', nf: 'V-0009', data: '2026-03-14', observacoes: '' },
  { codigo: 1014, produto: 'Extrato de Tomate 300g',         quantidade: 7,  preco: '3.20',  fornecedor: 'Padaria Pão Quente', nf: 'V-0009', data: '2026-03-14', observacoes: '' },
  { codigo: 1015, produto: 'Sabonete 90g',                   quantidade: 12, preco: '2.50',  fornecedor: 'Mercado Central',  nf: 'V-0010', data: '2026-03-22', observacoes: '' },
  { codigo: 1016, produto: 'Creme Dental 90g',              quantidade: 10, preco: '3.90',  fornecedor: 'Mercado Central',  nf: 'V-0011', data: '2026-04-05', observacoes: '' },
  { codigo: 1017, produto: 'Detergente Líquido 500ml',       quantidade: 8,  preco: '2.90',  fornecedor: 'Mercado Central',  nf: 'V-0011', data: '2026-04-05', observacoes: '' },
  { codigo: 1018, produto: 'Água Sanitária 1L',              quantidade: 6,  preco: '3.60',  fornecedor: 'Limpeza Total',    nf: 'V-0012', data: '2026-04-12', observacoes: '' },
  { codigo: 1019, produto: 'Sabão em Pó 1kg',                quantidade: 4,  preco: '12.90', fornecedor: 'Limpeza Total',    nf: 'V-0013', data: '2026-04-18', observacoes: '' },
  { codigo: 1020, produto: 'Margarina 500g',                 quantidade: 5,  preco: '6.20',  fornecedor: 'Laticínios Minas', nf: 'V-0014', data: '2026-04-25', observacoes: '' },
  { codigo: 1021, produto: 'Refrigerante Cola 2L',           quantidade: 12, preco: '7.90',  fornecedor: 'Mercado Central',  nf: 'V-0015', data: '2026-05-06', observacoes: '' },
  { codigo: 1022, produto: 'Suco de Laranja 1L',             quantidade: 6,  preco: '6.40',  fornecedor: 'Mercado Central',  nf: 'V-0015', data: '2026-05-06', observacoes: '' },
  { codigo: 1023, produto: 'Água Mineral 500ml',             quantidade: 24, preco: '1.80',  fornecedor: 'Mercado Central',  nf: 'V-0015', data: '2026-05-06', observacoes: '' },
  { codigo: 1024, produto: 'Cerveja Lata 350ml',             quantidade: 24, preco: '3.50',  fornecedor: 'Bebidas Geladas',  nf: 'V-0016', data: '2026-05-18', observacoes: '' },
  { codigo: 1025, produto: 'Requeijão Cremoso 200g',         quantidade: 4,  preco: '7.40',  fornecedor: 'Laticínios Minas', nf: 'V-0017', data: '2026-05-25', observacoes: '' },
  { codigo: 1026, produto: 'Amaciante 500ml',                quantidade: 6,  preco: '5.80',  fornecedor: 'Mercado Central',  nf: 'V-0018', data: '2026-06-04', observacoes: '' },
  { codigo: 1027, produto: 'Papel Higiênico 12x 30m',        quantidade: 3,  preco: '14.90', fornecedor: 'Mercado Central',  nf: 'V-0018', data: '2026-06-04', observacoes: '' },
  { codigo: 1028, produto: 'Biscoito Salgado Cream Cracker 200g', quantidade: 5, preco: '4.10', fornecedor: 'Padaria Pão Quente', nf: 'V-0019', data: '2026-06-10', observacoes: '' },
  { codigo: 1029, produto: 'Leite Condensado 395g',          quantidade: 4,  preco: '6.90',  fornecedor: 'Padaria Pão Quente', nf: 'V-0019', data: '2026-06-10', observacoes: '' },
  { codigo: 1030, produto: 'Milho de Pipoca 500g',           quantidade: 8,  preco: '4.70',  fornecedor: 'Cereal Distribuidora', nf: 'V-0020', data: '2026-06-14', observacoes: '' },
];

const DB_PRODUTOS_VERSAO = '2';
const DB_SAIDAS_VERSAO   = '2';

function inicializarDadosRelatorios() {
  let mudou = false;

  if (localStorage.getItem('db_produtos_versao') !== DB_PRODUTOS_VERSAO) {
    localStorage.setItem('db_produtos', JSON.stringify({ produtos: SEED_PRODUTOS }));
    localStorage.setItem('db_produtos_versao', DB_PRODUTOS_VERSAO);
    mudou = true;
  }
  if (localStorage.getItem('db_saidas_versao') !== DB_SAIDAS_VERSAO) {
    localStorage.setItem('db_saidas', JSON.stringify({ saidas: SEED_SAIDAS }));
    localStorage.setItem('db_saidas_versao', DB_SAIDAS_VERSAO);
    mudou = true;
  }
}

/* ── Leitura / Filtro / Renderização ── */

function carregarMovimentacoes() {

  const lista = [];

  const dbProdutos = JSON.parse(
    localStorage.getItem('db_produtos')
  ) || { produtos: [] };

  dbProdutos.produtos.forEach(function (p) {
    lista.push({
      data:       p.data        || '',
      produto:    p.nome        || '-',
      tipo:       'entrada',
      qtd:        Number(p.quantidade) || 0,
      preco:      Number(p.preco)      || 0,
      fornecedor: p.fornecedor  || '-',
      notaFiscal: p.notaFiscal  || '-'
    });
  });

  // Atenção: o campo do produto na saída é "produto" (não "nome")
  const dbSaidas = JSON.parse(
    localStorage.getItem('db_saidas')
  ) || { saidas: [] };

  dbSaidas.saidas.forEach(function (s) {
    lista.push({
      data:       s.data        || '',
      produto:    s.produto     || '-',
      tipo:       'saida',
      qtd:        Number(s.quantidade) || 0,
      preco:      Number(s.preco)      || 0,
      fornecedor: s.fornecedor  || '-',
      notaFiscal: s.nf          || '-'
    });
  });

  return lista;
}

function filtrar(lista) {

  const periodo = document.getElementById('filtroPeriodo').value;
  const tipo    = document.getElementById('filtroTipo').value;
  const hoje    = new Date();
  hoje.setHours(23, 59, 59, 999);

  return lista.filter(function (mov) {

    if (periodo !== 'todos' && mov.data) {
      const dataMov   = new Date(mov.data + 'T00:00:00');
      const diasAtras = (hoje - dataMov) / (1000 * 60 * 60 * 24);
      if (diasAtras > Number(periodo)) return false;
    }

    if (tipo !== 'todos' && mov.tipo !== tipo) return false;

    return true;
  });
}

function formatarData(iso) {
  if (!iso) return '-';
  const p = iso.split('-');
  if (p.length < 3) return iso;
  return p[2] + '/' + p[1] + '/' + p[0];
}

function formatarMoeda(v) {
  return Number(v).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function renderizarCards(filtradas) {

  const entradas = filtradas.filter(m => m.tipo === 'entrada');
  const saidas   = filtradas.filter(m => m.tipo === 'saida');

  const totalQtdEntrada = entradas.reduce((s, m) => s + m.qtd, 0);
  const totalQtdSaida   = saidas.reduce((s, m) => s + m.qtd, 0);
  const valorTotal      = filtradas.reduce((s, m) => s + (m.qtd * m.preco), 0);
  const prodDistintos   = new Set(filtradas.map(m => m.produto)).size;

  document.getElementById('resumoEntradas').textContent = totalQtdEntrada;
  document.getElementById('resumoSaidas').textContent   = totalQtdSaida;
  document.getElementById('resumoValor').textContent    = formatarMoeda(valorTotal);
  document.getElementById('resumoProdutos').textContent = prodDistintos;
}

function renderizarTabela(filtradas) {

  const tbody = document.getElementById('corpoTabela');

  if (filtradas.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="td-vazio">
          Nenhuma movimentação encontrada.<br>
          Cadastre produtos em "Produtos" ou registre saídas em "Saídas".
        </td>
      </tr>`;
    return;
  }

  const ordenado = [...filtradas].sort(function (a, b) {
    if (!a.data && !b.data) return 0;
    if (!a.data) return 1;
    if (!b.data) return -1;
    return b.data.localeCompare(a.data);
  });

  tbody.innerHTML = ordenado.map(function (mov) {

    const total       = mov.qtd * mov.preco;
    const badgeClass  = mov.tipo === 'entrada' ? 'badge-entrada' : 'badge-saida';
    const tipoTexto   = mov.tipo === 'entrada' ? 'Entrada' : 'Saída';

    return `
      <tr>
        <td class="td-cinza">${formatarData(mov.data)}</td>
        <td><strong>${mov.produto}</strong></td>
        <td><span class="badge ${badgeClass}">${tipoTexto}</span></td>
        <td>${mov.qtd}</td>
        <td>${formatarMoeda(mov.preco)}</td>
        <td class="td-cinza">${mov.fornecedor}</td>
        <td class="td-cinza">${mov.notaFiscal}</td>
        <td class="td-total">${formatarMoeda(total)}</td>
      </tr>`;
  }).join('');
}

function renderizarGrafico(todas) {

  const meses    = ['Jan','Fev','Mar','Abr','Mai','Jun',
                    'Jul','Ago','Set','Out','Nov','Dez'];
  const anoAtual = new Date().getFullYear();
  const entrada  = new Array(12).fill(0);
  const saida    = new Array(12).fill(0);

  todas.forEach(function (mov) {
    if (!mov.data) return;
    const d = new Date(mov.data + 'T00:00:00');
    if (d.getFullYear() !== anoAtual) return;
    const mes = d.getMonth();
    const val = mov.qtd * mov.preco;
    if (mov.tipo === 'entrada') entrada[mes] += val;
    else                        saida[mes]   += val;
  });

  if (grafico) grafico.destroy();

  const ctx = document.getElementById('grafico').getContext('2d');

  grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: meses,
      datasets: [
        {
          label: 'Entrada',
          data: entrada,
          backgroundColor: '#7b98bb',
          borderRadius: 5,
          borderSkipped: false
        },
        {
          label: 'Saída',
          data: saida,
          backgroundColor: '#f5a855',
          borderRadius: 5,
          borderSkipped: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top', align: 'end' },
        tooltip: {
          callbacks: {
            label: function (ctx) {
              return ' ' + ctx.dataset.label + ': ' +
                formatarMoeda(ctx.parsed.y);
            }
          }
        }
      },
      scales: {
        x: { grid: { display: false } },
        y: {
          grid: { color: '#f0f2f5' },
          ticks: {
            callback: function (v) {
              return 'R$ ' + Number(v).toLocaleString('pt-BR');
            }
          }
        }
      }
    }
  });
}

function aplicarFiltros() {

  const todas     = carregarMovimentacoes();
  const filtradas = filtrar(todas);

  renderizarCards(filtradas);
  renderizarTabela(filtradas);
  renderizarGrafico(todas);
}

function exportarCSV() {

  const filtradas = filtrar(carregarMovimentacoes());
  const cab  = ['Data','Produto','Tipo','Qtd',
                 'Preco Unit.','Fornecedor','Nota Fiscal','Total'];

  const rows = filtradas.map(function (m) {
    return [
      m.data,
      m.produto,
      m.tipo === 'entrada' ? 'Entrada' : 'Saida',
      m.qtd,
      m.preco.toFixed(2).replace('.', ','),
      m.fornecedor,
      m.notaFiscal,
      (m.qtd * m.preco).toFixed(2).replace('.', ',')
    ].join(';');
  });

  const blob = new Blob(
    ['\uFEFF' + [cab.join(';'), ...rows].join('\n')],
    { type: 'text/csv;charset=utf-8;' }
  );

  const link = document.createElement('a');
  link.href     = URL.createObjectURL(blob);
  link.download = 'relatorio_estoque.csv';
  link.click();
}

document.addEventListener('DOMContentLoaded', function () {

  // Garante que há dados no localStorage antes de renderizar
  inicializarDadosRelatorios();

  document.getElementById('btnFiltrar')
    .addEventListener('click', aplicarFiltros);

  document.getElementById('btnExportar')
    .addEventListener('click', exportarCSV);

  aplicarFiltros();
});

let grafico = null;

/* ── Inicialização mínima: só garante que as chaves existem ── */

function inicializarDadosRelatorios() {
  if (!localStorage.getItem('db_produtos')) {
    localStorage.setItem('db_produtos', JSON.stringify({ produtos: [] }));
  }
  if (!localStorage.getItem('db_saidas')) {
    localStorage.setItem('db_saidas', JSON.stringify({ saidas: [] }));
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

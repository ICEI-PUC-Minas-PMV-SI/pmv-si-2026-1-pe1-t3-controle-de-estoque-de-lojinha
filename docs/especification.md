# Especificações do Projeto

## Personas

Perfil 1 Proprietário
Descrição: Responsável por acompanhar o desempenho da loja e analisar relatórios
para apoiar na tomada de decisões
Necessidades: Consultar relatórios e identificar necessidade de reposição

Perfil 2 Administrador
Descrição: Responsável pela administração do sistema e controle de estoque
Necessidades: Cadastrar e atualizar produtos

Perfil 3 Funcionário
Descrição: Responsável pelo registro das movimentações de produtos no sistema
Necessidades: Registrar entrada e saída de produtos e consultar itens disponíveis no
estoque

## Histórias de Usuários

| EU COMO... `QUEM` | QUERO/DESEJO... `O QUE` | PARA... `PORQUE` |
|------------------|------------------------|------------------|
| Proprietário | visualizar relatórios | analisar desempenho da loja |
| Proprietário | observar dados | tomar decisões estratégicas |
| Administrador | cadastrar produtos | organizar o controle do estoque |
| Administrador | atualizar informações dos produtos | manter os dados corretos no sistema |
| Administrador | identificar produtos mais vendidos | planejar melhor a requisição dos produtos |
| Administrador | identificar produtos com baixa saída | evitar prejuízo |
| Administrador | corrigir informações cadastradas | evitar erros |
| Funcionário | registrar entrada de produtos | manter o estoque atualizado |
| Funcionário | registrar saída de produtos | manter o estoque atualizado |
| Funcionário | consultar produtos disponíveis no sistema | verificar a quantidade existente em estoque |



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID    | Descrição                                                                 | Prioridade |
|-------|-------------------------------------------------------------------------|------------|
| RF-01 | O sistema deve permitir cadastro de produtos no estoque                | Alta       |
| RF-02 | O sistema deve permitir registrar entrada de produtos                 | Alta       |
| RF-03 | O sistema deve permitir registrar saída de produtos                  | Alta       |
| RF-04 | O sistema deve permitir a consulta da quantidade disponível de cada produto, buscando por nome, categoria ou código | Alta |
| RF-05 | O sistema deve permitir alterar informações dos produtos             | Alta       |
| RF-06 | O sistema deve permitir o login de usuários para acesso ao sistema conforme seu perfil | Alta |
| RF-07 | O sistema deve permitir o gerenciamento de usuários pelo administrador | Média      |
| RF-08 | O sistema deve permitir cadastro de usuários                         | Média      |
| RF-09 | O sistema deve exibir relatórios de movimentação de entrada e saída de produtos | Média |
| RF-10 | O sistema deve alertar quando a quantidade de um produto estiver abaixo do nível mínimo definido | Baixa |
| RF-11 | O sistema deve ter uma calculadora                                   | Baixa      |
| RF-12 | O sistema pode acrescentar descontos                                 | Baixa      |
| RF-13 | O sistema deve exibir o horário de funcionamento da loja             | Baixa      |

### Requisitos não Funcionais

| ID     | Descrição                                                                 | Prioridade |
|--------|-------------------------------------------------------------------------|------------|
| RNF-01 | O sistema deve ser acessível por meio de todos os navegadores web      | Alta       |
| RNF-02 | O sistema deve garantir a integridade dos dados de estoque, evitando inconsistências durante operações de entrada e saída | Alta |
| RNF-03 | O sistema deve ser leve e otimizado, com respostas rápidas            | Alta       |
| RNF-04 | O sistema deve garantir a segurança dos dados dos usuários, utilizando criptografia no armazenamento de senhas | Alta |
| RNF-05 | O sistema deve ser intuitivo e funcional, possibilitando fácil compreensão e usabilidade | Média      |
| RNF-06 | A interface do sistema deve ser amigável, com espaçamento adequado, bordas arredondadas e identidade visual moderna | Média |
| RNF-07 | O sistema deve ser responsivo, adaptando-se a desktop, tablet e smartphone | Baixa      |
| RNF-08 | O sistema deve apresentar textos claros, objetivos e padronizados     | Baixa      |

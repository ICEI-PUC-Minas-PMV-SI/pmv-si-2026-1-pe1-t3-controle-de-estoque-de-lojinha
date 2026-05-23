# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve permitir cadastro de produtos no estoque | Maria | cadastrop.html |
|RF-002| O sistema deve permitir registrar entrada de produtos | Ana Paula | cadastro-noticia.html x |
|RF-003| O sistema deve permitir registrar saída de produtos | Ana Paula | cadastro-noticia.html x |
|RF-004| O sistema deve permitir a consulta da quantidade disponível de cada produto, buscando por nome, categoria ou código | Ana Paula | cadastro-noticia.html x |
|RF-005| O sistema deve permitir alterar informações dos produtos | Gabriel Lana | cadastrop.html |
|RF-006| O sistema deve permitir o login de usuários para acesso ao sistema conforme seu perfil | Gabriel Lana | login.html |
|RF-007| O sistema deve permitir o gerenciamento de usuários pelo administrador | Samuel | usuarios.html |
|RF-008| O sistema deve permitir cadastro de usuários | Gabriel Yuri | cadastro.html |
|RF-009| O sistema deve exibir relatórios de movimentação de entrada e saída de produtos | Ana Paula | cadastro-noticia.html x |
|RF-010| O sistema deve alertar quando a quantidade de um produto estiver abaixo do nível mínimo definido | Ana Paula | cadastro-noticia.html x |
|RF-011| O sistema deve ter uma calculadora | Ana Paula | cadastro-noticia.html x |
|RF-012| O sistema pode acrescentar descontos | Ana Paula | cadastro-noticia.html x |
|RF-013| O sistema deve exibir o horário de funcionamento da loja | Ana Paula | cadastro-noticia.html x |



## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |


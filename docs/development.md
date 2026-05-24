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
|RF-001| O sistema deve permitir cadastro de produtos no estoque | Maria/Gabriel Lana | cadastrop.html, cadastrop.js, produtos.html|
|RF-005| O sistema deve permitir alterar informações dos produtos | Gabriel Lana | cadastrop.html, cadastrop.js |
|RF-006| O sistema deve permitir o login de usuários para acesso ao sistema conforme seu perfil | Gabriel Lana/Gabriel Yuri | login.html, login.js |
|RF-007| O sistema deve permitir o gerenciamento de usuários pelo administrador | Samuel | usuarios.html e js |
|RF-008| O sistema deve permitir cadastro de usuários | Gabriel Yuri/Samuel | cadastro.html, cadastro.js |


## Descrição das estruturas:

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | UUID (Texto)      | Identificador único do usuário            | a1b2c3d4-e5f6-4g7h-8i9j-0k1l2m3n4o5p         |
| Login          | Texto             | Email/login para autenticação             | user@gmail.com                              |
| Senha          | Texto             | Senha para autenticação do usuário        | 123                                            |
| Nome           | Texto             | Nome completo do usuário                  | Usuario Comum                                  |
| Email          | Texto             | Email de contato do usuário               | user@gmail.com                           |
| Grupo          | Texto             | Grupo/Perfil de permissões do usuário     | administradores, gerentes, operadores, visitantes |
| GrupoDePermissões | Texto          | Grupo de permissões do usuário            | administradores                                |
| Status         | Texto             | Status do usuário no sistema              | Ativo, Inativo                                 |
| CriadoEm       | Data/Hora ISO     | Data e hora de criação do usuário         | 2026-05-23T14:30:00.000Z                      |

## Produto
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | UUID (Texto)      | Identificador único do produto            | 3e90b1a4-4e70-45a3-83ce-b803782f7b6f         |
| Nome           | Texto             | Nome/descrição do produto                 | banana                                         |
| Quantidade     | Número (Inteiro)  | Quantidade disponível em estoque          | 20                                             |
| Preço          | Número (Decimal)  | Preço unitário do produto                 | 20                                             |
| Fornecedor     | Texto             | Nome do fornecedor do produto             | samuel                                         |
| NotaFiscal     | Texto             | Número da nota fiscal de entrada          | 1234                                           |
| Data           | Data              | Data da entrada/última movimentação       | 0003-12-25                                     |
| Observações    | Texto             | Observações adicionais sobre o produto    | cadastro                                       |


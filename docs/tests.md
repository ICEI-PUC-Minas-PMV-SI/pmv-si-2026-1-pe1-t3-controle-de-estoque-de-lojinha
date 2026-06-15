# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Login de usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o sistema pelo endereço da aplicação <br> 2) Informe um e-mail e senha válidos cadastrados no sistema <br> 3) Clique no botão "Entrar"
**Requisitos associados** | RF-06
**Resultado esperado** | Usuário autenticado e redirecionado para a tela principal conforme seu perfil
**Dados de entrada** | E-mail e senha válidos de um usuário cadastrado
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Cadastro de usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de cadastro de usuários <br> 2) Preencha todos os campos obrigatórios (nome, e-mail, senha, perfil) <br> 3) Clique no botão "Cadastrar"
**Requisitos associados** | RF-08
**Resultado esperado** | Novo usuário criado e disponível no sistema
**Dados de entrada** | Dados válidos de um novo usuário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Cadastro de produto**
 :--------------: | ------------
**Procedimento**  | 1) Faça login como Administrador <br> 2) Acesse a página de cadastro de produtos <br> 3) Preencha os campos: nome, quantidade, preço, fornecedor, nota fiscal e data <br> 4) Clique em "Salvar"
**Requisitos associados** | RF-01
**Resultado esperado** | Produto cadastrado e exibido na listagem de produtos
**Dados de entrada** | Dados válidos de um novo produto
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Edição de produto**
 :--------------: | ------------
**Procedimento**  | 1) Faça login como Administrador <br> 2) Acesse a listagem de produtos <br> 3) Selecione um produto existente e clique em "Editar" <br> 4) Altere as informações desejadas <br> 5) Clique em "Salvar"
**Requisitos associados** | RF-05
**Resultado esperado** | Informações do produto atualizadas corretamente no sistema
**Dados de entrada** | Novos dados válidos para o produto selecionado
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Registro de entrada de produtos**
 :--------------: | ------------
**Procedimento**  | 1) Faça login como Funcionário ou Administrador <br> 2) Acesse a funcionalidade de entrada de produtos <br> 3) Selecione o produto e informe a quantidade a ser adicionada <br> 4) Confirme a operação
**Requisitos associados** | RF-02
**Resultado esperado** | Quantidade do produto incrementada corretamente no estoque
**Dados de entrada** | Produto existente e quantidade válida
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Registro de saída de produtos**
 :--------------: | ------------
**Procedimento**  | 1) Faça login como Funcionário ou Administrador <br> 2) Acesse a funcionalidade de saída de produtos <br> 3) Selecione o produto e informe a quantidade a ser retirada <br> 4) Confirme a operação
**Requisitos associados** | RF-03
**Resultado esperado** | Quantidade do produto decrementada corretamente no estoque
**Dados de entrada** | Produto existente com estoque suficiente e quantidade válida
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Consulta de produto**
 :--------------: | ------------
**Procedimento**  | 1) Faça login no sistema <br> 2) Acesse a listagem de produtos <br> 3) Utilize o campo de busca para pesquisar por nome, categoria ou código
**Requisitos associados** | RF-04
**Resultado esperado** | Sistema exibe os produtos correspondentes ao termo pesquisado
**Dados de entrada** | Nome, categoria ou código de um produto cadastrado
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Gerenciamento de usuários**
 :--------------: | ------------
**Procedimento**  | 1) Faça login como Administrador <br> 2) Acesse a página de gerenciamento de usuários <br> 3) Visualize, edite ou altere o status de um usuário existente
**Requisitos associados** | RF-07
**Resultado esperado** | Alterações aplicadas e refletidas na listagem de usuários
**Dados de entrada** | Dados atualizados de um usuário existente
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

|*Caso de Teste*                                 |*CT01 - Login de usuário*                                         |
|---|---|
|Requisito Associado | RF-06 - O sistema deve permitir o login de usuários para acesso ao sistema conforme seu perfil|
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1ael638Tw_PjIzGg9Ecs-myAEdocY3Rfz?usp=sharing

|*Caso de Teste*                                 |*CT02 - Cadastro de usuário*                                         |
|---|---|
|Requisito Associado | RF-08 - O sistema deve permitir o cadastro de novos usuários|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1OwvYNBx4M7FkthkM6cc2-kNowwAUvngo/view?usp=drive_link|

|*Caso de Teste*                                 |*CT03 - Cadastro de produto*                                         |
|---|---|
|Requisito Associado | RF-01 - O sistema deve permitir o cadastro de produtos no estoque|
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1rRgmm3es5oRHpVmYxDIUcoYCQo1akg79?usp=sharing

|*Caso de Teste*                                 |*CT04 - Edição de produto*                                         |
|---|---|
|Requisito Associado | RF-05 - O sistema deve permitir alterar informações dos produtos cadastrados|
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1rRgmm3es5oRHpVmYxDIUcoYCQo1akg79?usp=sharing

|*Caso de Teste*                                 |*CT05 - Registro de entrada de produtos*                                         |
|---|---|
|Requisito Associado | RF-02 - O sistema deve permitir registrar a entrada de produtos no estoque|
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1rRgmm3es5oRHpVmYxDIUcoYCQo1akg79?usp=sharing

|*Caso de Teste*                                 |*CT06 - Registro de saída de produtos*                                         |
|---|---|
|Requisito Associado | RF-03 - O sistema deve permitir registrar a saída de produtos do estoque|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1o3iDk7uxY3CyWyc4LGaFkTo2u-XcdvxJ/view?usp=drive_link

|*Caso de Teste*                                 |*CT07 - Consulta de produto*                                         |
|---|---|
|Requisito Associado | RF-04 - O sistema deve permitir a consulta da quantidade disponível de cada produto, buscando por nome, categoria ou código|
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1rRgmm3es5oRHpVmYxDIUcoYCQo1akg79?usp=sharing

|*Caso de Teste*                                 |*CT08 - Gerenciamento de usuários*                                         |
|---|---|
|Requisito Associado | RF-07 - O sistema deve permitir o gerenciamento de usuários pelo administrador|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1OwvYNBx4M7FkthkM6cc2-kNowwAUvngo/view?usp=drive_link

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.




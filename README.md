<p align="center">
    <img src="/src/assets/nutricampus-logo.png" align="center" width="30%">
</p>
<!-- <p align="center"><h1 align="center"></h1></p> -->
<p align="center">
    <em>Um App de Nutrição Para Restaurantes Universitários!</em>
</p>
<p align="center">
    <!-- local repository, no metadata badges. --></p>
<p align="center">Tecnologias e Ferramentas:</p>
<p align="center">
    <img src="https://img.shields.io/badge/Python-3776AB.svg?style=default&logo=Python&logoColor=white" alt="Python">
    <img src="https://img.shields.io/badge/Angular-DD0031.svg?style=default&logo=Angular&logoColor=white" alt="Angular">
    <img src="https://img.shields.io/badge/FastAPI-009688.svg?style=default&logo=FastAPI&logoColor=white" alt="FastAPI">
    <img src="https://img.shields.io/badge/NumPy-013243.svg?style=default&logo=NumPy&logoColor=white" alt="NumPy">
        <img src="https://img.shields.io/badge/SQLAlchemy-D71F00.svg?style=default&logo=SQLAlchemy&logoColor=white" alt="SQLAlchemy">
    <img src="https://img.shields.io/badge/Docker-2496ED.svg?style=default&logo=Docker&logoColor=white" alt="Docker">
    <img src="https://img.shields.io/badge/pandas-150458.svg?style=default&logo=pandas&logoColor=white" alt="pandas">
    <img src="https://img.shields.io/badge/Pydantic-E92063.svg?style=default&logo=Pydantic&logoColor=white" alt="Pydantic">
    <img src="https://img.shields.io/badge/Jinja-B41717.svg?style=default&logo=Jinja&logoColor=white" alt="Jinja">
</p>
<br>

<details close>
<summary><span style="font-size: 1.5em; font-weight: bold;">Sumário</span></summary>

- [Visão Geral](#visao-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Frontend e Backend](#estrutura-do-frontend-e-backend)
  - [Detalhes do Backend](#detalhes-do-backend)
- [Começando](#comecando)
  - [Pré-requisitos](#pre-requisitos)
  - [Instalação](#instalacao)
  - [Uso](#uso)
  - [Testes](#testes)
- [Contribuições](#contribuicoes)

</details>

## Visão Geral

### Objetivo do Projeto

O **Admin NutriCampus** é uma plataforma desenvolvida especialmente para a comunidade da **Universidade Federal de Uberlândia (UFU)**, com foco nos usuários dos Restaurantes Universitários (R.U.s). Seu objetivo é ajudar estudantes, professores e funcionários a gerenciarem de forma prática e eficiente sua alimentação e os nutrientes consumidos no dia a dia na faculdade.

<p align="center">
    <img src="/src/assets/banner-nutricampus.png" align="center">
</p>

### Principais Funcionalidades

- **Gestão de Dados**: Agregação de dados de consumo de múltiplas tabelas, permitindo aos usuários rastrear sua ingestão diária e visualizar informações nutricionais detalhadas.
- **Planejamento de Refeições**: Criação, atualização e exclusão de planos de refeições, incluindo ingredientes associados e informações nutricionais.
- **Autenticação de Usuários**: Autenticação e autorização seguras, garantindo que apenas usuários autorizados tenham acesso a dados sensíveis.
- **Análise de Dados**: Recursos avançados de análise para fornecer insights sobre hábitos alimentares e apoiar decisões informadas.

---

**Benefícios**

Ao oferecer uma plataforma centralizada para gerenciar dados nutricionais, nosso projeto proporciona inúmeros benefícios, incluindo:

- Melhoria nos resultados de saúde e bem-estar
- Capacidades aprimoradas de rastreamento e análise alimentar
- Maior eficiência no planejamento e preparação de refeições
- Melhor tomada de decisões relacionadas à escolha alimentar

**Visão Técnica Geral**

Nossa plataforma foi desenvolvida utilizando uma combinação de Python, FastAPI e vários bancos de dados para garantir escalabilidade e desempenho. O projeto é composto por vários serviços, incluindo:

- **Alimento Service**: Recupera dados de Alimento do banco de dados.
- **Auth Service**: Verifica as credenciais do usuário e gera JSON Web Tokens (JWTs) seguros.
- **Cardapio Service**: Fornece uma interface unificada para interação com o banco de dados de cardápios.
- **Consumo Service**: Agrega dados de consumo de múltiplas tabelas.
- **Prato Service**: Gerencia pratos (meals) na plataforma, incluindo operações CRUD.
- **Refeicao Service**.

---

> [!NOTE]
> O aplicativo está organizado em três repositórios principais:
>
> - **Frontend (User)**: Interface do usuário que os clientes finais utilizam.  
>   https://github.com/Gabriell-Braga/NutriCampus_front-end
> - **Backend**: Gerencia a lógica do servidor e a integração com o banco de dados.  
>   https://github.com/guigutox/NutriCampus_back-end
> - **Admin Panel**: Painel de administração para gerenciar o sistema.  
>   https://github.com/dev-jonathan/admin-nutricampus

## Funcionalidades

|     |     Funcionalidade      | Resumo                                                                                                                                                                                                             |
| :-- | :---------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  |     **Arquitetura**     | <ul><li>Arquitetura monolítica com múltiplos serviços</li><li>Arquitetura orientada a serviços (SOA) para escalabilidade e manutenção</li><li>Uso do Docker como plataforma principal de containerização</li></ul> |
| 🔩  | **Qualidade do Código** | <ul><li>Adere aos padrões de codificação PEP 8</li><li>Usa type hints e docstrings para maior legibilidade e documentação do código</li><li>Inclui testes automatizados utilizando pytest e coverage.py</li></ul>  |
| 📄  |    **Documentação**     | <ul><li>Principal linguagem: Python</li><li>Gerenciador de pacotes: pip</li><li>Inclui Dockerfile para containerização e comandos de instalação</li></ul>                                                          |
| 🔌  |     **Integrações**     | <ul><li>Integrações com bibliotecas como SQLAlchemy, pandas e FastAPI</li><li>APIs para processamento de dados como cardapios.json</li></ul>                                                                       |
| 🧩  |    **Modularidade**     | <ul><li>Serviços independentes e fracamente acoplados</li><li>Uso de injeção de dependências para melhor modularidade</li><li>Validação de dados e gestão de esquemas com Pydantic</li></ul>                       |
| 🧪  |       **Testes**        | <ul><li>Testes automatizados usando pytest</li><li>Testes de unidade, integração e ponta a ponta</li></ul>                                                                                                         |
| ⚡️ |     **Performance**     | <ul><li>Otimizado com algoritmos eficientes e cache</li><li>Programação assíncrona para execução concorrente</li></ul>                                                                                             |
| 🛡️  |      **Segurança**      | <ul><li>Práticas recomendadas de segurança, como criptografia HTTPS</li><li>Bibliotecas seguras para autenticação e autorização, como PyJWT</li></ul>                                                              |
| 📦  |    **Dependências**     | <ul><li>Gerenciamento eficiente com pip e Docker</li></ul>                                                                                                                                                         |

---

## Estrutura do Frontend e Backend

```sh
└── NutriCampus_back-end/
    ├── cardapios.json
    ├── classes.py
    ├── database.py
    ├── Dockerfile
    ├── LICENSE
    ├── main.py
    ├── model
    │   ├── alimento.py
    │   ├── Cardapio.py
    │   ├── pydantic
    │   ├── refeicao.py
    │   └── usuario.py
    ├── README.md
    ├── requirements.txt
    ├── routers
    │   ├── alimento_route.py
    │   ├── cardapio_route.py
    │   ├── prato_route.py
    │   ├── refeicao_route.py
    │   └── usuario_route.py
    ├── scraping
    │   ├── Cardapio
    │   ├── ingredientes
    │   ├── receitas
    │   ├── TACO
    │   └── timer.py
    ├── scriptsTest
    │   ├── chromedriver.exe
    │   ├── geminiTest.py
    │   └── ollamaTest.py
    └── services
        ├── alimento_service.py
        ├── auth_service.py
        ├── cardapio_service.py
        ├── consumo_service.py
        ├── prato_service.py
        ├── refeicao_service.py
        └── usuario_service.py
```

```sh
└── admin-nutricampus/
    ├── .github
    │   └── workflows
    ├── angular.json
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── src
    │   ├── app
    │   ├── assets
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.css
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json
```

### Detalhes do Backend

<details open>
    <summary><b><code>NUTRICAMPUS_BACK-END/</code></b></summary>
    <details>
        <summary><b>__root__</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='./NutriCampus_back-end/blob/master/cardapios.json'>cardapios.json</a></b></td>
                <td>- **Resumo**

O arquivo `cardapios.json` serve como um arquivo de configuração essencial para toda a arquitetura da base de código, especificamente no contexto de um sistema de gestão de restaurantes.<br>- Este arquivo JSON fornece uma visão abrangente das ofertas de menu diárias para cada dia da semana, incluindo café da manhã, almoço, jantar e opções adicionais.

Em essência, este arquivo alcança os seguintes objetivos:

- Define os planos de refeições para cada dia da semana.
- Especifica os pratos disponíveis em cada categoria (por exemplo, pratos principais, vegetais, arroz, feijão e acompanhamentos).
- Oferece um formato estruturado para fácil acesso e modificação.

Utilizando este arquivo JSON, a base de código pode gerenciar eficientemente o planejamento de menus, o rastreamento de inventário e os processos de pedido, melhorando a experiência geral do usuário.</td>

</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/classes.py'>classes.py</a></b></td>
<td>- Arquitetura o modelo de dados central do projeto definindo uma classe `Mensagem` que encapsula metadados de mensagens.<br>- A classe utiliza o `BaseModel` do Pydantic para estabelecer um formato estruturado para mensagens, garantindo consistência e validação em toda a aplicação.<br>- Este componente fundamental estabelece a base para o desenvolvimento subsequente, possibilitando troca e manipulação eficiente de dados dentro da base de código.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/database.py'>database.py</a></b></td>
<td>- Estabelece uma conexão com o banco de dados PostgreSQL carregando variáveis de ambiente e criando uma instância de engine.<br>- Fornece um "session maker" e uma classe base para operações ORM, permitindo acesso e manipulação de dados na aplicação.<br>- Facilita interações seguras e eficientes com o banco de dados, servindo como um componente crucial na arquitetura geral da base de código.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/Dockerfile'>Dockerfile</a></b></td>
<td>- O Dockerfile serve como base para construir um ambiente containerizado para o projeto.<br>- Ele alcança o objetivo de criar um pacote autônomo que inclui todas as dependências e código da aplicação, permitindo um deployment e gerenciamento eficientes da aplicação FastAPI.<br>- A imagem Docker resultante permite escalabilidade e distribuição contínuas em diversos ambientes.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/main.py'>main.py</a></b></td>
<td>- Lança o servidor principal da aplicação, ativando endpoints de API para gestão de usuários, planejamento de refeições e coleta de dados nutricionais.<br>- O arquivo configura uma instância FastAPI com middleware CORS, conexão com o banco de dados e inclusão de rotas de vários módulos.<br>- Ele também inicializa um timer para agendar tarefas de scraping, garantindo a atualização e precisão dos dados na funcionalidade principal do projeto.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/requirements.txt'>requirements.txt</a></b></td>
<td>- O arquivo de dependências serve como base para a arquitetura do projeto, definindo as dependências necessárias para executar a aplicação.<br>- Ele garante que todas as bibliotecas e ferramentas necessárias sejam instaladas e estejam atualizadas, proporcionando um ambiente consistente em todas as fases de desenvolvimento, teste e deployment.<br>- O conteúdo do arquivo descreve o stack técnico do projeto, especificando as versões de cada dependência.</td>
</tr>
</table>
</blockquote>
</details>
<details> <!-- model Submodule -->
<summary><b>model</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/model\alimento.py'>alimento.py</a></b></td>
<td>- O Model Alimento é a entidade principal do banco de dados, representando um item alimentar com várias propriedades nutricionais e relações com outras tabelas.<br>- Ele agrega dados sobre macronutrientes, micronutrientes e ácidos graxos, servindo como base para análises e relatórios no projeto.<br>- O modelo permite armazenamento e consultas eficientes de informações nutricionais, suportando insights baseados em dados e processos de tomada de decisão.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/model\Cardapio.py'>Cardapio.py</a></b></td>
<td>- Documenta a criação de um modelo de banco de dados que define a estrutura da tabela "cardapios", que provavelmente armazena informações sobre itens de menu no campus.<br>- O código estabelece relações entre vários atributos, como nome do campus, data e componentes das refeições.<br>- Ele possibilita o armazenamento e a recuperação de dados para o sistema de gestão de inventário de alimentos do projeto.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/model\refeicao.py'>refeicao.py</a></b></td>
<td>- O Model Refeicao é a entidade principal que define a estrutura de dados de uma refeição, estabelecendo relações com outras tabelas como Usuario, Prato, Consumo e Ingrediente.<br>- Ele captura informações essenciais sobre refeições, incluindo data, tipo e associação de usuários.<br>- O modelo possibilita a troca de dados entre essas entidades, facilitando um banco de dados abrangente para gerenciamento de dados relacionados a refeições.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/model\usuario.py'>usuario.py</a></b></td>
<td>- Documentar a estrutura do modelo é crucial para a arquitetura geral da base de código.<br>- O arquivo `usuario.py` define uma tabela de banco de dados para usuários, estabelecendo relações entre atributos como nome, email e características físicas como peso e altura.<br>- Ao impor restrições nesses campos, a integridade dos dados é garantida, permitindo uma gestão precisa de usuários dentro do sistema.</td>
</tr>
</table>
<details>
<summary><b>pydantic</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/model\pydantic\auth_dto.py'>auth_dto.py</a></b></td>
<td>- Arquitetura os objetos de transferência de dados de autenticação (DTOs) do projeto, definindo estruturas para armazenar credenciais de usuário e payloads de JSON Web Token (JWT).<br>- O código estabelece a base para fluxos de autenticação seguros, permitindo a troca de informações sensíveis entre clientes e servidores.<br>- Ele suporta o uso de tokens JWT com atributos opcionais no payload, facilitando uma lógica de autenticação flexível dentro da base de código mais ampla.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/model\pydantic\refeicao_dto.py'>refeicao_dto.py</a></b></td>
<td>- Refina as estruturas de dados do projeto definindo objetos de transferência de dados reutilizáveis (DTOs) para refeição e consumo.<br>- Alcança uma abordagem padronizada para modelagem de dados complexos, permitindo uma integração mais fácil com outros componentes e reduzindo inconsistências nos dados.<br>- Suporta escalabilidade e manutenção na arquitetura geral da base de código.</td>
</tr>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/model\pydantic\usuario_dto.py'>usuario_dto.py</a></b></td>
<td>- Documentar a estrutura do projeto revela que o arquivo `usuario_dto.py` desempenha um papel crucial na definição do objeto de transferência de dados (DTO) para informações de usuário.<br>- Ele alcança o propósito de padronizar e validar os dados do usuário, garantindo consistência em toda a aplicação.<br>- Ao fornecer uma representação clara e estruturada dos atributos do usuário, este código possibilita a troca eficiente de dados entre diferentes camadas do sistema, melhorando, em última análise, a manutenção e a escalabilidade do projeto.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details> <!-- routers Submodule -->
<summary><b>routers</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/routers\alimento_route.py'>alimento_route.py</a></b></td>
<td>- A criação de rotas é o objetivo principal do arquivo alimento_route.py.<br>- Define endpoints de API para recuperar dados de alimentos por ID e nome, lidando com entradas inválidas e cenários "não encontrado" com exceções HTTP.<br>- O código integra-se com o Alimento_Service para buscar dados de um banco de dados ou outra fonte de dados, garantindo consistência e validação em toda a aplicação.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/routers\cardapio_route.py'>cardapio_route.py</a></b></td>
<td>- Fornece uma interface de API RESTful para gerenciar dados de cardápio, permitindo que os usuários recuperem e filtrem informações por campus, data e refeição.<br>- O roteador lida com várias solicitações HTTP, incluindo operações GET, para buscar dados específicos do banco de dados usando a classe Cardapio_Service.<br>- Ele suporta vários parâmetros de filtragem, permitindo consultas flexíveis aos dados de cardápio.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/routers\prato_route.py'>prato_route.py</a></b></td>
<td>- O principal objetivo do arquivo prato_route.py é definir um conjunto de rotas de API para gerenciar pratos (dishes) e ingredientes.<br>- Ele fornece endpoints para listar, criar, ler, atualizar e excluir pratos e ingredientes, além de mapear ingredientes para pratos específicos.<br>- O código realiza isso utilizando uma classe PratoService que interage com o banco de dados para executar operações CRUD.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/routers\refeicao_route.py'>refeicao_route.py</a></b></td>
<td>- Cria um endpoint de API RESTful para gerenciar refeições (meals) e seus consumos associados.<br>- O roteador lida com operações CRUD para refeições, incluindo a criação de novas, a recuperação de existentes por ID ou data, e a adição de consumos a refeições específicas.<br>- Também fornece controle de acesso baseado em autenticação de usuário.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/routers\usuario_route.py'>usuario_route.py</a></b></td>
<td>- Valida os endpoints de autenticação de usuário.<br>- O arquivo usuario_route.py define um roteador FastAPI que lida com rotas relacionadas à autenticação de usuários, incluindo login (signin) e cadastro (signup).<br>- Ele verifica credenciais de usuário, gera tokens e cria novos usuários enquanto aplica regras de validação nos dados de entrada.<br>- Este código é integral ao mecanismo geral de autenticação do projeto.</td>
</tr>
</table>
</blockquote>
</details>
<details> <!-- scraping Submodule -->
<summary><b>scraping</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/scraping\timer.py'>timer.py</a></b></td>
<td>- Realiza scraping de dados de várias fontes em intervalos programados.<br>- O arquivo timer.py inicia o processo de scraping executando funções de diferentes módulos, como TACOScraping e CardapioScraping.<br>- Ele também configura um agendador para executar esses scrapers em intervalos regulares, utilizando um banco de dados PostgreSQL para armazenamento.</td>
</tr>
</table>
<details>
<summary><b>Cardapio</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/scraping\Cardapio\cardapios.json'>cardapios.json</a></b></td>
<td>- **Resumo**

O arquivo `cardapios.json` é um componente crucial para o armazenamento de dados do projeto, fornecendo uma visão geral das ofertas de menu no campus Monte Carmelo.<br>- Este arquivo JSON serve como um repositório centralizado para os dados de cardápio, permitindo fácil acesso e gestão.

Ao integrar este arquivo na arquitetura da base de código, o projeto alcança vários objetivos principais:

- **Padronização de Dados**: Garante consistência na apresentação dos itens de menu em diferentes plataformas.
- **Atualizações Fáceis de Dados**: Permite atualizações eficientes nos itens de menu sem necessidade de mudanças manuais em toda a aplicação.
- **Melhor Experiência do Usuário**: Oferece uma experiência contínua e precisa ao exibir informações atualizadas sobre o menu.

No geral, o arquivo `cardapios.json` desempenha um papel vital na manutenção da integridade e consistência dos dados dentro da arquitetura do projeto.</td>

</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/scraping\Cardapio\scrapping.py'>scrapping.py</a></b></td>
<td>- **Extração de Dados de Cardápio**

O script extrai dados de cardápio de um website usando as bibliotecas BeautifulSoup e requests.

**Funcionalidades Principais**

1. Extrai dados de cardápio de 5 dias (segunda a sexta) para cada campus.
2. Salva os dados extraídos em formato JSON.
3. Salva os dados no banco de dados utilizando a biblioteca SQLAlchemy.

**Estrutura do Código**

O código está estruturado em várias funções:

- `extrair_cardapios`: extrai os dados de cardápio do site.
- `salvar_json`: salva os dados extraídos em formato JSON.
- `salvar_no_banco`: salva os dados no banco de dados.

**Bibliotecas e Módulos Principais**

- BeautifulSoup
- requests
- SQLAlchemy

Nota: O código completo não é fornecido devido ao seu tamanho.</td>

</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>ingredientes</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/scraping\ingredientes\constants.py'>constants.py</a></b></td>
<td>- Converte quantidades de ingredientes em unidades padronizadas.<br>- O arquivo constants.py fornece um conjunto de conversões, substituições e plurais para uso em todo o projeto, permitindo o processamento e análise de dados de receitas.<br>- Ele suporta vários tipos de unidades, incluindo xícaras, gramas, mililitros e outros, facilitando cálculos e comparações precisas.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus-back-end/blob/master/scraping\ingredientes\main.py'>main.py</a></b></td>
<td>- Realiza scraping de informações de ingredientes de receitas, salvando-os em um banco de dados.<br>- O principal objetivo do arquivo `main.py` é processar dados de receitas pesquisando links, extraindo ingredientes e armazenando-os no banco de dados.<br>- Ele garante que cada receita tenha dados únicos de ingredientes antes de prosseguir com o scraping.<br>- Esse processo ajuda a manter informações de receitas precisas e atualizadas.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus-back-end/blob/master/scraping\ingredientes\processador.py'>processador.py</a></b></td>
<td>- Processa ingredientes extraídos de dados textuais, extraindo componentes relevantes como nome, quantidade, unidade e indicação de sabor.<br>- A função filtra ingredientes opcionais e trata casos especiais como "a gosto" e substituições unidirecionais.<br>- Também normaliza unidades e quantidades de acordo com regras predefinidas, retornando um dicionário com as informações processadas.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus-back-end/blob/master/scraping\ingredientes\scraper.py'>scraper.py</a></b></td>
<td>- Extrai informações de ingredientes de páginas de receitas usando a API DuckDuckGo e parsing com BeautifulSoup.<br>- O script pesquisa por uma receita específica, recupera a página correspondente, extrai nomes de ingredientes, os processa e retorna uma lista de ingredientes processados.<br>- Ele lida com erros e registra eventos importantes durante o processo.<br>- Esta funcionalidade faz parte de um projeto maior que agrega dados de receitas.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus-back-end/blob/master/scraping\ingredientes\utils.py'>utils.py</a></b></td>
<td>- Analisa o arquivo `utils.py`, que desempenha um papel crucial no processamento e conversão de dados dentro da arquitetura do projeto.<br>- Oferece funções para avaliar strings de quantidade, converter quantidades para unidades padrão e singularizar nomes de unidades, facilitando a normalização e consistência dos dados na base de código.<br>- Essas funcionalidades são essenciais para garantir o manuseio de dados preciso e confiável em todo o projeto.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>receitas</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/scraping\receitas\prato.py'>prato.py</a></b></td>
<td>- Preenche a tabela "Prato" verificando e inserindo pratos existentes nos "Cardápios".<br>- O script verifica pratos duplicados e cria novos, se necessário, garantindo a consistência dos dados.<br>- Também atualiza um conjunto de pratos existentes para refletir alterações feitas durante o processo.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>TACO</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/scraping\TACO\modelo_tabelas.py'>modelo_tabelas.py</a></b></td>
<td>- Define a estrutura do modelo de dados do projeto, fornecendo uma estrutura abrangente para organizar informações nutricionais.<br>- O arquivo oferece uma abordagem baseada em enumeração para categorizar e armazenar dados relacionados a nutrientes centesimais, ácidos graxos e aminoácidos.<br>- Estabelece um formato padronizado para armazenar e recuperar esses dados, possibilitando uma gestão eficiente e análise dentro da arquitetura maior da base de código.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/scraping\TACO\script.py'>script.py</a></b></td>
<td>- Extrai dados da tabela TACO usando camelot e preenche um banco de dados com informações nutricionais.<br>- O script baixa o arquivo PDF, extrai tabelas relevantes, processa os dados e os insere no banco de dados.<br>- Também lida com erros e exclui registros existentes antes de inserir novos.<br>- O processo é repetido se nenhum registro existente for encontrado ou se for forçado a executar.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details> <!-- scriptsTest Submodule -->
<summary><b>scriptsTest</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/scriptsTest\geminiTest.py'>geminiTest.py</a></b></td>
<td>- Gera ingredientes para todos os pratos usando a API Gemini.<br>- Este script recupera uma lista de ingredientes com suas respectivas quantidades para cada prato, converte unidades em gramas e os salva no banco de dados.<br>- Ele utiliza o ORM SQLAlchemy para interagir com o banco de dados e a API Gemini para gerar conteúdo.<br>- O script é executado em loop, processando todos os pratos no banco de dados.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/scriptsTest\ollamaTest.py'>ollamaTest.py</a></b></td>
<td>- Extrai ingredientes de receitas de uma página web usando Selenium e o modelo LLM Ollama.<br>- O script pesquisa por um termo específico no DuckDuckGo, faz scraping do conteúdo da página com Selenium, extrai a lista de ingredientes, processa-a com o modelo LLM Ollama para gerar informações estruturadas dos ingredientes e imprime os resultados finais.</td>
</tr>
</table>
</blockquote>
</details>
<details> <!-- services Submodule -->
<summary><b>services</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/services\alimento_service.py'>alimento_service.py</a></b></td>
<td>- Busca dados de Alimento do banco de dados.<br>- A classe Alimento_Service recupera registros de Alimento por ID e nome, incluindo dados relacionados a graxos, aminoácidos e centesimais.<br>- Utiliza o ORM SQLAlchemy para interagir com o banco de dados, empregando um sistema de gerenciamento de sessões para recuperação eficiente de dados.<br>- Este serviço faz parte de um projeto maior que envolve scraping e processamento de dados, provavelmente para análise ou pesquisa nutricional.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/services\auth_service.py'>auth_service.py</a></b></td>
<td>- Verifica a autenticidade das credenciais do usuário e gera JSON Web Tokens (JWTs) seguros.<br>- A classe Auth_Service lida com verificação de senhas, hashing e criação de tokens, utilizando variáveis de ambiente para configuração.<br>- Integra-se com o esquema OAuth2PasswordBearer do FastAPI para autenticar usuários, garantindo controle de acesso seguro e validação de tokens dentro da arquitetura do projeto.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/services\cardapio_service.py'>cardapio_service.py</a></b></td>
<td>- A classe Cardapio_Service fornece uma interface unificada para interagir com o banco de dados de cardápios, permitindo a recuperação eficiente de dados com vários filtros, como campus, data e tipo de refeição.<br>- Ao encapsular operações de banco de dados em uma única classe, a base de código promove modularidade e reutilização, simplificando o acesso aos dados e reduzindo duplicações.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/services\consumo_service.py'>consumo_service.py</a></b></td>
<td>- A classe Consumo_Service agrega dados de consumo em várias tabelas, fornecendo uma visão unificada das informações nutricionais.<br>- Ela recupera e agrupa dados pela composição das refeições, permitindo que os usuários acompanhem sua ingestão diária.<br>- O serviço também lida com operações CRUD, possibilitando a criação de novos registros de consumo.<br>- Ao consolidar dados de várias fontes, facilita consultas eficientes e análises relacionadas à nutrição.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/services\prato_service.py'>prato_service.py</a></b></td>
<td>- A classe PratoService serve como a interface principal para gerenciar pratos (meals) na arquitetura do banco de dados do projeto.<br>- Fornece métodos para operações CRUD, incluindo busca, criação, atualização e exclusão de pratos e seus ingredientes associados.<br>- O serviço atua como um hub central para acesso e manipulação de dados, permitindo uma gestão eficiente de informações relacionadas às refeições em toda a base de código.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/services\refeicao_service.py'>refeicao_service.py</a></b></td>
<td>- Fornece uma interface unificada para gerenciar dados de refeições (refeicao) na aplicação, permitindo que os usuários recuperem, criem e consultem refeições com base em vários critérios, como ID de usuário, intervalo de datas e associações de refeições.<br>- Facilita o acesso e a manipulação de dados por meio de uma API padronizada, promovendo consistência e escalabilidade na arquitetura geral da base de código.</td>
</tr>
<tr>
<td><b><a href='./NutriCampus_back-end/blob/master/services\usuario_service.py'>usuario_service.py</a></b></td>
<td>- Fornece uma interface unificada para gerenciar usuários em toda a aplicação, permitindo operações CRUD (Create, Read, Update, Delete) nos dados de usuário.<br>- Atua como um hub central para funcionalidades relacionadas ao usuário, abstraindo interações com o banco de dados e fornecendo uma maneira padronizada de interagir com o modelo `Usuario`.<br>- Facilita a recuperação e manipulação eficiente de dados, suportando vários casos de uso em toda a arquitetura do projeto.</td>
</tr>
</table>
</blockquote>
</details>

</details>

---

## Começando (Guia de Instalação)

### Instalação Backend

Instale o NutriCampus-back-end com um dos métodos abaixo:

**Compilando a partir do código-fonte**:

1. Clone o repositório backend:

```sh
❯ git clone https://github.com/guigutox/NutriCampus_back-end.git
```

2. Navegue até o diretório:

```sh
❯ cd NutriCampus-back-end
```

3. Instale as dependências:

```sh
❯ pip install -r requirements.txt
```

**Usando Docker**:

```sh
❯ docker build -t /NutriCampus-back-end .
```

### Testes

Execute a suíte de testes:

```sh
❯ pytest
```

### Instalação Admin Panel

Instale o **Admin NutriCampus** com os passos abaixo, utilizando Angular:

**Compilando a partir do código-fonte**:

1. Clone o repositório admin:

```sh
❯ git clone https://github.com/dev-jonathan/admin-nutricampus.git
```

2. Navegue até o diretório:

```sh
❯ cd admin-nutricampus
```

3. Instale as dependências do projeto:

```sh
❯ npm install
```

4. Inicie o servidor de desenvolvimento Angular:

```sh
❯ ng serve
```

5. Acesse a aplicação no navegador:

Abra o navegador e acesse: [http://localhost:4200](http://localhost:4200).

---

## Contribuições

- Este Projeto foi desenvolvido por Jonathan, Carlos, Guilherme e Gabriel.

- Agradecimentos: Caio

---

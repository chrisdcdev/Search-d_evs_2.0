# Untitled

---

# Search-d_evs

O projeto consiste em uma aplicação web que permite aos usuários buscar por perfis de usuários do GitHub e exibir informações detalhadas sobre esses perfis, incluindo dados pessoais e listas de repositórios. A aplicação é desenvolvida como parte de um processo seletivo para um cargo de Front-End Junior.

### **Funcionalidades Principais**

- **Busca de Usuário:** Os usuários podem inserir o nome de um usuário do GitHub na barra de busca e iniciar uma busca.
- **Exibição de Perfil:** Após a busca, a aplicação exibirá informações detalhadas sobre o perfil do usuário, incluindo seu nome, foto de perfil, nome de usuário, bio, seguidores, seguindo, empresa, localização, blog e nome de usuário do Twitter, quando disponíveis.
- **Listagem de Repositórios:** A aplicação exibirá uma lista de repositórios do usuário, ordenados por estrelas em ordem decrescente, ou seja, os repositórios mais marcados com estrelas aparecerão no topo da lista.

### **Tecnologias Utilizadas**

O projeto utiliza as seguintes tecnologias e bibliotecas:

- **React:** A aplicação é construída usando o framework React para criar uma interface de usuário dinâmica e responsiva.
- **API do GitHub:** Para obter informações sobre perfis de usuário e repositórios, a aplicação faz chamadas à API pública do GitHub.
- **Chakra UI:** O Chakra UI é usado para estilizar e criar componentes de interface do usuário de forma consistente e eficiente.
- **axios:** A biblioteca axios é usada para fazer requisições HTTP à API do GitHub, permitindo que a aplicação obtenha dados de perfil e repositórios de usuários.
- **react-router-dom:** O react-router-dom é utilizado para lidar com a navegação e roteamento da aplicação, permitindo a transição entre diferentes páginas ou visualizações.
- **react-query:** O react-query é uma biblioteca utilizada para gerenciar e armazenar em cache os dados obtidos da API, melhorando a eficiência das chamadas de API e fornecendo uma experiência de usuário mais fluida.
- **redux-toolkit:** O redux-toolkit é utilizado para gerenciar o estado global da aplicação, quando necessário, permitindo o compartilhamento de dados entre componentes e facilitando o gerenciamento do estado.
- **react-toastify:** O react-toastify é usado para exibir notificações ou mensagens de feedback para o usuário, como confirmações de ação ou erros, de forma amigável e estilizada.

## Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Instalação

Siga estas etapas para configurar e executar o projeto localmente.

1. Clone o repositório do GitHub:
    
    ```bash
    git clone <https://github.com/michelmartins9164/Search-d_evs.git>
    ```
    
2. Navegue para o diretório do projeto:
    
    ```bash
    cd Search-d_evs
    
    ```
    
3. Instale as dependências usando npm:
    
    ```bash
    npm install
    
    ```
    
    ou, se você estiver usando Yarn:
    
    ```bash
    yarn install
    
    ```
    

## Executando o Ambiente de Desenvolvimento

Para iniciar o servidor de desenvolvimento, use um dos seguintes comandos, dependendo do gerenciador de pacotes que você está usando:

- Com npm:
    
    ```bash
    npm start
    
    ```
    
- Com Yarn:
    
    ```bash
    yarn start
    
    ```
    

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000/) no seu navegador.

## Rodando a Build de Deploy

Para criar uma versão de produção do seu aplicativo, execute o seguinte comando:

- Com npm:
    
    ```bash
    npm run build
    
    ```
    
- Com Yarn:
    
    ```bash
    yarn build
    
    ```
    

Isso criará uma pasta `build` no diretório do projeto com os arquivos otimizados para implantação.

Você também pode conferir o app rodando em [https://search-d-evs.vercel.app/](https://search-d-evs.vercel.app/)

---
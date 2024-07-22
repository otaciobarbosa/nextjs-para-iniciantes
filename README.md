# Next.js para Iniciantes

Bem-vindo ao repositório do projeto **Next.js para Iniciantes**! Este projeto foi criado seguindo um aulão de Next.js para iniciantes do canal [LuizTools](https://www.youtube.com/@LuizTools).

## Descrição

Este projeto é uma aplicação web moderna utilizando o framework Next.js. No vídeo, aprendemos a criar um projeto de frontend com Next.js, incluindo o roteamento entre páginas, carregamento de dados de APIs e outras funcionalidades importantes.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Styled-components](https://styled-components.com/) (para estilização)
- [Markdown](https://daringfireball.net/projects/markdown/) (para conteúdo do blog)

## Estrutura do Projeto

A estrutura do projeto segue a convenção padrão do Next.js:

```
nextjs-para-iniciantes/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages/
│   │   ├── index.js
│   │   ├── about.js
│   │   └── blog/
│   │       └── [slug].js
│   ├── styles/
│   │   ├── globals.css
│   │   └── ...
│   ├── utils/
│   └── ...
├── .gitignore
├── README.md
├── next.config.js
└── package.json
```

## Instalação

1. **Clone o repositório:**

   git clone https://github.com/otaciobarbosa/nextjs-para-iniciantes.git
   cd nextjs-para-iniciantes

2. **Instale as dependências:**

   npm install


## Uso

### Ambiente de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

npm run dev


O aplicativo estará disponível em `http://localhost:3000`.

### Construção e Produção

Para construir o projeto para produção:

npm run build


Para iniciar o servidor em modo de produção:

npm start


### Testes

Para executar os testes (se configurados):

npm test


## Recursos Adicionais

Para mais detalhes e um guia completo sobre como criar um projeto Next.js, confira o vídeo [Next.js para Iniciantes](https://www.youtube.com/watch?v=k7eDn1qdj-E) no canal [LuizTools](https://www.youtube.com/@LuizTools).

## Contribuição

Se você quiser contribuir com este projeto, por favor siga estas etapas:

1. **Fork** o projeto.
2. Crie um **branch** para sua feature (`git checkout -b feature/AmazingFeature`).
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`).
4. **Push** para o branch (`git push origin feature/AmazingFeature`).
5. Abra um **Pull Request**.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

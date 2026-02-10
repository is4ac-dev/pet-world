# 🐶 PetShop Agenda

Uma aplicação web moderna e responsiva para gerenciamento de agendamentos de serviços de Petshop. Este projeto foi desenvolvido com foco em **JavaScript Moderno (ES6+)**, **Modularização** e boas práticas de arquitetura front-end.

![Project Status](https://img.shields.io/badge/status-concluído-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📸 Preview
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/a79d59d8-26d9-405f-bb74-d766511ef11b" />

## 🚀 Funcionalidades

- **Agendamento:** Cadastro de novos atendimentos com nome do tutor, pet, serviço, data e hora.
- **Visualização por Período:** Organização automática dos agendamentos em seções (Manhã, Tarde e Noite).
- **Validação de Horários:** Lógica inteligente que bloqueia horários já ocupados ou datas passadas.
- **Cancelamento:** Possibilidade de remover agendamentos existentes.
- **Responsividade:** Layout adaptável para Desktop e Mobile.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ferramentas:

- **HTML5 & CSS3:** Uso de Semantic HTML, CSS Grid, Flexbox e CSS Variables para temas.
- **JavaScript (ES6+):** Utilização de *ES Modules* para separar responsabilidades (Services, Utils, Modules).
- **Webpack:** Para empacotamento (bundling) dos arquivos e configuração do ambiente de desenvolvimento.
- **Babel:** Transpilação do código para garantir compatibilidade com diversos navegadores.
- **Day.js:** Biblioteca leve para manipulação e formatação de datas.
- **JSON Server:** Simulação de uma API REST completa para persistência dos dados.
- **GitHub Actions:** Pipeline de CI/CD configurado para deploy automático no GitHub Pages.

## 🏁 Como Rodar o Projeto

Para rodar o projeto localmente, você precisará ter o **Node.js** instalado.

### 1. Clone o repositório
```
git clone [https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git)
cd NOME-DO-REPOSITORIO
```

### 2. Instale as dependências
```
npm install
```

### 3. Inicie a API (JSON Server)
O projeto depende de uma API simulada rodando na porta 3333.
```
npm run server
```

### 4. Inicie o Front-end
Em outro terminal, inicie o Webpack Dev Server:
```
npm run dev
```

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo como base para estudos.

Desenvolvido por Isaac Monteiro, baseado no Curso FullStack do site Rockeseat

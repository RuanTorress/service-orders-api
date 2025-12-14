# Service Orders API

API REST para gerenciamento de ordens de serviço, equipamentos e técnicos.

## 📌 Descrição
Esta API foi desenvolvida com Node.js e Express, seguindo boas práticas de organização,
separação de responsabilidades e estrutura REST.
Ela permite cadastrar, listar e consultar equipamentos, técnicos e ordens de serviço.

## 🚀 Tecnologias utilizadas
- Node.js
- Express
- SQLite
- JavaScript (ES Modules)
- Git & GitHub

## 📂 Estrutura do projeto
src/
├── routes/
│ ├── equipamentos.routes.js
│ ├── tecnicos.routes.js
│ └── ordens.routes.js
├── db.js
└── server.js

bash
Copiar código

## 🔗 Rotas principais

### Equipamentos
- GET /equipamentos
- GET /equipamentos/:id
- POST /equipamentos

### Técnicos
- GET /tecnicos
- POST /tecnicos

### Ordens de Serviço
- GET /ordens
- POST /ordens

## ▶️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/RuanTorress/service-orders-api.git
2. Instalar as dependências
bash
Copiar código
npm install
3. Rodar a aplicação
bash
Copiar código
npm run dev
A API estará disponível em:

arduino
Copiar código
http://localhost:3000
🧪 Testes
As rotas podem ser testadas utilizando:

Postman

Insomnia

Thunder Client

📌 Status do projeto
🚧 Em desenvolvimento

👨‍💻 Autor
Ruan Torres

yaml
Copiar código

---

## 3️⃣ Subir o README para o GitHub

Depois de salvar o arquivo:

```bash
git add README.md
git commit -m "Add README"
git push
Pronto 🎉
O GitHub já vai mostrar a descrição do projeto automaticamente.

📌 Status do Projeto

🚧 Em desenvolvimento

👨‍💻 Autor

Ruan Torres
GitHub: https://github.com/RuanTorress

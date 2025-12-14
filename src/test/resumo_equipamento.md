
# Listar todos
GET http://localhost:3000/equipamentos

# Buscar por id
GET http://localhost:3000/equipamentos/1

# Criar equipamento
POST http://localhost:3000/equipamentos
Content-Type: application/json

{
  "nome": "Monitor Samsung",
  "serie": "MNTR456"
}

# Atualizar equipamento (substitua 3 pelo id real)
PUT http://localhost:3000/equipamentos/3
Content-Type: application/json

{
  "nome": "Monitor LG",
  "serie": "LG1234"
}

# Deletar equipamento (substitua 3 pelo id real)
DELETE http://localhost:3000/equipamentos/3
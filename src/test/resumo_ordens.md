
# Listar todas as ordens
GET http://localhost:3000/ordens

# Buscar ordem por id
GET http://localhost:3000/ordens/100

# Criar ordem de serviço
POST http://localhost:3000/ordens
Content-Type: application/json

{
  "equipamentoId": 2,
  "tecnicoId": 1,
  "descricao": "Revisão geral"
}

# Atualizar ordem (substitua 100 pelo id real)
PUT http://localhost:3000/ordens/100
Content-Type: application/json

{
  "descricao": "Revisão completa e troca de peças"
}

# Deletar ordem (substitua 100 pelo id real)
DELETE http://localhost:3000/ordens/100
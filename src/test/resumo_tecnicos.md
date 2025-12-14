
GET http://localhost:3000/tecnicos

POST http://localhost:3000/tecnicos
Content-Type: application/json

{
  "nome": "ruan"
}

PUT http://localhost:3000/tecnicos/1
Content-Type: application/json

{
  "nome": "Ruan Alterado"
}

DELETE http://localhost:3000/tecnicos/1

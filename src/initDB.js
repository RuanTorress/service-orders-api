const Database = require('better-sqlite3');
const db = new Database('banco.db');

// Criação das tabelas
db.exec(`
  CREATE TABLE IF NOT EXISTS equipamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    modelo TEXT
  );

  CREATE TABLE IF NOT EXISTS tecnicos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    especialidade TEXT
  );

  CREATE TABLE IF NOT EXISTS ordens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    equipamentoId INTEGER,
    tecnicoId INTEGER
  );
`);

console.log("Tabelas criadas com sucesso!");

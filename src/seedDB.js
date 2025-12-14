const Database = require('better-sqlite3');
const path = require("path");

// Sempre usar caminho absoluto
const dbPath = path.join(__dirname, "../banco.db");
const db = new Database(dbPath);

// Criar tabelas
db.prepare(`
  CREATE TABLE IF NOT EXISTS equipamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    modelo TEXT NOT NULL
  );
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS tecnicos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    especialidade TEXT NOT NULL
  );
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS ordens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    equipamentoId INTEGER NOT NULL,
    tecnicoId INTEGER NOT NULL,
    FOREIGN KEY (equipamentoId) REFERENCES equipamentos(id),
    FOREIGN KEY (tecnicoId) REFERENCES tecnicos(id)
  );
`).run();

// Inserir equipamentos
db.prepare(`
  INSERT INTO equipamentos (nome, modelo)
  VALUES
    ('Furadeira Bosch', 'GBH 2-26'),
    ('Computador HP', 'Pavilion G4'),
    ('Impressora Epson', 'L3150');
`).run();

// Inserir técnicos
db.prepare(`
  INSERT INTO tecnicos (nome, especialidade)
  VALUES
    ('Carlos Silva', 'Eletricista'),
    ('Maria Oliveira', 'Informática'),
    ('João Santos', 'Mecânico');
`).run();

// Inserir ordens
db.prepare(`
  INSERT INTO ordens (descricao, equipamentoId, tecnicoId)
  VALUES
    ('Troca de tomada', 1, 1),
    ('Formatação de computador', 2, 2),
    ('Reparo na impressora', 3, 3);
`).run();

console.log("✔ Banco criado e dados inseridos com sucesso!");

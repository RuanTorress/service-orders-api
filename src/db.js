import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Banco FORA do src
const dbPath = path.join(__dirname, '..', 'banco.db');

console.log("Usando banco em:", dbPath); // DEBUG

const db = new Database(dbPath);

export default db;

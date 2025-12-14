const Database = require('better-sqlite3');
const db = new Database('banco.db');

console.log("Equipamentos:");
console.log(db.prepare("SELECT * FROM equipamentos").all());

console.log("\nTécnicos:");
console.log(db.prepare("SELECT * FROM tecnicos").all());

console.log("\nOrdens:");
console.log(db.prepare("SELECT * FROM ordens").all());

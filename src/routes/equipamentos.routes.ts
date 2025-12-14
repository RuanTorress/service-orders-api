import { Router } from "express";
import db from "../db.js";

const router = Router();

// GET /equipamentos
router.get("/", (req, res) => {
  try {
    const item = db.prepare("SELECT * FROM equipamentos").all();
    
    res.json({
      titulo: "Lista de Equipamentos",
      dados: item
    });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao consultar equipamentos" });
  }
});


// GET /equipamentos/:id
router.get("/:id", (req, res) => {
  try {
    const item = db.prepare("SELECT * FROM equipamentos WHERE id = ?").get(req.params.id);
    if (!item) return res.status(404).json({ erro: "Equipamento não encontrado" });
    res.json({
      titulo: "Lista de Equipamentos",
      dados: item
    });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao consultar equipamento", detalhes: err.message });
  }
});

// POST /equipamentos
router.post("/", (req, res) => {
  try {
    const { nome, modelo } = req.body;

    const stmt = db.prepare(`
      INSERT INTO equipamentos (nome, modelo)
      VALUES (?, ?)
    `);

    const result = stmt.run(nome, modelo);

    res.json({ id: result.lastInsertRowid, nome, modelo });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao inserir equipamento", detalhes: err.message });
  }
});

export default router;

import { Router } from "express";
import db from "../db.js";

const router = Router();

// GET /tecnicos
router.get("/", (req, res) => {
  try {
    const rows = db.prepare("SELECT * FROM tecnicos").all();

    res.json({
      titulo: "Lista de Técnicos",
      data: rows
    });

  } catch (err) {
    res.status(500).json({ erro: "Erro ao consultar técnicos", detalhes: err.message });
  }
});


// GET /tecnicos/:id
router.get("/:id", (req, res) => {
  try {
    const item = db.prepare("SELECT * FROM tecnicos WHERE id = ?").get(req.params.id);
    if (!item) return res.status(404).json({ erro: "Técnico não encontrado" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao consultar técnico", detalhes: err.message });
  }
});

// POST /tecnicos
router.post("/", (req, res) => {
  try {
    const { nome, especialidade } = req.body;

    const stmt = db.prepare(`
      INSERT INTO tecnicos (nome, especialidade)
      VALUES (?, ?)
    `);

    const result = stmt.run(nome, especialidade);

    res.json({ id: result.lastInsertRowid, nome, especialidade });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao inserir técnico", detalhes: err.message });
  }
});

export default router;

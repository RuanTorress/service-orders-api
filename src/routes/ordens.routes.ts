import { Router } from "express";
import db from "../db.js";

const router = Router();

// GET /ordens
router.get("/", (req, res) => {
  try {
    const rows = db.prepare(`
      SELECT o.*, e.nome AS equipamento, t.nome AS tecnico 
      FROM ordens o
      JOIN equipamentos e ON e.id = o.equipamentoId
      JOIN tecnicos t ON t.id = o.tecnicoId
    `).all();

    res.json({
      titulo: "Lista de Ordens de Serviço",
      data: rows
    });

  } catch (err) {
    res.status(500).json({ erro: "Erro ao consultar ordens", detalhes: err.message });
  }
});


// GET /ordens/:id
router.get("/:id", (req, res) => {
  try {
    const item = db.prepare(`
      SELECT o.*, e.nome AS equipamento, t.nome AS tecnico 
      FROM ordens o
      JOIN equipamentos e ON e.id = o.equipamentoId
      JOIN tecnicos t ON t.id = o.tecnicoId
      WHERE o.id = ?
    `).get(req.params.id);

    if (!item) return res.status(404).json({ erro: "Ordem não encontrada" });

    res.json(item);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao consultar ordem", detalhes: err.message });
  }
});

// POST /ordens
router.post("/", (req, res) => {
  try {
    const { descricao, equipamentoId, tecnicoId } = req.body;

    const stmt = db.prepare(`
      INSERT INTO ordens (descricao, equipamentoId, tecnicoId)
      VALUES (?, ?, ?)
    `);

    const result = stmt.run(descricao, equipamentoId, tecnicoId);

    res.json({ id: result.lastInsertRowid, descricao, equipamentoId, tecnicoId });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao inserir ordem", detalhes: err.message });
  }
});

export default router;

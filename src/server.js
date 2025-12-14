import express from "express";

import equipamentosRoutes from "./routes/equipamentos.routes.ts";
import tecnicosRoutes from "./routes/tecnicos.routes.ts";
import ordensRoutes from "./routes/ordens.routes.ts";


const app = express();

app.use(express.json());

app.use("/equipamentos", equipamentosRoutes);
app.use("/tecnicos", tecnicosRoutes);
app.use("/ordens", ordensRoutes);

app.use((req, res) => {
  res.status(404).json({ titulo: "Erro", erro: "Rota não encontrada" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ erro: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));

export interface Equipamento {
  id: number;
  nome: string;
  serie: string;
  [key: string]: any;
}

export interface Tecnico {
  id: number;
  nome: string;
  telefone?: string;
  email?: string;
  [key: string]: any; // opcional: mantenha se precisar de campos dinâmicos
}

export interface OrdemServico {
  id: number;
  descricao: string;
  equipamentoId: number;
  tecnicoId: number;
  status?: string;
  dataCriacao?: string;
  [key: string]: any; // opcional
}

// aqui são apenas exemplos básicos de tipos; ajuste conforme necessário
// para refletir a estrutura real dos seus dados, para front e back-end.
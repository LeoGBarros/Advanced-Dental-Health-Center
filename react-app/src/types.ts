export interface ClinicData {
  clinicaNome: string
  enderecoCompleto: string
  enderecoCidade: string
  telefoneE164: string
  telefoneDisplay: string
  emailClinica: string
  googleMapsUrl: string
  googleMapsEmbedUrl: string
  facebookUrl: string
  instagramUrl: string
  areasServidas: string[]
  trustIndicators: { rating: string; pacientes: string }
  totalPacientes: string
  ofertaEspecial: { titulo: string; itens: string; preco: string }
  horarios: { dia: string; horario: string }[]
  servicos: { titulo: string; descricao: string; icon: string }[]
  doutores: { nome: string; anosExperiencia: string; credenciais: string; imagem?: string }[]
  doutoresDetalhados?: DoutorDetalhado[]
  formSubmitEmail: string
  faq: { pergunta: string; resposta: string }[]
  depoimentos: { texto: string; autor: string; estrelas: number; tempoRelativo: string }[]
}

export interface DoutorDetalhado {
  nome: string
  credencial: string
  imagem?: string
  citacao?: string
  experiencia: string
  educacao: { titulo: string; instituicao: string; local: string }[]
  secaoExtra?: { titulo: string; conteudo: string }
}

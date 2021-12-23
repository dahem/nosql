const mongoose = require('mongoose');

const Docente = mongoose.model('Docente', {
  nome: String,
  cpf: String,
  idade: Number,
  especialidade: String,
  instituicaoKey: String,
});

const Aluno = mongoose.model('Aluno', {
  nome: String,
  cpf: String,
  idade: Number,
  nivelEstudo: String,
  instituicaoKey: String,
  cursos: Array,
});

const Curso = mongoose.model('Curso', {
  nome: String,
  instituicoes: Array,
});

const Instituicao = mongoose.model('Instituicao', {
  nome: String,
  anoCriacao: Number,
  NumeroGruposEstudo: Number,
  endereco: Object,
  telefones: Array,
});

const GrupoEstudo = mongoose.model('grupoEstudo', {
  nome: String,
  gerenciador: String,
  integrantes: Array,
  palavrasChaves: Array,
  instituicaoKey: String,
  status: String,
  mensagens: Array,
  cursos: Array,
});

const Publicacao = mongoose.model('Publicacao', {
  titulo: String,
  autores: Array,
  dataPublicacao: Date,
  meioPublicacao: String,
  clasificacao: String,
  instituicaoKey: String,
  resumo: String,
  link: String,
  palavrasChaves: Array,
});

module.exports = {
  Docente,
  Aluno,
  Curso,
  Instituicao,
  GrupoEstudo,
  Publicacao
}

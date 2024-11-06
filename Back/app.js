import express from 'express'
import cors from "cors"
import routes from './routes.js'

import { sequelize } from './databases/conecta.js'

import { Mercadoria } from './models/Mercadorias.js'


const app = express()
const port = 3006

// Middleware para parsear JSON
app.use(express.json())
// Middleware para habilitar CORS
app.use(cors())
// Middleware para usar as rotas definidas
app.use(routes)

// Função assíncrona para conectar ao banco de dados
async function conecta_db() {
  try {
    // Autentica a conexão com o banco de dados
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');
    // Sincroniza o modelo mercadoria com o banco de dados
    await Mercadoria.sync()
  } catch (error) {
    // Em caso de erro, loga o erro no console
    console.error('Erro na conexão com o banco: ', error);
  }
}
// Chama a função para conectar ao banco de dados
conecta_db()

// Rota principal
app.get('/', (req, res) => {
  // Envia uma resposta simples
  res.send('oscar pisos revestimento')
})

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})

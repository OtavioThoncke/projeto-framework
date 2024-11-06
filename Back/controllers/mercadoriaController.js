import { Op } from 'sequelize';
import { Mercadoria } from '../models/Mercadorias.js'

// Função para listar todas as mercadorias
export const mercadoriaIndex = async (req, res) => {
  try {
    // Busca todas as mercadorias no banco de dados
    const mercadorias = await Mercadoria.findAll()
    // Retorna as mercadorias com status 200 (OK)
    res.status(200).json(mercadorias)
  } catch (error) {
    // Em caso de erro, retorna status 400 (Bad Request) e o erro
    res.status(400).send(error)
  }
}

// Função para criar uma nova mercadoria
export const mercadoriaCreate = async (req, res) => {
  // Extrai os dados do corpo da requisição
  const { nome, marca, preco  } = req.body

  // Se algum dos atributos não foi informado
  if (!nome || !marca || !preco ) {
    // Retorna status 400 (Bad Request) com mensagem de erro
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    // Cria uma nova mercadoria com os dados fornecidos
    const mercadoria = await Mercadoria.create({
      nome, marca, preco
    });
    // Retorna a mercadoria criada com status 201 (Created)
    res.status(201).json(mercadoria)
  } catch (error) {
    // Em caso de erro, retorna status 400 (Bad Request) e o erro
    res.status(400).send(error)
  }
}

// Função para remover uma mercadoria
export const mercadoriaDestroy = async (req, res) => {
  // Extrai o id dos parâmetros da requisição
  const { id } = req.params

  try {
    // Remove a mercadoria com o id fornecido
    await Mercadoria.destroy({ where: { id } });
    // Retorna mensagem de sucesso com status 200 (OK)
    res.status(200).json({ msg: "Ok! Removido com Sucesso" })
  } catch (error) {
    // Em caso de erro, retorna status 400 (Bad Request) e o erro
    res.status(400).send(error)
  }
}

// Função para buscar mercadoria por nome
export const mercadoriaSearch = async (req, res) => {
  // Extrai o nome dos parâmetros da requisição
  const { nome } = req.params;
  
  try {
    // Busca todas as mercadorias que contém o nome fornecido
    const mercadorias = await Mercadoria.findAll({
      where: {
        nome: {
          [Op.substring]: nome
        }
      }
    });

    // Retorna as mercadorias encontradas com status 200 (OK)
    res.status(200).json(mercadorias);
  } catch (error) {
    // Em caso de erro, retorna status 400 (Bad Request) e o erro
    res.status(400).send(error.message); // Envia a mensagem de erro em vez do objeto de erro completo
  }
}

// Função para editar uma mercadoria
export const mercadoriaEdit = async (req, res) => {
  // Extrai o id dos parâmetros da requisição
  const { id } = req.params; 
  // Extrai os dados do corpo da requisição
  const dadosMercadoria = req.body; 
  try {
    // Busca a mercadoria pelo id
    const itemMercadoria = await Mercadoria.findByPk(id);
    // Se o item não for encontrado, retorna status 404 (Not Found) com mensagem de erro
    if (!itemMercadoria) {
      return res.status(404).json({ error: 'Mercadoria não encontrada' });
    }
    // Atualiza o item da Mercadoria com os novos dados
    await itemMercadoria.update(dadosMercadoria);
    // Retorna o item atualizado com status 200 (OK)
    return res.status(200).json(itemMercadoria);
  } catch (error) {
    // Em caso de erro, retorna status 500 (Internal Server Error) e o erro
    return res.status(500).json({ error: 'Erro ao atualizar a mercadoria' });
  }
}

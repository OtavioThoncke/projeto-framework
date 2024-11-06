import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Mercadoria = sequelize.define('mercadoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  
  
}, {
  paranoid: true
});
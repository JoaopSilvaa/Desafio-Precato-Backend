import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';


class FormsAnswers extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public cpf!: string;
  public phone!: string;
}

FormsAnswers.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  cpf: {
    type: STRING,
    allowNull: false,
  },
  phone: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'forms_answers',
  timestamps: true,
  updatedAt: false,
});

export default FormsAnswers;

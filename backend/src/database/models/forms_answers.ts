import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';


class forms_answers extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public cpf!: string;
  public phone!: string;
  public createdAt!: Date;
}

forms_answers.init({
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
  createdAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'forms_answers',
  timestamps: true,
});

export default forms_answers;

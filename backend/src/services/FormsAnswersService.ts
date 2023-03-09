import sequelize = require('sequelize');
import { Op } from 'sequelize';
import FormsAnswers from '../database/models/FormsAnswers';
import IFormAnswers from '../Interfaces/FormsAnswers';

class FormsAnswersService {
  constructor() {
  }

  public async create(obj: IFormAnswers): Promise<IFormAnswers> {  
    const { email } = obj;
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(email);
    if (!validEmail) {
      const err = new Error("The email entered is not valid");
      err.name = "BadRequestError";
      throw err;
    }
    const alreadyExist = await FormsAnswers.findOne({ where: { email } });
    if (alreadyExist) {
      const err = new Error("Email already registered");
      err.name = "ConflictError";
      throw err;
    }
    const result = await FormsAnswers.create(obj);
    return result;
  }

  public async readAll(): Promise<IFormAnswers[]> {
    const result = await FormsAnswers.findAll();
    return result;
  }

  public async readOne(id: string): Promise<IFormAnswers> {
    const result = await FormsAnswers.findByPk(Number(id));
    if (!result) {
      const err = new Error("Form not found");
      err.name = "NotFoundError";
      throw err;
    }
    return result;
  }

  public async readForDate(dateInitial: string, dateFinal: string): Promise<IFormAnswers[]> {
    if (!dateInitial && !dateFinal) {
      const err = new Error("Invalid dates, dateInitial or dateFinal are required");
      err.name = "BadRequestError";
      throw err;
    }
    if (!dateFinal) {
      const result = await FormsAnswers.findAll({
        where: {
          created_at: {
            [Op.gte]: dateInitial 
          },
        },
      });
      return result;
    }
    if (!dateInitial) {
      const result = await FormsAnswers.findAll({
        where: {
          created_at: {
            [Op.lte]: dateFinal 
          },
        },
      });
      return result;
    }
    const result = await FormsAnswers.findAll({  
      where: {
        created_at: {
          [Op.between]: [dateInitial, dateFinal] 
        },
      },
    });
    return result;
  }
}

export default FormsAnswersService;

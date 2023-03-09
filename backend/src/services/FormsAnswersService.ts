import { Op } from 'sequelize';
import FormsAnswers from '../database/models/FormsAnswers';
import IFormAnswers from '../Interfaces/FormsAnswers';

class FormsAnswersService {
  constructor() {
  }

  public async create(obj: IFormAnswers): Promise<IFormAnswers> {  
    const { name, email, cpf, phone } = obj;
    if (!name || name.length < 3) {
      const err = new Error("Name entered is not valid, name is required");
      err.name = "BadRequestError";
      throw err;
    }
    if (!email) {
      const err = new Error("Email is required");
      err.name = "BadRequestError";
      throw err;
    }
    if (!cpf || cpf.length < 11) {
      const err = new Error("CPF entered is not valid, CPF is required");
      err.name = "BadRequestError";
      throw err;
    }
    if (!phone || phone.length < 11) {
      const err = new Error("Phone entered is not valid, phone is required");
      err.name = "BadRequestError";
      throw err;
    }
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
    const dateRegex = /(\d{4})[-](\d{2})[-](\d{2})/;
    if (!dateInitial && !dateFinal) {
      const err = new Error("Invalid dates, dateInitial or dateFinal are required");
      err.name = "BadRequestError";
      throw err;
    }
    if (!dateFinal) {
      if(!dateRegex.test(dateInitial)) {
        const err = new Error("Invalid dates, dateInitial must be in YYYY-MM-DD format");
        err.name = "BadRequestError";
        throw err;
      }
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
      if(!dateRegex.test(dateFinal)) {
        const err = new Error("Invalid dates, dateFinal must be in YYYY-MM-DD format");
        err.name = "BadRequestError";
        throw err;
      }
      const result = await FormsAnswers.findAll({
        where: {
          created_at: {
            [Op.lte]: dateFinal 
          },
        },
      });
      return result;
    }
    if(!dateRegex.test(dateFinal) || !dateRegex.test(dateInitial)) {
      const err = new Error("Invalid dates, dates must be in YYYY-MM-DD format");
      err.name = "BadRequestError";
      throw err;
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

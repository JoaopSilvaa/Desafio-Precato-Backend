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
}

export default FormsAnswersService;

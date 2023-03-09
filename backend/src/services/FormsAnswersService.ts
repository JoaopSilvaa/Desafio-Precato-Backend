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
      throw new Error("ValidationError");
    }
    const alreadyExist = await FormsAnswers.findOne({ where: { email } });
    if (alreadyExist) {
      throw new Error("ConflictError");
    }
    const result = await FormsAnswers.create(obj);
    return result;
  }
}

export default FormsAnswersService;

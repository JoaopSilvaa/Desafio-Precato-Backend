import { Request, Response } from 'express';
import Forms_answersService from '../services/FormsAnswersService';

class Forms_answersController {
  private _service;

  constructor(private forms_answersService: Forms_answersService) {
    this._service = forms_answersService;
  }

  public async create(req: Request, res: Response) {    
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  public async readAll(_req: Request, res: Response) {
    const result = await this._service.readAll();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }

  public async readForDate(req: Request, res: Response) {
    const { dateInitial, dateFinal } = req.body;
    const result = await this._service.readForDate(dateInitial, dateFinal);
    return res.status(200).json(result);
  }
}

export default Forms_answersController;

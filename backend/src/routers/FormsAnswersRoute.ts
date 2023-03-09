import * as Router from 'express';
import FormsAnswersService from '../services/FormsAnswersService';
import FormsAnswersController from '../controllers/FormsAnswersController';

const router = Router();

const formsAnswersService = new FormsAnswersService();
const formsAnswersController = new FormsAnswersController(formsAnswersService);

router.post('/', (req, res) => formsAnswersController.create(req, res));

export default router;

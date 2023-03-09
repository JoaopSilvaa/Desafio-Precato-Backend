import * as Router from 'express';
import FormsAnswersService from '../services/FormsAnswersService';
import FormsAnswersController from '../controllers/FormsAnswersController';

const router = Router();

const formsAnswersService = new FormsAnswersService();
const formsAnswersController = new FormsAnswersController(formsAnswersService);

router.post('/', (req, res) => formsAnswersController.create(req, res));
router.get('/', (req, res) => formsAnswersController.readAll(req, res));
router.get('/:id', (req, res) => formsAnswersController.readOne(req, res));
router.post('/fordate', (req, res) => formsAnswersController.readForDate(req, res));

export default router;

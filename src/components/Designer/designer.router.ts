import { Router } from 'express';
import protectedByApiKey from '@core/middlewares/apiKey.middleware';
import validation from '@core/middlewares/validate.middleware';
import { createDesigner } from './designer.controller';

const router: Router = Router();

router.get('/test', (req, res) => {
  res.send('Manager route');
});

router.post('/designer/create', [protectedByApiKey], createDesigner);

export default router;

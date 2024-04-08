import { Router } from 'express';
import protectedByApiKey from '@core/middlewares/apiKey.middleware';
import validation from '@core/middlewares/validate.middleware';

const router: Router = Router();

router.get('/test', (req, res) => {
  res.send('Manager route');
});

export default router;

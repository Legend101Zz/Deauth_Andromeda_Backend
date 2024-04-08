import { Router } from 'express';
import protectedByApiKey from '@core/middlewares/apiKey.middleware';
import validation from '@core/middlewares/validate.middleware';
import { createDesigner, getOwnerDetails } from './designer.controller';

const router: Router = Router();

router.post('/designer/create', [protectedByApiKey], createDesigner);

router.post(
  '/designer/getDesignerDetails',
  [protectedByApiKey],
  getOwnerDetails,
);

export default router;

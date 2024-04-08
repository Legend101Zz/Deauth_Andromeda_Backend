import { Router } from 'express';
import protectedByApiKey from '@core/middlewares/apiKey.middleware';
import validation from '@core/middlewares/validate.middleware';
import { createDesignAndAssociateDesigner } from './design.controller';

const router: Router = Router();

router.post(
  '/designer/create',
  [protectedByApiKey],
  createDesignAndAssociateDesigner,
);

export default router;

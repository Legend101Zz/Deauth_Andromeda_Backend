import { Router } from 'express';
import protectedByApiKey from '@core/middlewares/apiKey.middleware';
import validation from '@core/middlewares/validate.middleware';
import {
  createDesignAndAssociateDesigner,
  addChildrenToParent,
} from './design.controller';

const router: Router = Router();

router.post(
  '/design/create',
  [protectedByApiKey],
  createDesignAndAssociateDesigner,
);

router.post(
  '/design/addChildrenToParentNFT',
  [protectedByApiKey],
  addChildrenToParent,
);

export default router;

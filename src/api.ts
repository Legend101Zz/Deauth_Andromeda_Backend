import { Router } from 'express';

import healthCheck from '@components/healthcheck/healthCheck.router';
import design from '@components/Design/design.router';
import designer from '@components/Designer/designer.router';

const router: Router = Router();
router.use(healthCheck);
router.use(design);
router.use(designer);

export default router;

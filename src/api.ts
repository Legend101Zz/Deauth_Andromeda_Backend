import { Router } from 'express';

import healthCheck from '@components/healthcheck/healthCheck.router';
import design from '@components/Design/design.router';

const router: Router = Router();
router.use(healthCheck);
router.use(design);

export default router;

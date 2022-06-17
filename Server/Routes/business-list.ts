import express from 'express';
const router = express.Router();

import { DisplayBusinessListPage } from '../Controllers/business-list';

import { AuthGuard } from '../Util/index';

/* Display Movie List Page */
router.get('/business-list', AuthGuard, DisplayBusinessListPage);

export default router;
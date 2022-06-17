import express from 'express';
const router = express.Router();

import { DisplayBusinessListPage,DisplayBusinessEditPage, DeleteContact} from '../Controllers/business-list';

import { AuthGuard } from '../Util/index';

/* Display Movie List Page */
router.get('/business-list', AuthGuard, DisplayBusinessListPage);

/* GET Route for displaying the Edit page */
/*thiis will update Operation*/
router.get('/business-list-edit/:id', AuthGuard, DisplayBusinessEditPage);


/* POST Route for processing the Edit page - UPDATE Operation */
/*thiis will update Operation*/
// router.post('/business-list-edit/:id', AuthGuard, ProcessBusinessEditPage);

//Get - Delete Contact using ID
router.get('/business-list/delete/:id', AuthGuard, DeleteContact);

export default router;
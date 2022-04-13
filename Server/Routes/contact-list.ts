import express from 'express';
const router = express.Router();

import {AuthGuard} from '../Util/index';

import {DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage} from '../Controllers/contact-list';

router.get('/contact-list', AuthGuard, DisplayContactListPage);


/* Display the Add page. */
router.get('/add', AuthGuard, DisplayAddPage);


/* Prrocess the Add request */
router.post('/add', AuthGuard, ProcessAddPage);


/* Display the Edit page with data from DB */
router.get('/edit/:id', AuthGuard, DisplayEditPage);


/* Process the Edit request */
router.post('/edit/:id', AuthGuard, ProcessEditPage);


/* Process the delete request */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);


export default router;
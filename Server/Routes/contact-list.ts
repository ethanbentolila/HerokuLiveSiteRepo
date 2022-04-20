/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/

import express from 'express';
import { DisplayAddPage, DisplayBusinessContactPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../controllers/contact-list';
const router = express.Router();
import {AuthGuard} from '../Util/index';


/* GET contact-list page. */
router.get('/business-contact-list', AuthGuard, DisplayBusinessContactPage);


/* Display the Add page. */
router.get('/add', AuthGuard, DisplayAddPage);

/* Create*/
router.post('/add', AuthGuard, ProcessAddPage); 


/* Retrieve */
router.get('/edit/:id', AuthGuard, DisplayEditPage); 


/* Update */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* Delete */
router.get('/delete/:id', AuthGuard, ProcessDeletePage); 



export default router;
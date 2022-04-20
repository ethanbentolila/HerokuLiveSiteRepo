/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/



import express from 'express';
import { DisplayContactPage, DisplayInquiriesListPage, ProcessContactForm, ProcessInqDelete } from '../controllers/inquiries-list';
const router = express.Router();

import {AuthGuard} from '../Util/index';


/* GET contactForm page. */
router.get('/contactform', DisplayContactPage);


/* Inserts the record*/
router.post('/contactform', ProcessContactForm);

router.get('/inquiries-list', AuthGuard, DisplayInquiriesListPage);

router.get('/inqdelete/:id', AuthGuard, ProcessInqDelete);



export default router;
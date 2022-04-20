/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/


import express from 'express';
const router = express.Router();
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../controllers/auth';



/* GET - Display login page. */
router.get('/login', DisplayLoginPage);


/* Process the login request */
router.post('/login', ProcessLoginPage); 


/* GET - Display register page. */
router.get('/register', DisplayRegisterPage);


/* Process the register request */
router.post('/register', ProcessRegisterPage);


/* process logout request */
router.get('/logout', ProcessLogoutPage);



export default router;
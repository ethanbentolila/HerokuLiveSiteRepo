import express from 'express';
const router = express.Router();
import {DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcesslogoutPage, ProcessRegisterPage} from '../Controllers/auth';

/*************************************** AUTHENTICATION ROUTES************************************************/
/* GET - Display login page. */
router.get('/login', DisplayLoginPage);


/* Process the login request */
router.post('/login', ProcessLoginPage);


/* GET - Display register page. */
router.get('/register',DisplayRegisterPage);

/* Process the register request */
router.post('/register', ProcessRegisterPage);


/* process logout request */
router.get('/logout', ProcesslogoutPage);

export default router;
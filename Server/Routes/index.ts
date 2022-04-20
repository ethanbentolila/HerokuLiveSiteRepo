/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/


import express from 'express';
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../controllers';
const router = express.Router();




router.get('/', DisplayHomePage);


/* GET home page. */
router.get('/home', DisplayHomePage); 

/* GET about page. */
router.get('/about', DisplayAboutPage);


/* GET services page. */
router.get('/services', DisplayServicesPage);


/* GET projects page. */
router.get('/projects', DisplayProjectsPage);


/* GET products page. */
router.get('/contact', DisplayContactPage);



export default router;
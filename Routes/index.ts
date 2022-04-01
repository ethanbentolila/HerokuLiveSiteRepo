import express, { response, Router } from 'express';
const router = express.Router();


import Contact from '../Models/contact';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' , page: 'home', displayName: '' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' , page: 'home', displayName: '' });
});


router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us' , page: 'about', displayName: '' });
});


router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Our Services' , page: 'services', displayName: '' });
});

router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Our Products' , page: 'products', displayName: '' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us' , page: 'contact', displayName: '' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' , page: 'login', displayName: '' });
});

router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Register' , page: 'register', displayName: '' });
});


//Temporary routes - contact-list related
router.get('/contact-list', function(req, res, next) 
{
  Contact.find(function(err,contactList)
  {
    if(err)
    {
      console.error("Error Encountered:" + err.message);
      res.end();
    }
   

    res.render('index', { title: 'Contact List' , page: 'contact-list', contacts: contactList, displayName: '' });

  });

});


// Display the add page 
router.get('/add', function(req, res, next) 
{
  res.render('index', { title: 'Add' , page: 'edit', contact: '', displayName: '' });
});

//Process the add request
router.post('/add', function(req, res, next) 
{
  let newContact = new Contact
  ({
    "FullName":req.body.fullName,
    "ContactNumber":req.body.contactNumber,
    "EmailAddress":req.body.emailAddress
  });

  //db.contacts.insert
  Contact.create(newContact,function(err:ErrorCallback)
  {
    if(err)
    {
      console.error(err);
      res.end(err)
    }
    // newContact has been added to the db -> go back to the contact list
    res.redirect('/contact-list');
  })
});


//Display edit page with data from DB
router.get('/edit/:id', function(req, res, next) 
{

  let id = req.params.id;
  //pass the id to the database and read the contact info
  Contact.findById(id,{},{},function(err,contactToEdit)
  {
      if(err)
      {
        console.error(err);
        res.end(err);
      }

      //show the edit view with the data
      res.render('index', { title: 'Edit' , page: 'edit', contact: contactToEdit, displayName: '' });

  });

});




//Process delete request
router.get('/delete/:id', function(req, res, next) 
{
  let id = req.params.id;
  //pass the id to the database and read the contact info
  Contact.remove({_id: id},function(err)
  {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
      //delete was successful, now go back to the contact list
      res.redirect('/contact-list');
    });
});


//process the edit request
router.post('/edit/:id', function(req, res, next) 
{

  let id = req.params.id;

  //contact to edit
  let updatedContact = new Contact
  ({
    "_id": id,
    "FullName":req.body.fullName,
    "ContactNumber":req.body.contactNumber,
    "EmailAddress":req.body.emailAddress
  });


  //db.contacts.update({"_id":"id"}, update info)
  Contact.updateOne({_id:id},updatedContact,function(err:ErrorCallback)
  {
      if(err)
      {
        console.error(err);
        res.end(err);
      }

      //the edit was successful, go back to contact-list
      res.redirect('/contact-list');

  });

});


export default router;
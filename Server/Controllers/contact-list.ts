/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/

import express, {Request,Response,NextFunction} from 'express';
import BusinessContact from '../Models/BusinessContact';
import {UserDisplayName} from '../Util/index';



//Display pages
export function DisplayBusinessContactPage(req: Request, res: Response, next : NextFunction) : void
{
  // R - Read
  BusinessContact.find(function(err, contactList)
  {
    if(err)
    {
      console.error("Error Encountered: " + err.message);
      res.end();
    }

    res.render('index', { title: 'Business Contact List', page: 'business-contact-list', contacts: contactList, displayName: UserDisplayName(req) });
  });
}

export function DisplayAddPage(req: Request, res: Response, next : NextFunction) : void
{
    res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: UserDisplayName(req) });

}

export function DisplayEditPage(req: Request, res: Response, next : NextFunction) : void
{
    let id = req.params.id;

    // pass the id to the db and read the contact in
    BusinessContact.findById(id, {}, {}, function(err, contactToEdit)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      // show the edit view with the data
      res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: UserDisplayName(req) });
    });  
}

//Process Pages

export function ProcessAddPage(req: Request, res: Response, next : NextFunction) : void
{
  // instantiate a new contact to add
  let newContact = new BusinessContact
  ({
    "ContactName": req.body.fullName,
    "ContactNumber": req.body.contactNumber,
    "ContactEmail": req.body.emailAddress
  });

  // db.contacts.insert
  BusinessContact.create(newContact, function(err)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }
    // newContact has been added to the db -> now go back to the contact-list
    res.redirect('/business-contact-list');
  });
}

export function ProcessEditPage(req: Request, res: Response, next : NextFunction) : void
{
    let id = req.params.id;

    // instantiate a new contact to edit
    let updatedContact = new BusinessContact
    ({
      "_id": id,
      "ContactName": req.body.fullName,
      "ContactNumber": req.body.contactNumber,
      "ContactEmail": req.body.emailAddress
    });
    BusinessContact.updateOne({_id:id}, updatedContact, function(err: ErrorCallback)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
      // the edit was successful -> go back to the contact-list
      res.redirect('/business-contact-list');
    });  
}

export function ProcessDeletePage(req: Request, res: Response, next : NextFunction) : void
{
    let id = req.params.id;
    BusinessContact.remove({_id: id}, function(err)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      // delete was successful -> go back to the contact-list
      res.redirect('/business-contact-list');
    });

}
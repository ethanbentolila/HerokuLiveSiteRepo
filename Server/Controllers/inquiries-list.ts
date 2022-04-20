/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/

import express, {Request,Response,NextFunction} from 'express';
const router = express.Router();

import Inquiries from '../Models/Inquiries';
import { UserDisplayName,DefaultAuthguardRoute} from '../Util/index';


//Display Pages
export function DisplayContactPage(req: Request, res: Response , next : NextFunction) : void
{
    res.render('index', { title: 'Contact Form', messages: req.flash('InquiryMessage'), page: 'contactform', displayName: UserDisplayName(req) });

}

export function DisplayInquiriesListPage(req: Request, res: Response , next : NextFunction) : void
{
  // R - Read
  Inquiries.find(function(err, inquiriesList)
  {
    if(err)
    {
      console.error("Error Encountered: " + err.message);
      res.end();
    }

    res.render('index', { title: 'Inquiries List', page: 'inquiries-list', Inquiries: inquiriesList, displayName: UserDisplayName(req) });
    //change the default route back to business-contact-list
    DefaultAuthguardRoute();
  });
}



//Process Pages
export function ProcessInqDelete(req: Request, res: Response , next : NextFunction) : void
{
    let id = req.params.id;
    Inquiries.remove({_id: id}, function(err)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      // delete was successful -> go back to the contact-list
      res.redirect('/inquiries-list');
    });  
}


export function ProcessContactForm(req: Request, res: Response , next : NextFunction) : void
{
  // instantiate a new inquiry
  let newInquiry = new Inquiries
  ({
    "FullName": req.body.fullName,
    "PhoneNumber": req.body.phoneNumber,
    "EmailAddress": req.body.emailAddress,
    "Message": req.body.message

  });

  Inquiries.create(newInquiry, function(err)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }
    req.flash('InquiryMessage', 'Message successfully sent');
    res.redirect('/contactform');
  });
}
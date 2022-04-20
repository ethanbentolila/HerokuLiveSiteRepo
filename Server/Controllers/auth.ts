/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/
import express, {Request,Response,NextFunction} from 'express';
import passport from 'passport';
import User from '../Models/User';
import { UserDisplayName, CorrectAuthGuardPath} from '../Util/index';


//Display pages
export function DisplayLoginPage(req: Request, res: Response, next : NextFunction) : void
{
    if(!req.user)
    {
      return res.render('index', 
        { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }
    return res.redirect('/login');
}

export function DisplayRegisterPage(req: Request, res: Response, next : NextFunction) : void
{
    if(!req.user)
    {
    return res.render('index', 
      { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) });
    }
    return res.redirect('/business-contact-list');
}








//Process Pages
export function ProcessLoginPage(req: Request, res: Response, next : NextFunction) : void
{
    passport.authenticate('local', function(err, user, info)
    {
      // are there serer errors?
      if(err)
      {
        console.error(err);
        res.end(err);
      }
      
      // are there login errors?
      if(!user)
      {
        req.flash('loginMessage', 'Authentication Error');
        return res.redirect('/login');
      }
  
      req.logIn(user, function(err)
      {
        // are there db errors?
        if(err)
        {
          console.error(err);
          res.end(err);
        }
  
        return res.redirect(CorrectAuthGuardPath);
      });
    })(req, res, next);
}

export function ProcessRegisterPage(req: Request, res: Response, next : NextFunction) : void
{
  // instantiate a new user object
  let newUser = new User
  ({
    username: req.body.username,
    EmailAddress: req.body.emailAddress,
    DisplayName: req.body.firstName + " " + req.body.lastName
  });

  User.register(newUser, req.body.password, function(err)
  {
    if(err)
    {
      if(err.name == "UserExistsError")
      {
        console.error('ERROR: Inserting User');
        req.flash('registerMessage', 'Registration Error');
        console.error('ERROR: User Already Exists');
      }
      req.flash('registerMessage', 'Server Failure');
      console.error(err.name);
      return res.redirect('/register');
    }
    
    // automatically login the user
    return passport.authenticate('local')(req, res, ()=>
    {
      return res.redirect('/business-contact-list');
    });
  });
}

export function ProcessLogoutPage(req: Request, res: Response, next : NextFunction) : void
{
    req.logOut();

    res.redirect('/login');
}
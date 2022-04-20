/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/

import express, {Request,Response,NextFunction} from 'express';
import { UserDisplayName } from '../Util';



export function DisplayHomePage(req: Request, res: Response, next : NextFunction) : void
{

    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });

}


export function DisplayAboutPage(req: Request, res: Response, next : NextFunction) : void
{
    res.render('index', { title: 'About Us', page: 'about', displayName: UserDisplayName(req) });


}


export function DisplayServicesPage(req: Request, res: Response, next : NextFunction) : void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: UserDisplayName(req) });


}

export function DisplayProjectsPage(req: Request, res: Response, next : NextFunction) : void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: UserDisplayName(req) });


}

export function DisplayContactPage(req: Request, res: Response, next : NextFunction) : void
{

    res.render('index', { title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req) });

}
/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/


import express, {Request,Response, NextFunction} from 'express';

export let CorrectAuthGuardPath = 'business-contact-list';

export function UserDisplayName(req: Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument;
        return user.DisplayName.toString();
    }
    return '';
}

export function AuthGuard(req: Request, Res: Response, next : NextFunction): void
{
    CorrectAuthGuardPath =req.route.path;
    if(!req.isAuthenticated())
    {
        return Res.redirect('/login');
    }
    next();
}


export function DefaultAuthguardRoute() : void
{
    CorrectAuthGuardPath = 'business-contact-list';
}
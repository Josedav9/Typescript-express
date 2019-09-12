import { Request, Response, NextFunction } from 'express';

export const getHome = (req: Request, res: Response) => {
    res.render('index', { title: 'Express' });
}

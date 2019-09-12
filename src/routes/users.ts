import { Request, Response, NextFunction } from 'express';

export const getUser = (req: Request, res: Response) => {
    res.send('Respond with a resource');
}

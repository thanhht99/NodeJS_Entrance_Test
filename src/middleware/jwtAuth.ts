import { Response, Request, NextFunction } from 'express';
import { getRepository } from 'typeorm'
import jwt from 'jsonwebtoken'
import { User } from '../entity/User'
import ErrorResponse from '../model/ErrorResponse'

interface IUserRequest extends Request {
    user: User
}

export const jwtAuth = async(req: IUserRequest, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return res.json(new ErrorResponse(401, "You are not authorized"))
    }
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.json(new ErrorResponse(401, "Unauthorized"))
    }
    try {
        const payload = jwt.verify(token, process.env.SECRETKEY);
        const user = await getRepository(User).findOne({ username: payload.username });
        if (user) {
            req.user = payload;
            next();
        } else {
            return res.json(new ErrorResponse(401, "Unauthorized"))
        }
    } catch (error) {
        return res.json(new ErrorResponse(401, error))
    }
}
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from "bcryptjs"
import { User } from '../entity/User'
import SuccessResponse from '../model/SuccessResponse'
import ErrorResponse from '../model/ErrorResponse'
import jwt from 'jsonwebtoken'

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { fullName, username, password } = req.body;
        if (!fullName || !username  || !password )
            return res.json(new ErrorResponse(400, "Invalid username or password or full name"));        
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);
        const checkExist = await getRepository(User).findOne({
            where: { username: username }
        })
        if (!checkExist) {
            const newUser = await getRepository(User).create({fullName, username, password:passwordHash});
            const result = await getRepository(User).save(newUser);
            return res.status(200).json(new SuccessResponse(200,result));     
        }
        return res.json(new ErrorResponse(404, "User already exist"));        
    } catch (err) {
        return res.json(new ErrorResponse(400, err));
    }    
}

export const signIn = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { username, password } = req.body;
        if (!username  || !password )
            return res.json(new ErrorResponse(400, "Invalid username or password"));               
        const checkExist = await getRepository(User).findOne({ username: username })
        if (checkExist) {
            const isMatchPassword = await bcrypt.compare(
                password,
                checkExist.password
            );
            if (isMatchPassword) {
                const token = jwt.sign(
                  {
                    username: checkExist.username,
                    fullName: checkExist.fullName
                  },
                  process.env.SECRETKEY
                );
                return res.status(200).json(new SuccessResponse(200, token));
            } else {
                return res.json(new ErrorResponse(400, "Password is not match"));
            }  
        }
        return res.json(new ErrorResponse(404, "User not exist"));        
    } catch (err) {
        return res.json(new ErrorResponse(400, err));
    }    
}

export const getAllUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const listUsers = await getRepository(User)
                .createQueryBuilder("user")
                .leftJoinAndSelect("user.todos", "todo")
                .getMany();
        return res.status(200).json(new SuccessResponse(200,listUsers)); 
    } catch (err) {
        return res.json(new ErrorResponse(400, err));
    }    
}

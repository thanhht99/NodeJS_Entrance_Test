import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'
import { ToDo } from '../entity/ToDo'
import SuccessResponse from '../model/SuccessResponse'
import ErrorResponse from '../model/ErrorResponse'

export const addToDo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, description } = req.body;
        if (!name || !description )
            return res.json(new ErrorResponse(400, "Invalid name or description"));                
        const newToDo = await getRepository(ToDo).create(req.body);
        const result = await getRepository(ToDo).save(newToDo);
        return res.status(200).json(new SuccessResponse(200,result));     
    } catch (err) {
        return res.json(new ErrorResponse(400, err));
    }    
}

export const updateToDo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id, name, description, status } = req.body;
        if (!id || !name || !description || !status )
            return res.json(new ErrorResponse(400, "Invalid id or name or description or status")); 
        const checkExistToDo = await getRepository(ToDo).findOne({
            where: { id }
        })
        if (checkExistToDo) {
            if (checkExistToDo.status === "COMPLETE")
                return res.json(new ErrorResponse(400, "ToDo had completed"));
            if (status !== 'NEW' && status !== 'COMPLETE')
                return res.json(new ErrorResponse(400, "Invalid status" ));
            
            const result = await getRepository(ToDo).update(id, { name, description, status, dateOfModification: new Date() });
            return res.status(200).json(new SuccessResponse(200,"Update success")); 
        }
        return res.json(new ErrorResponse(404, "ToDo not exist"));
    } catch (err) {
        return res.json(new ErrorResponse(400, err));
    }    
}

export const removeToDo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.body;
        if (!id )
            return res.json(new ErrorResponse(400, "Invalid id or name or description or status")); 
        const checkExistToDo = await getRepository(ToDo).findOne({
            where: { id }
        })
        if (checkExistToDo) {
            if (checkExistToDo.status === "COMPLETE")
                return res.json(new ErrorResponse(400, "ToDo had completed. Can't remove"));
            
            const result = await getRepository(ToDo).delete(id);
            return res.status(200).json(new SuccessResponse(200,"Deleted")); 
        }
        return res.json(new ErrorResponse(404, "ToDo not exist"));
    } catch (err) {
        return res.json(new ErrorResponse(400, err));
    }    
}

export const getAllToDo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const listToDos = await getRepository(ToDo).find();
        return res.status(200).json(new SuccessResponse(200,listToDos)); 
    } catch (err) {
        return res.json(new ErrorResponse(400, err));
    }    
}


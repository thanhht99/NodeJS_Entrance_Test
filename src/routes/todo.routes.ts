import { Router } from "express";
const router = Router();
import { jwtAuth } from "../middleware/jwtAuth";
import { addToDo,updateToDo,removeToDo,getAllToDo } from "../controllers/todo.controller"

router.post('/API3/ADD-TO-DO', jwtAuth, addToDo);
router.put('/API4/UPDATE-TO-DO', jwtAuth, updateToDo);
router.delete('/API5/REMOVE-TO-DO', jwtAuth, removeToDo);
router.get('/API6/GET-ALL-TO-DO', jwtAuth, getAllToDo);

export default router;
import { Router } from "express";
const router = Router();

import {signUp,signIn,getAllUser} from "../controllers/user.controller"

router.post('/API1/SIGN-UP', signUp);
router.post('/API2/SIGN-IN', signIn);
router.get('/API8/GET-ALL-USER', getAllUser);

export default router;
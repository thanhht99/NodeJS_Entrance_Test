import { Router } from "express";
const router = Router();

import {signUp,signIn} from "../controllers/user.controller"

router.post('/API1/SIGN-UP', signUp);
router.post('/API2/SIGN-IN', signIn);

export default router;
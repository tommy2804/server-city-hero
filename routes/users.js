import express from 'express';
const router = express.Router();
import {getInspectors} from '../controllers/users.js';


router.get('/getInspectors', getInspectors);

export default router;


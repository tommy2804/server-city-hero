import express from 'express';
const router = express.Router();
import { newRequest, municipalityUpdate, inspectorUpdate, getCitizenRequests, getMunicipalityRequests, getInspectorRequests } from '../controllers/requests.js';

router.post('/newRequest', newRequest);
router.put('/municipalityUpdate/:id', municipalityUpdate);
router.put('/inspectorUpdate/:id', inspectorUpdate);
router.get('/getCitizenRequests', getCitizenRequests);
router.get('/getMunicipalityRequests', getMunicipalityRequests);
router.get('/getInspectorRequests', getInspectorRequests);

export default router;

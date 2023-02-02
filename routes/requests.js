import express from 'express';
const router = express.Router();
import { newRequest, municipalityUpdate, inspectorUpdate, getCitizenRequests, getMunicipalityRequests, getInspectorRequests,getRequestsByUrgencyMunicipality,getRequestsByStatusMunicipality,getRequestsByUrgencyInspector,getRequestsByStatusInspector} from '../controllers/requests.js';

router.post('/newRequest', newRequest);
router.put('/municipalityUpdate/:id', municipalityUpdate);
router.put('/inspectorUpdate/:id', inspectorUpdate);
router.get('/getCitizenRequests/:ofUser', getCitizenRequests);
router.get('/getMunicipalityRequests', getMunicipalityRequests);
router.get('/getInspectorRequests/:inCharge', getInspectorRequests);
router.get('/getRequestsByUrgencyMunicipality/:urgency', getRequestsByUrgencyMunicipality);
router.get('/getRequestsByStatusMunicipality/:status', getRequestsByStatusMunicipality);
router.get('/getRequestsByUrgencyInspector/:urgency/:inCharge', getRequestsByUrgencyInspector);
router.get('/getRequestsByStatusInspector/:status/:inCharge', getRequestsByStatusInspector);

export default router;

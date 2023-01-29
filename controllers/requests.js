import Request from '../models/Request.js';
//add new request //citizen job

export const newRequest = async (req, res) => {
  try {
    const { reqPhoto, ofUser, reqStreet, reStreetNum, reqDescription, reqTitle } = req.body;
    const newReqNumber = Request.aggregate({ $max: '$reqNumber' }) + 1;
    const newRequest = new Request({
      reqNumber: newReqNumber,
      reqPhoto,
      ofUser,
      urgency: null,
      status: 'Sent to the municipality',
      reqStreet,
      reStreetNum,
      reqIsDone: false,
      reqDescription,
      reqTitle,
      inCharge: null,
      inspectorComment: null,
    });
    await newRequest.save();
    res.status(201).send(newRequest);
  } catch (error) {
    res.status(500).json([error, error.message]);
  }
};

// Update urgency, status and inCharge //Municipality job
export const municipalityUpdate = async (req, res) => {
  try {
    const { urgency, inCharge } = req.body;
    const update = await Request.findByIdAndUpdate(req.params.id, {
      $set: { urgency: urgency, status: 'Sent to the inspector', inCharge: inCharge },
    });
    if (!update) {
      res.status(400).send('this Request does not exist');
      return;
    }
    res.send(update);
  } catch (error) {
    res.status(500).json([error, error.message]);
  }
};

// Update reqIsDone ,status and inspectorComment //Inspector job
export const inspectorUpdate = async (req, res) => {
  try {
    const { reqIsDone, inspectorComment } = req.body;
    const update = await Request.findByIdAndUpdate(req.params.id, {
      $set: {
        reqIsDone: reqIsDone,
        status: 'Hendeled by the inspector and returned to Municipality',
        inspectorComment: inspectorComment,
      },
    });
    if (!update) {
      res.status(400).send('this Request does not exist');
      return;
    }
    res.send(update);
  } catch (error) {
    res.status(500).json([error, error.message]);
  }
};

// get my request // citizen
export const getCitizenRequests = async (req, res) => {
  try {
    const requests = await Request.find({ ofUser: req.body.ofUser });
    res.send(requests);
  } catch (error) {
    res.status(500).send(error);
  }
};

// get my request // Municipality
export const getMunicipalityRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.send(requests);
  } catch (error) {
    res.status(500).send(error);
  }
};

// get my request // Inspector
export const getInspectorRequests = async (req, res) => {
  try {
    const requests = await Request.find({ inCharge: req.body.inCharge });
    res.send(requests);
  } catch (error) {
    res.status(500).send(error);
  }
};

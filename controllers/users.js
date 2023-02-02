import User from '../models/User.js';


// get Inspectors // Municipality
export const getInspectors = async (req, res) => {
    try{
        const inspectors = await User.find({role:'inspector'})
        res.send(inspectors)
    }catch(error){
        res.status(500).send(error)
    }
}
//Request > Verify > Route
const jwt = require('jsonwebtoken')
const UserModel = require('../model/User')

const authentification  = async(req, res, next) => {
    try {
    const authToken = req.header('Authorization').replace('Bearer ', '');
    const decodedToken = jwt.verify(authToken, 'foo');    
    const user = await UserModel.findOne({_id: decodedToken._id, 'authTokens.authToken': authToken});
     
    if(!user) throw new Error();
    req.user = user;
    next();
    } catch (error) {
     res.status(401).send('Merci de vous authentifier!')   
    }
}  

module.exports = authentification;
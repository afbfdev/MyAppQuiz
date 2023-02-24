const mongoose = require("mongoose")
const validator = require('validator')
const jwt = require('jsonwebtoken');


const User = mongoose.Schema({

    pseudo: {
        type: String,
        required: true
    },

      email: {
        type: String,
        required: true,
        unique: true
      },

      password: {
        type: String,
        required: true,
        minLength: [6, 'Minimum password length is 6 characters']

      },

      confirmPassword: {
        type: String,
        required: true
      },
      authTokens: [{
        authToken: {
          type: String,
          required: true,
        }
      }]
});

User.methods.generateAuthTokenAndSaveUser = async function() {
   const authToken = jwt.sign({_id: this._id.toString()}, 'foo');
   this.authTokens.push({authToken});
   await this.save();
   return authToken;
}

const UserModel = mongoose.model("users",User)
module.exports = UserModel

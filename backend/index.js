const express = require('express');
require('dotenv').config({path: './config/.env'})
const cors = require('cors');
const app = express();
const UserModel = require("./model/User")
const mongoose = require('mongoose');
const authentification = require('./middlewares/authentification')
const nodemailer = require("nodemailer");
var bodyParser = require('body-parser')


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1/Marvel", ()=> console.log('login successfully'))


app.listen(process.env.PORT, ()=> console.log(`server running on port ${process.env.PORT}`))

 app.post('/signUp', async(req, res)=> {
    const user = req.body; 
    //const user = new UserModel(req.body);

 try{
  //const authToken = await user.generateAuthTokenAndSaveUser();
    //res.send({user, authToken})
    const result = await UserModel.findOne({email :user.email, password: user.password})
    if(result){
    res.send("This user already exist");
    console.log("This user already exist");

    }else{
        let newUser = new UserModel(user);
        const saved = await newUser.save() ;
        
        if(saved) {
            res.send('user inserted') ;
            console.log('user inserted') ;
        }else {
            res.send('user not inserted') ;
            console.log('user not inserted') ;
        }
    }
  }catch(err){ res.send(err)
  console.log(err)
  }  
  
  
})

app.post('/logIn', async (req, res) => {
      const user = req.body;
      console.log(req.body)
      try {
        //let result = await UserModel.findOne({email: user.email, password: user.password});
        let resultEmail = await UserModel.findOne({email: user.email})
        let resultPassword = await UserModel.findOne({password: user.password})
        //const authToken = await result.generateAuthTokenAndSaveUser();
        if(!resultEmail){
          res.send('User does not exist');
          console.log('User does not exist');
        }else if (!resultPassword) {
            res.send('Wrong password')
          } 
          else {
            res.send(resultPassword);
            console.log('true')
          }

      }catch(err) {console.log(err.message)}
})


/*

// Créer un formulaire pour réinitialiser le mot de passe
app.get("/forgetpassword", (req, res) => {
  res.send('Forget password')
  
});

// Envoyer un e-mail de réinitialisation de mot de passe

app.post('/forgetpassword', (req, res) => {
 
  const { email } = req.body;
  // Vérifier si l'adresse e-mail existe dans la base de données et que l'utilisateur est autorisé à réinitialiser le mot de passe
  const user = UserModel.findOne((user) => user.email === email);

  // If user not found, return error
  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }

 

    // Si l'adresse e-mail est valide, créer un jeton de réinitialisation de mot de passe

    const token = Math.random().toString(36).slice(-8);

      // Envoyer un e-mail de réinitialisation de mot de passe

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.en.PASSWORD
        }

      })


const mailOptions = {
  from: process.env.EMAIL_USER,
  to: email,
  subject: 'Password Reset Request',
  text: `Your password reset token is: ${token}`
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
 });

// Répondre avec un message de confirmation
res.send('Password reset email sent');

});

*/
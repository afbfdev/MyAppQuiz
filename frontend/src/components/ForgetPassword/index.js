import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgetPassword = () => {

    const [email, setEmail] = useState('');
    const disabled =  email === "";
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email)
        try {
          const response = await axios.post('http://localhost:9000/forgetpassword', { email });
          setMessage(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      
     

  return (
    <div className="signUpLoginBox">
    <div className="slContainer">
            <div className='formBoxLeftForget'>

              </div>
              <div className='formBoxRight'>
                <div className='formContent'>

                    <h2>Mot de passe oublié?</h2> 
                    <form onSubmit={handleSubmit}>
                          
                          <div className='inputBox'>
                              <input onChange={e => setEmail(e.target.value)}  defaultValue={email} type="email" autoComplete="off" required />
                              <label htmlFor="email">Email</label>
                          </div>
                                <button disabled={disabled}>Récupérer</button>
                    </form>
                    <div className="linkContainer">
                        <Link className="simpleLink" to="/login">Déja inscrit? Connectez-vous.</Link>
                    </div>

                </div>

              </div>
    </div>
  
</div>
  )
}

export default ForgetPassword;

import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from '../../Redux/Reducers/UserReducer'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const dispatch = useDispatch();
useSelector(state => state.Users.status)
//const err = useSelector(state => state.Users.error)
//console.log(err)
const navigate = useNavigate()

const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [btn, setBtn] = useState(false);
const [error, setError] = useState('');

useEffect(() => {
    if(password.length > 5 && email !== '') {
        setBtn(true)
    }else if(btn) {
        setBtn(false)
    }
}, [password, email, btn])

const handleSubmit = async (e) => {
      e.preventDefault();
        let result = await dispatch(getUser({user: {email: email, password: password}}))
        console.log(result)
        if (typeof result.payload === 'object'){
        navigate('/welcome')
      }else {
          setError(result.payload)
          //vider les champs
          setEmail('')
          setPassword('')

       }  
      
    } 

  return (
    <div className="signUpLoginBox">
        <div className="slContainer">
                <div className='formBoxLeftLogin'>

                  </div>
                  <div className='formBoxRight'>
                    <div className='formContent'>
                        
                        {error !== '' && <span>{error}</span>}

                        <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>
                              
                              <div className='inputBox'>
                                  <input onChange={e => setEmail(e.target.value)}  value={email} type="email" autoComplete="off" required />
                                  <label htmlFor="email">Email</label>
                              </div>

                              <div className='inputBox'> 
                                  <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required />
                                  <label htmlFor="password">Mot de passe</label>
                              </div>
                                
                                  {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}

                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Nouveau sur Marvel Quiz ? Inscrivez-vous maintenant.</Link>
                            <br/>
                            <Link className="simpleLink" to="/forgetpassword">Mot de passe oublié? Récupérez-le ici.</Link>

                        </div>

                    </div>

                  </div>
        </div>
      
    </div>
  )
}

export default Login;

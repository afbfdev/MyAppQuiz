//import React, { Fragment } from 'react'
import Logout from '../Logout';
import Quiz from '../Quiz';
//import { getUser } from '../../Redux/Reducers/UserReducer'
//import {useDispatch, useSelector} from 'react-redux'
//import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom'




const Welcome = () => {



//const [userSession, setUserSession] = useState(null);


  




  
  
 return (/*userSession === null ? (
    <Fragment>
      <div className="loader"></div>
      <p>Loading....</p>
    </Fragment>
        ) : ( */ 
          <div className="quiz-bg">
        <div className="container">
            <Logout/>
            <Quiz/>
        </div>
    </div> 
        )   
}

export default Welcome;

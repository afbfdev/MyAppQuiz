import React from 'react'
import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip} from 'react-tooltip'




const Logout = (props) => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
        console.log(checked)
     
    const logOut = () => {
        localStorage.clear();
        navigate('/') ;
    } 
        useEffect(() => {
            if(checked){
                console.log("Déconnexion")
                logOut();
            }
        });

        const handleChange = event => {
            setChecked(event.target.checked);
            
            
        }

  return (
    <div className="logoutContainer">
        <label className="switch">
             <input
                onChange={handleChange}
                 type="checkbox"
                 checked={checked}
                

             />  
             <span className="slider round" id="my-element" data-tooltip-content="Déconnexion"></span>
        </label>
        <ReactTooltip anchorId="my-element"
            place="left"
         />

    </div>
  )
}

export default Logout;

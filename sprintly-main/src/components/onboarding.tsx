import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import React, { useState } from "react";
import axios from "axios";

function Onboarding(){
    const [company,SetCompanyData] = useState({
        "Name":"",
        "Logo":""
    })

    const handleChangeCmp = (e:React.ChangeEvent<HTMLInputElement>) => {
        SetCompanyData({
            ...company,[e.target.name]:e.target.value
        });
    }
    const CompanySetup = async () =>{
        try{
            const response = await axios.post('https://localhost:7238/api/Organization/Create');
        }
        catch(error){
            alert(error)
        }
    }
    return(
        <>
        <div className="main column">
            <h3 className="header">Login</h3>
            <div className="form column">
                <input type="email" name="Name" placeholder="text" onChange={handleChangeCmp} />
                <input type="password" name="Logo" placeholder="text" onChange={handleChangeCmp}/>
            </div>
            <button onClick={CompanySetup}>Login</button>

            <p className="accCtr">
                Don't have an account?{" "}
                <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
                    Signup
                </Link>
            </p>
        </div>
        </>
    )
}

export default Onboarding;
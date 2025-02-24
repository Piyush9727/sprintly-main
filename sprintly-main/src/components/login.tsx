import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
    const [loginFormData,SetData] = useState({
        "userName":"",
        "password":""
    });
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/onboarding"); // Redirect to onboarding if user is already logged in
        }
    }, [navigate]);
    
    const [error,SetError] = useState('');
    const handleChangeLogin = (e:React.ChangeEvent<HTMLInputElement>) => {
        SetData({
            ...loginFormData,[e.target.name]:e.target.value
        })
        SetError('');
    };

    const loginButton = async () => {
        SetError("");
        try {
            const response = await axios.post("https://localhost:7238/api/Account/Login", loginFormData);

            // Assuming the response contains a token
            const token = response.data.token;
            if (token) {
                localStorage.setItem("token", token); // Save token
                navigate("/onboarding"); // Redirect to onboarding
            } else {
                SetError("Invalid credentials");
            }
        } catch (error) {
            SetError("Login failed. Please check your credentials.");
        }
    };
    return (
        <div className="main column">
            <h3 className="header">Login</h3>
            <div className="form column">
                <input type="email" name="userName" placeholder="Email" onChange={handleChangeLogin} />
                <input type="password" name="password" placeholder="Password" onChange={handleChangeLogin}/>
            </div>
            <button onClick={loginButton}>Login</button>

            <p className="accCtr">
                Don't have an account?{" "}
                <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
                    Signup
                </Link>
            </p>
        </div>
    );
}

export default Login;

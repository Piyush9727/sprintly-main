import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import { useState } from "react";

function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");  // For error messages
    const [success, setSuccess] = useState(""); // For success messages
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError(""); // Clear error when user starts typing
    };

    const handleSignup = async () => {
        setError(""); // Reset error message
        setSuccess(""); // Reset success message

        try {
            const response = await axios.post("https://localhost:7238/api/Account/SignUp", formData);
            console.log("Signup successful:", response.data);

            setSuccess("Signup successful! Redirecting to login...");

            // Redirect to login after 2 seconds
            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (error: any) {
            console.error("Signup failed:", error);

            if (error.response) {
                // Server responded with an error
                setError(error.response.data.message || "Signup failed. Please try again.");
            } else if (error.request) {
                // Request was made but no response received
                setError("Server is not responding. Try again later.");
            } else {
                // Other errors
                setError("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <div className="main column">
            <h3 className="header">Get Started 👏</h3>
            <div className="form column">
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            </div>
            
            {/* Show error message */}
            {error && <p style={{ color: "red", fontSize:"12px" }}>{error}</p>}
            {/* Show success message */}
            {success && <p style={{ color: "green", fontSize:"12px" }}>{success}</p>}

            <button onClick={handleSignup}>Register</button>

            <p className="accCtr">
                Already have an account?{" "}
                <Link to="/login" style={{ color: "blue", textDecoration: "underline" }}>
                    Login
                </Link>
            </p>
        </div>
    );
}

export default Signup;

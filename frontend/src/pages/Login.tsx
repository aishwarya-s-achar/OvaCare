// Login.js
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', { email, password })
            .then(result => {
                if (result.data === "success") {
                    // Assuming the backend returns user data with name and secret
                    const { name, secret } = result.data;
                    
                    // Store the user info in localStorage
                    localStorage.setItem('user', JSON.stringify({ name, secret }));

                    // Redirect to the home page or community page
                    navigate('/community');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100">
            <div className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="email"
                            id="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            autoComplete="off"
                            name="password"
                            id="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>

                {/* Signup Redirect */}
                <div className="text-center mt-3">
                    <p className="mb-2">Don't have an account?</p>
                    <Link to="/register" className="btn btn-success w-100">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;

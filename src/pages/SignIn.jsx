import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom"; 

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, users } = useAuth(); 
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const storedUsers = users || []; 
        const user = storedUsers.find((u) => u.email === email && u.password === password);
        
        if (user) {
            login(user);
            navigate("/dashboard"); 
        } else {
            alert("Invalid credentials"); 
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form className="p-20 bg-yellow-100 rounded shadow-md" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    className="block mb-2 p-2 border border-gray-300 rounded w-full"
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    className="block mb-2 p-2 border border-gray-300 rounded w-full"
                    required 
                />
                <button 
                    type="submit" 
                    className="bg-black text-white px-4 py-2 rounded w-full hover:bg-yellow-50 transition cursor-pointer"
                >
                    Sign In
                </button>
                <p className="mt-2 text-center">
                    Don't have an account? <Link to="/sign-up" className="text-blue-900">Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default SignIn;

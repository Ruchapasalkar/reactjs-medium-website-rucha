import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useAuth(); 
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp({ email, password }); 
        alert("Account successfully created! You can now sign in.");
        navigate("/sign-in");
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form className="p-6 bg-yellow-100 rounded shadow-md" onSubmit={handleSubmit}>
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
                    className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800 transition cursor-pointer"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;

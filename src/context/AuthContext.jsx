import { createContext, useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
    
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        
        setTimeout(() => {
            const navigate = useNavigate();
            navigate("/dashboard");
        }, 0);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        
        setTimeout(() => {
            const navigate = useNavigate();
            navigate("/sign-in");
        }, 0);
    };

    const signUp = (newUser) => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || []; 
        const updatedUsers = [...storedUsers, newUser]; 
        localStorage.setItem("users", JSON.stringify(updatedUsers)); 
        setUsers(updatedUsers); 
    };

    const authValue = useMemo(() => ({ user, login, logout, signUp, users }), [user, users]);

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

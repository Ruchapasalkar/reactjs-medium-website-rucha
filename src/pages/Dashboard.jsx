import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="p-4">
            <h1 className="text-2xl">
                {user ? `Welcome, ${user.email}!` : "Welcome, Guest!"}
            </h1>
            {user && (
                <button 
                    onClick={logout} 
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                    Logout
                </button>
            )}
        </div>
    );
};

export default Dashboard;

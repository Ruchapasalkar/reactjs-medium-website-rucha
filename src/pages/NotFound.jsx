import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="text-center p-8">
            <h1 className="text-6xl font-bold text-red-600">400</h1>
            <p className="mt-4">
                The page you are looking for does not exist. Go back to the {' '}
                <Link to="/" className="text-blue-600 underline">
                    Homepage
                </Link>
                .
            </p>
        </div>
    );
}

export default NotFound;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Write() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Error getting the correct output');
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4"></h2>
            {loading && <p> Loading output...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {!loading && !error && (
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li key={post.id} className="p-4 border rounded bg-yellow-50">
                            <h3 className="text-xl font-bold">{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Write;
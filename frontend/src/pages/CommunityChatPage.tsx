// CommunityChatPage.js
import React, { useEffect, useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useNavigate } from 'react-router-dom';

const CommunityChatPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Get the user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        } else {
            // Redirect to login page if no user is found
            navigate('/');
        }
    }, [navigate]);

    if (!user) {
        return <div>Loading...</div>; // You can add a loading spinner or message here
    }

    return (
        <div style={{ height: '100vh' }}>
            <ChatEngine
                projectID="your-chat-engine-project-id"
                userName={user.name}
                userSecret={user.secret}
                height="100%"
            />
        </div>
    );
};

export default CommunityChatPage;

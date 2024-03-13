import React, { useState, useEffect } from 'react';
import { GetAllCommunities } from './Managers/CommunitiesManager';
function Communities() {
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        // Fetch communities and update the state
        GetAllCommunities().then((data) => setCommunities(data));
    }, []);

    return (
        <div>
            <h2>Communities</h2>
            <ul>
         {communities.map((community) => (
                    <li key={community.id}>
                        <h3>{community.title}</h3>
                        <p>Date Created: {community.dateCreated}</p>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}

export default Communities;

import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
    const [topTraders, setTopTraders] = useState([]);

    useEffect(() => {
        fetchTopTraders();
    }, []);

    const fetchTopTraders = async () => {
        try {
            const response = await fetch('/api/leaderboard');
            const data = await response.json();
            setTopTraders(data);
        } catch (error) {
            console.error('Error fetching top traders:', error);
        }
    };

    return (
        <div className="leaderboard">
            <h2>Top Traders</h2>
            <ul>
                {topTraders.map((trader, index) => (
                    <li key={index}>
                        <span>{index + 1}. {trader.username}</span> - ${trader.profit}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;

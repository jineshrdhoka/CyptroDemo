import React, { useEffect, useState } from 'react';

const ProfitLossTracker = () => {
    const [profitLoss, setProfitLoss] = useState(0);

    useEffect(() => {
        fetchProfitLoss();
    }, []);

    const fetchProfitLoss = async () => {
        try {
            const response = await fetch('/api/profit-loss');
            const data = await response.json();
            setProfitLoss(data.profitLoss);
        } catch (error) {
            console.error('Error fetching profit and loss data:', error);
        }
    };

    return (
        <div className="profit-loss-tracker">
            <h2>Live Profit and Loss</h2>
            <p>{profitLoss >= 0 ? `Profit: $${profitLoss}` : `Loss: $${Math.abs(profitLoss)}`}</p>
        </div>
    );
};

export default ProfitLossTracker;

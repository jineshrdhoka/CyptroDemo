import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const TradingView = () => {
    const [candlestickData, setCandlestickData] = useState([]);
    const [orderBook, setOrderBook] = useState([]);
    const [depthChart, setDepthChart] = useState([]);

    useEffect(() => {
        fetchCandlestickData();
        fetchOrderBook();
        fetchDepthChart();
    }, []);

    const fetchCandlestickData = async () => {
        try {
            const response = await fetch('https://api.example.com/candlestick');
            const data = await response.json();
            setCandlestickData(data);
            renderCandlestickChart(data);
        } catch (error) {
            console.error('Error fetching candlestick data:', error);
        }
    };

    const fetchOrderBook = async () => {
        try {
            const response = await fetch('https://api.example.com/orderbook');
            const data = await response.json();
            setOrderBook(data);
        } catch (error) {
            console.error('Error fetching order book:', error);
        }
    };

    const fetchDepthChart = async () => {
        try {
            const response = await fetch('https://api.example.com/depthchart');
            const data = await response.json();
            setDepthChart(data);
            renderDepthChart(data);
        } catch (error) {
            console.error('Error fetching depth chart:', error);
        }
    };

    const renderCandlestickChart = (data) => {
        const ctx = document.getElementById('candlestickChart').getContext('2d');
        new Chart(ctx, {
            type: 'candlestick',
            data: {
                datasets: [{
                    label: 'Candlestick Chart',
                    data: data,
                }]
            },
            options: {
                responsive: true,
            }
        });
    };

    const renderDepthChart = (data) => {
        const ctx = document.getElementById('depthChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Depth Chart',
                    data: data,
                }]
            },
            options: {
                responsive: true,
            }
        });
    };

    return (
        <div className="trading-view">
            <div className="chart-container">
                <canvas id="candlestickChart"></canvas>
            </div>
            <div className="order-book">
                <h2>Order Book</h2>
                <ul>
                    {orderBook.map((order, index) => (
                        <li key={index}>{order}</li>
                    ))}
                </ul>
            </div>
            <div className="chart-container">
                <canvas id="depthChart"></canvas>
            </div>
        </div>
    );
};

export default TradingView;

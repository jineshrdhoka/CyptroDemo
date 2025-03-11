document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.coingecko.com/api/v3';

    const fetchCryptoPrices = async () => {
        try {
            const response = await fetch(`${apiUrl}/simple/price?ids=bitcoin,ethereum,litecoin,dogecoin,shiba-inu&vs_currencies=usd`);
            const data = await response.json();
            displayCryptoPrices(data);
        } catch (error) {
            console.error('Error fetching crypto prices:', error);
        }
    };

    const displayCryptoPrices = (prices) => {
        const pricesContainer = document.getElementById('crypto-prices');
        pricesContainer.innerHTML = '';

        for (const [crypto, price] of Object.entries(prices)) {
            const priceElement = document.createElement('div');
            priceElement.className = 'crypto-price';
            priceElement.innerHTML = `${crypto.toUpperCase()}: $${price.usd}`;
            pricesContainer.appendChild(priceElement);
        }
    };

    const registerUser = async (username, password) => {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('User registered successfully');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    const loginUser = async (username, password) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('User logged in successfully');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error logging in user:', error);
        }
    };

    const buyCrypto = async (cryptocurrency, amount) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/trade/buy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ cryptocurrency, amount }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Crypto bought successfully');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error buying crypto:', error);
        }
    };

    const sellCrypto = async (cryptocurrency, amount) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/trade/sell', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ cryptocurrency, amount }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Crypto sold successfully');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error selling crypto:', error);
        }
    };

    fetchCryptoPrices();
});

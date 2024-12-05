'use strict';
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const url = 'https://www.alphavantage.co/query?function=REALTIME_BULK_QUOTES&symbol=MSFT,AAPL,IBM&apikey=demo';

    try {
        const response = await axios.get(url);
        const stocksData = response.data.data || [];

        const msftData = stocksData.find(item => item.symbol === 'MSFT');
        const aaplData = stocksData.find(item => item.symbol === 'AAPL');
        const ibmData = stocksData.find(item => item.symbol === 'IBM');

        const lastUpdatedTime = new Date().toLocaleString();

        if (msftData && aaplData && ibmData) {
            res.render('index', {
                msftStatus: `Current Price: $${msftData.close}`,
                msftData: msftData,
                aaplStatus: `Current Price: $${aaplData.close}`,
                aaplData: aaplData,
                ibmStatus: `Current Price: $${ibmData.close}`,
                ibmData: ibmData,
                lastUpdated: lastUpdatedTime
            });
        } else {
            res.render('index', {
                status: 'Error fetching stock data',
                msftStatus: 'Error',
                aaplStatus: 'Error',
                ibmStatus: 'Error',
                msftData: {},
                aaplData: {},
                ibmData: {},
                lastUpdated: lastUpdatedTime
            });
        }

    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.render('index', { 
            status: 'Error fetching data', 
            msftStatus: 'Error', 
            aaplStatus: 'Error',
            ibmStatus: 'Error',
            lastUpdated: new Date().toLocaleString()
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

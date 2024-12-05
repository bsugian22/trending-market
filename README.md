# Real-Time Stock Data Widget

This is a Node.js-based web application that fetches and displays real-time stock data using the Alpha Vantage API. The widget shows stock data for companies like Microsoft (MSFT), Apple (AAPL), and IBM, including charts for close price and volume.

## Features
- Fetch real-time stock data via the Alpha Vantage API.
- Interactive charts displaying stock prices and volumes for MSFT, AAPL, and IBM.
- Periodic auto-refresh to fetch new data every minute.
- Manual data refresh via a button.

### Installation

Follow these steps to get the project up and running locally.

#### Prerequisites

Make sure you have the following software installed:

-Visit the Node.js official website.

-Download and install the LTS version for better stability.

-Verify the installation by running the following commands in your terminal or command prompt:

 node -v
 
 npm -v


##### Steps to Set Up

1. Clone the repository:

   Clone the project to your local machine:

   https://github.com/bsugian22/trending-market.git

   Find Terminal or Cmd and right click it and choose Run as by Administrator   
   
   cd trending-market

2. Install:

   npm install express

3. run the server

   node index.js

###### Note About the API on Alpha Vantage API

- its only free thats why its not moving i use the apikey = demo its because its giving me error 
https://www.alphavantage.co/query?function=REALTIME_BULK_QUOTES&symbol=MSFT,AAPL,IBM&apikey=demo


import React, { useEffect, useState } from 'react';
import Spinner from './spinner'
import BookTable from './BookTable'

const Dashboard = () => {

  const fakeData = [
    {
      "base_decimals": 8,
      "minimum_order": "25.0 USD",
      "name": "BTC/USD",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "btcusd",
      "description": "Bitcoin / U.S. dollar"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 EUR",
      "name": "BTC/EUR",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "btceur",
      "description": "Bitcoin / Euro"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 GBP",
      "name": "BTC/GBP",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "btcgbp",
      "description": "Bitcoin / British Pound"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 PAX",
      "name": "BTC/PAX",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "btcpax",
      "description": "Bitcoin / Paxos Standard"
    },
    {
      "base_decimals": 5,
      "minimum_order": "25.0 USD",
      "name": "GBP/USD",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "gbpusd",
      "description": "British Pound / U.S. dollar"
    },
    {
      "base_decimals": 5,
      "minimum_order": "25.0 EUR",
      "name": "GBP/EUR",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "gbpeur",
      "description": "British Pound / Euro"
    },
    {
      "base_decimals": 5,
      "minimum_order": "25.0 USD",
      "name": "EUR/USD",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "eurusd",
      "description": "Euro / U.S. dollar"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 USD",
      "name": "XRP/USD",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "xrpusd",
      "description": "XRP / U.S. dollar"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 EUR",
      "name": "XRP/EUR",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "xrpeur",
      "description": "XRP / Euro"
    },
    {
      "base_decimals": 8,
      "minimum_order": "0.001 BTC",
      "name": "XRP/BTC",
      "counter_decimals": 8,
      "trading": "Enabled",
      "url_symbol": "xrpbtc",
      "description": "XRP / Bitcoin"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 GBP",
      "name": "XRP/GBP",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "xrpgbp",
      "description": "XRP / British Pound"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 PAX",
      "name": "XRP/PAX",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "xrppax",
      "description": "XRP / Paxos Standard"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 USD",
      "name": "LTC/USD",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "ltcusd",
      "description": "Litecoin / U.S. dollar"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 EUR",
      "name": "LTC/EUR",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "ltceur",
      "description": "Litecoin / Euro"
    },
    {
      "base_decimals": 8,
      "minimum_order": "0.001 BTC",
      "name": "LTC/BTC",
      "counter_decimals": 8,
      "trading": "Enabled",
      "url_symbol": "ltcbtc",
      "description": "Litecoin / Bitcoin"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 GBP",
      "name": "LTC/GBP",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "ltcgbp",
      "description": "Litecoin / British Pound"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 USD",
      "name": "ETH/USD",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "ethusd",
      "description": "Ether / U.S. dollar"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 EUR",
      "name": "ETH/EUR",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "etheur",
      "description": "Ether / Euro"
    },
    {
      "base_decimals": 8,
      "minimum_order": "0.001 BTC",
      "name": "ETH/BTC",
      "counter_decimals": 8,
      "trading": "Enabled",
      "url_symbol": "ethbtc",
      "description": "Ether / Bitcoin"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 GBP",
      "name": "ETH/GBP",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "ethgbp",
      "description": "Ether / British Pound"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 PAX",
      "name": "ETH/PAX",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "ethpax",
      "description": "Ether / Paxos Standard"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 USD",
      "name": "BCH/USD",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "bchusd",
      "description": "Bitcoin Cash / U.S. dollar"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 EUR",
      "name": "BCH/EUR",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "bcheur",
      "description": "Bitcoin Cash / Euro"
    },
    {
      "base_decimals": 8,
      "minimum_order": "0.001 BTC",
      "name": "BCH/BTC",
      "counter_decimals": 8,
      "trading": "Enabled",
      "url_symbol": "bchbtc",
      "description": "Bitcoin Cash / Bitcoin"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 GBP",
      "name": "BCH/GBP",
      "counter_decimals": 2,
      "trading": "Enabled",
      "url_symbol": "bchgbp",
      "description": "Bitcoin Cash / British Pound"
    },
    {
      "base_decimals": 5,
      "minimum_order": "25.0 USD",
      "name": "PAX/USD",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "paxusd",
      "description": "Paxos Standard / U.S. dollar"
    },
    {
      "base_decimals": 5,
      "minimum_order": "25.0 EUR",
      "name": "PAX/EUR",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "paxeur",
      "description": "Paxos Standard / Euro"
    },
    {
      "base_decimals": 5,
      "minimum_order": "25.0 GBP",
      "name": "PAX/GBP",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "paxgbp",
      "description": "Paxos Standard / British Pound"
    },
    {
      "base_decimals": 8,
      "minimum_order": "0.001 BTC",
      "name": "XLM/BTC",
      "counter_decimals": 8,
      "trading": "Enabled",
      "url_symbol": "xlmbtc",
      "description": "Stellar Lumens / Bitcoin"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 USD",
      "name": "XLM/USD",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "xlmusd",
      "description": "Stellar Lumens / U.S. dollar"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 EUR",
      "name": "XLM/EUR",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "xlmeur",
      "description": "Stellar Lumens / Euro"
    },
    {
      "base_decimals": 8,
      "minimum_order": "25.0 GBP",
      "name": "XLM/GBP",
      "counter_decimals": 5,
      "trading": "Enabled",
      "url_symbol": "xlmgbp",
      "description": "Stellar Lumens / British Pound"
    }
  ]
  const [data, setData] = useState({})
  const [searchTerm, setSearchTerm] = useState('btcusd')
  const [unsubscribeFromCurrentStream, setUnsubscribeFromCurrentStream] = useState(false)
  const [fromCurrency, toCurrency] = searchTerm.toUpperCase().match(/.{1,3}/g);
  const query = `order_book_${searchTerm}`;


  // I COULD NOT USE THIS DUE TO CORS ISSUE SO I RESULTED TO  MOCKING THE CONTENTS OF THE HTTP API FOR FETCHING CURRENCY PAIRS LOCALLY

                // const getPairs = async () =>{
                //   const result = await fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/')
                //   const response = await result.json()
                //   return response.body
                // }

                // const data = getPairs();



  useEffect(() => {
    const subscriber = JSON.stringify({
      "event": "bts:subscribe",
      "data": {
        "channel": query
      }
    })
    
    const unsubscriber = JSON.stringify({
      "event": "bts:unsubscribe",
      "data": {
        "channel": query
      }
    })

    const socket = new WebSocket('wss://ws.bitstamp.net')
    socket.onopen = () => {
      console.log('connection open');
      if (unsubscribeFromCurrentStream && !socket.CONNECTING) {
        socket.send(unsubscriber)
        setUnsubscribeFromCurrentStream(false)
      }
      socket.send(subscriber)
    };

    socket.onmessage = e => {
      const response = JSON.parse(e.data);
      setData(response.data);
    };

    socket.onclose = () => {
      console.log('connection closed');
      socket.close()
    };

    return (() => {
      socket.send(unsubscriber)
      socket.close()
    })

  }, [query, unsubscribeFromCurrentStream])

  const { bids, asks } = data;


  const changesubscription = e => {
    if (e.target.value !== searchTerm) {
      setUnsubscribeFromCurrentStream(true)
      setSearchTerm(e.target.value)
    }
  }

  return (
    <section className="px-32 py-8 bg-gray-200 min-h-screen	">
      <div className="p-4 font-bold w-full">
        <select name="lagibunz" id="" className="w-full border-2 border-blue-800 p-2" onClick={changesubscription}>
          {fakeData.map((data => (<option key={data.url_symbol} className="p-2" value={data.url_symbol} >{data.description}</option>)))}
        </select>
      </div>
        {bids ?
        <div className="flex">
          <BookTable toCurrency={toCurrency} fromCurrency={fromCurrency} orders={bids} title="Bids"/>
          <BookTable toCurrency={toCurrency} fromCurrency={fromCurrency} orders={asks} title="Asks"/>
        </div>
      : <Spinner/>
      }
    </section>
  );
};
export default Dashboard;

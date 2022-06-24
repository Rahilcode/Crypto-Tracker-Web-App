import React from 'react';
import Navbar from "./Navbar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Coin from './Coin';

function Coins() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [mode, setMode] = useState('dark');
    // const [currency, setCurrency] = useState('usd');

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false`)
        .then((res) => {
          setCoins(res.data)
          // console.log(coins);
        }).catch((err) => console.log(err))
        // eslint-disable-next-line
      }, [])

      const handleChange = (e) => {
        setSearch(e.target.value);
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
      }

      const toggleMode = (e) => {
        e.preventDefault();
        const newMode = (mode === 'dark' ? 'light' : 'dark');
        setMode(newMode);
        // console.log(newMode);
      }

      // const handleCurrency = (e) => {
      //   setCurrency(e.target.value);
      //   // console.log(currency);
      // }

      const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))
            

  return (
    <>
    <div className={`${mode}`}>

          <Navbar toggleMode={toggleMode}/>

          <div className="info">
            <p className="para-info">Crypto-Track - The top 200 cryptocurrency tracker.</p>
          </div>

          <div className="container">

            <form className="form" onSubmit={handleSubmit}>
              <label className="label" htmlFor="crypto"> <i className="fas fa-search"></i></label>
              <input className="search-bar" type="text" id="crypto" name="crypto" placeholder="Search" value={search} onChange={handleChange} />
              {/* <div className="currency">
                    <label htmlFor="cur">Choose Currency</label>

                    <select name="cur" id="cur" onChange={handleCurrency}>
                      <option value="usd">USD</option>
                      <option value="inr">INR</option>
                    </select>
              </div> */}
            </form>

            <div className="header">
                <div className="header-container">
                  <p className="headings">Rank</p>
                  <p className="headings">Coin</p>
                  <p className="headings">Symbol</p>
                  <p className="headings">Price</p>
                  <p className="headings">Volume</p>
                  <p className="headings">Percent</p>
                  <p className="headings mrcap">Market Cap</p>
                </div>
            </div>

              {filteredCoins.map((coin) => {
                return <Coin 
                key={coin.id}
              rank={coin.market_cap_rank}
              img={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              percentage={coin.price_change_percentage_24h}
              volume={coin.total_volume}
              marketCap={coin.market_cap}
            
              />
            })}

            {/* <div className="button-container">
                <button className="btn prev mode" onClick={handlePrev}>Prev</button>
                <button className="btn next mode" onClick={handleNext}>Next</button>
            </div> */}
                           
          </div>

      </div>
        </>
    )
}

export default Coins

import React from 'react';
import '../css/Coin.css';

function Coin(props) {


    const { rank, img, name, symbol, price, percentage, volume, marketCap} = props;

    console.log(rank);
    return (
        <>
           <div className="coin-container">
               <div className="row">
                   {/* <div className="row-one">
                        <p className="rank">{rank}</p>
                        <img src={img} alt={name} />
                        <h1>{name}</h1>
                        <p className="symbol">{symbol}</p>
                   </div>
                   <div className="row-two">
                        <p className="price">${price}</p>
                        <p className="volume">{volume.toLocaleString()}</p>
                        {percentage < 0 ? ( 
                        <p className="percent red"> <i className="fas fa-arrow-down"></i> {percentage.toFixed(2)}%</p> 
                        ) : (
                        <p className="percent green"> <i className="fas fa-arrow-up"></i> {percentage.toFixed(2)}%</p> )}
                        <p className="market_cap">${marketCap.toLocaleString()}</p>
                   </div> */}
                   <div className="row-one">
                   <p className="rank">{rank}</p>
                        <img src={img} alt={name} />
                        <h1>{name}</h1>
                        <p className="symbol">{symbol}</p>
                        <p className="price">${price.toLocaleString() === '0' ? price : price.toLocaleString()}</p>
                        <p className="volume">${volume.toLocaleString()}</p>
                        {/* <p className="price">{currency === 'inr' ? '₹' : '$'}{price.toLocaleString() === '0' ? price : price.toLocaleString()}</p>
                        <p className="volume">{currency === 'inr' ? '₹' : '$'}{volume.toLocaleString()}</p> */}
                        {percentage === null ? <p className="percent red">---</p> :
                        percentage < 0 ? ( 
                        <p className="percent red"> <i className="fas fa-arrow-down"></i> {percentage.toFixed(2)}%</p> 
                        ) : (
                        <p className="percent green"> <i className="fas fa-arrow-up"></i> {percentage.toFixed(2)}%</p> )}

                        <p className="market_cap">${marketCap.toLocaleString()}</p>
                        {/* <p className="market_cap">{currency === 'inr' ? '₹' : '$'}{marketCap.toLocaleString()}</p> */}
                   </div>
               </div>
           </div>
        </>
    )
}

export default Coin

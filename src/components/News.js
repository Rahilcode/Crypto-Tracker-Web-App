import React from 'react'
import NewsCard from './NewsCard'
import '../css/News.css'
import Navbar from './Navbar'

function News() {
    return (
        <>
            <Navbar />
            {/* <h1 className="news-head">Crypto news</h1> */}
            <div className="news-container">
                <h1>Crypto News</h1>
                <div className="news-wrapper">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>
        </>
    )
}

export default News

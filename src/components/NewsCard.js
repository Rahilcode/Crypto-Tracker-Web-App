import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/News.css';

function NewsCard() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
        .then((response) => {
            console.log(response.data.articles);
            setNews(response.data.articles);
        })
    }, [])

    return (
        <>
            {news.map((article, index)=>{
                return <div key={index} className="news-card">
                    <a href={article.url}>
                <div className="news-img">
                     <img src={article.urlToImage} alt="News image" />
                </div>
                <div className="news-info">
                     <h3 className="news-title">{article.title}</h3>
                     <p>{article.description}</p>
                     <h5>-{article.author}</h5>
                </div> </a>
             </div> 
            })}
           {/* <div className="news-card">
               <div className="news-img">
                    <img src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
               </div>
               <div className="news-info">
                    <h2 className="news-title"></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, corrupti...</p>
               </div>
            </div>  */}
        </>
    )
}

export default NewsCard

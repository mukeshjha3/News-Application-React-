import React, { useEffect, useState } from 'react'
import NewsTab from './NewsTab'

//https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=4e293bb45734477abf0cd619fca53dd9
const Getnews = ({ctgry,cntry}) => {
  
    const [article, setArticle] = useState([]);

    useEffect(() => {
        let apiKey = "4e293bb45734477abf0cd619fca53dd9";
        fetch(`https://newsapi.org/v2/top-headlines?country=${cntry}&category=${ctgry}&apiKey=${apiKey}`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setArticle(response.articles);
            console.log(response.articles);
        }).catch((error) => {
            console.log("something went wrong", error);
        });
    },[ctgry,cntry]);

    return (
        <div>
            <h2 className='text-center'>Latest <span className="btn btn-danger">News</span></h2>
            {article.map((art, index) => (
                <NewsTab key={index} title={art.title} description={art.description} src={art.urlToImage} url={art.url} />
            ))}
        </div>
    );
};

export default Getnews;
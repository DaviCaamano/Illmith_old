import React, {useState, useEffect} from 'react';


const fetchNews = () => {

}

const NewsContainer = (props) => {

    const [articles, setArticles] = useState([]);


    useEffect(() => fetchNews().then(res => setArticles(res.news) ), [])

    const newsItems = [];

    for(let i in articles)
        newsItems.push(
            <div key={i}>
                { articles[i].title }
            </div>
        )

    return (
        <div>
            { newsItems }
        </div>
    )
}

export default NewsContainer;
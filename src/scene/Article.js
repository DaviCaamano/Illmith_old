import React, { useState, useEffect, useRef } from 'react'
import {useLocation} from "react-router-dom";
import axios from "axios";

//css
import './css/Article.css'

//Containers
import ArticleContentContainer from "../common/articleContent/ArticleContentContainer";


const Article = () => {

    const currentUrl = useLocation().pathname;
    const lastUrl = useRef('');
    const [contents, setContents] = useState({});

    useEffect(() => {

        console.log('!!!lastUrl.current !== currentUrl')
        console.log(lastUrl.current !== currentUrl)
        if(lastUrl.current !== currentUrl){

            lastUrl.current = currentUrl;
            axios({
                method: 'get',
                url:  process.env.REACT_APP_API_URL + '/articles/',
                params: { path: currentUrl.split('world/').pop() }
            }).then((resp) => {

                const {title, content, parent, children} = resp.data;

                //search the content for sections, the create a list of sections and a ref we can use to scrollIntoView.
                const sectionTitleRegex = /\n#\s.*/g;
                const sections = [];
                let match;
                // eslint-disable-next-line no-cond-assign
                while(match = sectionTitleRegex.exec(content))
                    sections.push({
                        title: match[0].replace(/\n#\s/g, ''),
                        ref: React.createRef()
                    })


                setContents({ title, parent, children, sections, markdown: content })
            })
                .catch(() => setContents({ title: '404 NOT FOUND', markdown: '__title'}))
        }
    // eslint-disable-next-line
    })

    if(typeof contents.markdown !== 'undefined' && typeof contents.title !== 'undefined')
        return (
            <ArticleContentContainer
                title={contents.title}
                markdown={contents.markdown}
                sections={contents.sections}
                parent={contents.parent}
                children={contents.children}
            />
        )
    return <></>

}

export default Article;
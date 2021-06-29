//Components
import SectionTitle from "../../common/articleContent/sectionTitle/SectionTitle";
import ArticleNavbar from "../../common/articleContent/articleNavbar/ArticleNavbar";

const options = (sections, parent, children) => {

    return ({
        overrides: {
            img: {
                component: ({children, alt, ...props}) => {

                    let style;
                    if(alt.startsWith('&lt;')){

                        alt = alt.slice(4)
                        style = {
                            float: 'left',
                            marginRight: '15px'
                        }
                    }
                    else if(alt.startsWith('&gt;')){

                        alt = alt.slice(4)
                        style = {
                            float: 'right',
                            marginLeft: '15px'
                        }
                    }
                    else style = {
                            position: 'relative',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }

                    return (
                        <img alt={alt} style={style} {...props}>{children}</img>
                    )
                },
            },
            h1: {
                component: SectionTitle,
                props: { sections },
            },
            articleNavbar: {
                component: ArticleNavbar,
                props: { sections, parent, children }
            },
        },
        forceInline: true
    })
}

export default options;


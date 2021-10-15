import React from 'react';
import moment from "moment";
import Link from 'next/link';

function CustomCards({article}) {
    return (
        <div className="card_container">
           <img src={article.image?.url} alt="" className="card_img" />
           <div className="card_contents">
               <div className="card_meta">
                   <span className="post_title">
                   {moment(article.createdAt).format("MMM Do YY")}
                   </span>
               </div>
               <h2 className="card_title">
               {`${article.title.length > 45 ? article.title.substring(0, 45) + "..." : article.title}`}
               </h2>
               <p className="card_description">
               {`${article.description.length >= 100 ? article.description.substring(0,100) + "..." : article.description}`}
               </p>


               <Link href={`/articles/${encodeURIComponent(article.slug)}`}>
                  <a>
              <span className="button button--flex button--small button--link card_button">
              
                Read More <i className="uil uil-arrow-right button_icon"></i>
               
              </span>
              </a>
                </Link>

           </div>
        </div>
    )
}

export default CustomCards

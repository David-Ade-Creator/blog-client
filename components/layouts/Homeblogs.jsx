
import React from "react";
import Link from 'next/link';
import CustomCards from "./card";

export default function HomeBlogs ({blogs,title,subtitle,readMoreLink}){
    const [blogList, setBlogList] = React.useState([]);

    React.useEffect(()=>{
        setBlogList(blogs);
    },[blogs]);

    return (<section className="blogs section">
    <h2 className="section_title">{title}</h2>
    <span className="section_subtitle">
      {subtitle}
    </span>
    <div className="home_cards_container container">
      {blogList?.map(
        (singleBlog, i) => i < 6 && <CustomCards article={singleBlog} key={singleBlog._id} />
      )}
    </div>
   {blogList?.length >= 6 ? <div className="more_container container">
      <span className="button_primary"><Link href={readMoreLink}><a style={{color:"white"}}>Read more</a></Link></span>
    </div> : "" }
  </section>)
  };

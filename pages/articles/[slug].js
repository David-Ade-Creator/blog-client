import moment from 'moment';
import React from 'react'
import MarkdownIt from "markdown-it";
import { Layout } from '../../components/layouts';
import { useRouter } from 'next/router'

function ArticlesDetails({article}) {
    const router = useRouter()
    const md = new MarkdownIt();
    const htmlContent = md.render(article.content);

    return (
        <Layout>

      <section className="blog_detail section">
          <div className="blog_detail_container container">
              <div className="advert_banner">
                  <div className="advert_card_banner">
                      Ads card
                  </div>
              </div>

          
          <div className="detail_header">
              <div><span onClick={() => router.back()} style={{cursor:"pointer"}}><i class="uil uil-history-alt details_icon"></i>Back</span></div>
              <div className="share_buttons">
              <span ><i class="uil uil-facebook details_icon"></i><span className="share_button">Share</span></span>
              <span><i class="uil uil-instagram-alt details_icon"></i><span className="share_button">Share</span></span>
              <span><i class="uil uil-twitter details_icon"></i><span className="share_button">Share</span></span>
              <span><i class="uil uil-whatsapp-alt details_icon"></i><span className="share_button">Share</span></span>
              </div>
          </div>

          <hr />

          <div className="blog_post_details">
              
              <h3>{article.title}</h3>
              <p>{moment(article.createdAt).format("MMM Do YY")}</p>
              <div className="content_container">
                  <div className="content_section">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: htmlContent,
                    }}
                  ></div>
                  </div>
                  
                  <div className="advert_section">
                      <div className="advert_card">
                      Ads card
                      </div>
                  </div>
                  </div>
              
              
          </div>

          </div>
      </section>
    </Layout>
    )
}


export async function getStaticProps(context){
    const slug = context.params.slug;

    const res = await fetch("https://halftimers.herokuapp.com/articles");

    const articles = await res.json();

    const article = await articles?.find(
        (singleArticle) => singleArticle?.slug === slug
      );


      return {
          props: {article},
          revalidate: 10,
      }
}

export async function getStaticPaths() {
    const res = await fetch("https://halftimers.herokuapp.com/articles");

    const articles = await res.json();
  
    const paths = articles?.map((singleArticle) => ({
      params: { slug: singleArticle?.slug },
    }));


    return {
      paths: paths || [],
      fallback: false,
    };
  }

export default ArticlesDetails;

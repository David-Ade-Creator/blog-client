import React from "react";
import { Banner, Layout } from "../components/layouts";
import CustomCards from "../components/layouts/card";
import NProgress from "nprogress";

export default function Home(props) {
  const { articles } = props;
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    setBlogs(articles);
  }, [articles]);

  return (
    <Layout>
      <Banner />
      <section className="blogs section">
        <h2 className="section_title">Latest blogs</h2>
        <span className="section_subtitle">
          Keep yourself up to date with the latest football news
        </span>
        <div className="home_cards_container container">
          {blogs.map(
            (singleBlog, i) => i < 6 && <CustomCards article={singleBlog} key={singleBlog._id} />
          )}
        </div>
        <div className="more_container container">
          <span className="button_primary">Read more</span>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://halftimers.herokuapp.com/articles");

  const articles = await res.json();

  return {
    props: { articles },
  };
}

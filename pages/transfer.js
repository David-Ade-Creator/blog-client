import React from 'react';
import { Layout, CustomCards } from "../components/layouts";

function Transfer({articles}) {
  const [transfer, setTransfer] = React.useState([]);

  React.useEffect(() => {
    setTransfer(articles.filter(article => article.category?.name === "transfers"));
  }, [articles]);

    return (
        <Layout>
        <section style={{padding:"2.5rem 0"}}>
            <div className="home_cards_container container">
      {transfer?.map(singleBlog => <CustomCards article={singleBlog} key={singleBlog._id} />)}
    </div>
        </section>
        </Layout>
    )
}

export async function getStaticProps() {
  const res = await fetch("https://halftimers.herokuapp.com/articles");

  const articles = await res.json();

  return {
    props: { articles },
  };
}

export default Transfer;
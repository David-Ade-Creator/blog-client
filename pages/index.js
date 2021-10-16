import React from "react";
import { Banner, Layout } from "../components/layouts";
import HomeBlogs from "../components/layouts/Homeblogs";

export default function Home(props) {
  const { articles } = props;
  const [latest, setLatest] = React.useState([]);
  const [ChampionsLeague, setChampionsLeague] = React.useState([]);
  const [league, setleague] = React.useState([]);
  const [transfer, setTransfer] = React.useState([]);


  React.useEffect(() => {
    setLatest(articles.filter(article => article.category?.name === "toprated"));
    setChampionsLeague(articles.filter(article => article.category?.name === "championsleague"));
    setleague(articles.filter(article => article.category?.name === "leagues"));
    setTransfer(articles.filter(article => article.category?.name === "transfers"));
  }, [articles]);


  return (
    <Layout>
      <Banner />
      <HomeBlogs blogs={latest} noLink title="Latest News" subtitle="Stay updated with latest news in the footbal world" />
      <HomeBlogs blogs={transfer} readMoreLink="/transfer" title="Transfer News" subtitle="Stay updated with transfer news in the footbal world" />
      <HomeBlogs blogs={ChampionsLeague} readMoreLink="/championsleague"  title="Champions League" subtitle="Read latest and updated champions league news" />
      <HomeBlogs blogs={league} readMoreLink="/leagues" title="Leagues" subtitle="Latest news from all football leagues worldwide" />
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

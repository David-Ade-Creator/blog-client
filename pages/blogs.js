import React from "react";
import { Layout } from "../components/layouts";
// import CustomCards from "../components/layouts/card";

export default function Blogs() {
  return (
    <Layout>
      {/* <Banner /> */}
      <section className="blogs section">
      <h2 className="section_title">Latest blogs</h2>
          <span className="section_subtitle">Keep yourself up to date with the latest football news</span>
        <div className="blogs_container container">
          {/* <CustomCards />
          <CustomCards />
          <CustomCards /> */}
        </div>
      </section>
    </Layout>
  )
}
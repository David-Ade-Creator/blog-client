import React from 'react'
import { Layout, Banner } from '../components/layouts'

function Dynamic() {
    return (
     <Layout>
         <Banner />
      <section className="blog_detail section">
          <div className="blog_detail_container container">

          
          <div className="detail_header">
              <div><span><i class="uil uil-history-alt details_icon"></i>Back</span></div>
              <div className="share_buttons">
              <span><i class="uil uil-facebook details_icon"></i>Share</span>
              <span><i class="uil uil-instagram-alt details_icon"></i>Share</span>
              <span><i class="uil uil-twitter details_icon"></i>Share</span>
              <span><i class="uil uil-whatsapp-alt details_icon"></i>Share</span>
              </div>
          </div>

          <hr />

          <div className="blog_post_details">
              <p>Aug 3rd 2021</p>
              <h3>Blog Title</h3>
              <p>Blog description comes here</p>
              <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. 


“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”

You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.


Create Relevant Content

Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. 


Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now.</p>
          </div>

          </div>
      </section>
    </Layout>
    )
}

export default Dynamic

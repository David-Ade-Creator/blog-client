import React from 'react'

function CustomCards() {
    return (
        <div className="card_container">
           <img src="https://www.a2hosting.com/blog/content/uploads/2018/07/man-holding-camera.png" alt="" className="card_img" />
           <div className="card_contents">
               <div className="card_meta">
                   <span className="post_title">
                   Aug 11 1 min
                   </span>
               </div>
               <h2 className="card_title">
                   This is the first post card
               </h2>
               <p className="card_description">
               Create a blog post subtitle that summarizes your post in a
               few short, punchy sentences and entices your audience to 
               continue reading....
               </p>
              <span className="button button--flex button--small button--link card_button">
                Read More <i className="uil uil-arrow-right button_icon"></i>
              </span>
           </div>
        </div>
    )
}

export default CustomCards

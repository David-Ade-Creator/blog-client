import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <div className="footer_contents">
                <span className="footer_description">
                    <h3>The Halftimers</h3>
                    <p>Stay up to date with latest football news, latest transfers and champions league updates</p>
                </span>
                <ul className="footer_social">
                    <li><a href=""><i class="uil uil-twitter social_icon"></i></a></li>
                    <li><a href=""></a><i class="uil uil-facebook social_icon"></i></li>
                    <li><a href=""></a><i class="uil uil-instagram-alt social_icon"></i></li>
                </ul>
                <div className="footer_gallery">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/3633/1063633-h-315b891b0052" alt="" className="footer_img" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/3633/1063633-h-315b891b0052" alt="" className="footer_img" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/3633/1063633-h-315b891b0052" alt="" className="footer_img" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/3633/1063633-h-315b891b0052" alt="" className="footer_img" />
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

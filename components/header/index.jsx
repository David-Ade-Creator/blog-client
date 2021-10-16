import React from 'react';
import Link from 'next/link';

function Header() {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [navbarVisible, setNavbarVisible] = React.useState(false);

    const toggleNavbar = () =>{
        setNavbarVisible(!navbarVisible)
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrollPosition >= "80" ? "scroll-header" : ""}`}>
            <div className="nav_container container">
              <div className="logo"><Link href="/"><a>The Halftimers</a></Link></div>
              <ul className={`nav_links_container ${navbarVisible ? "show_nav_links" : ""}`}>
                  <li ><Link href="/transfer"><a className="nav_link active_link">Transfer</a></Link></li>
                  <li ><Link href="/championsleague"><a className="nav_link">Champions-League</a></Link></li>
                  <li ><Link href="/league"><a className="nav_link">League</a></Link></li>
                 
              </ul>
              <span className="button_secondary header_button" onClick={toggleNavbar}><i class="uil uil-align-justify"></i></span>
            </div>
        </header>
    )
}

export default Header;

import React from 'react';
import Link from 'next/link';

function Header({className}) {
    const [scrollPosition, setScrollPosition] = React.useState(0);
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
              <button className="button_secondary header_button"><i class="uil uil-align-justify"></i></button>
            </div>
        </header>
    )
}

export default Header;

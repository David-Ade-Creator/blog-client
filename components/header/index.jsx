import React from 'react';
import { jsx, Container, Flex, Button } from 'theme-ui';

function Header() {
    return (
        <header>
            <Container>
                <div>Logo</div>
            <Button
            // className="donate__btn"
            // variant="secondary"
            // aria-label="Get Started"
          >
            Get Started
          </Button>
            </Container>
        </header>
    )
}

export default Header

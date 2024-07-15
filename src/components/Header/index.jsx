import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="https://youtube.com/easyfrontend"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Easy Frontend
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                           
                            className="header__link"
                            to="/signIn"
                            activeclassname ="header__link--active"
                        >
                            Sign in
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;

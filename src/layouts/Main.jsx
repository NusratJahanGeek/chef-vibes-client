import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../pages/Shared/Navigation/Navigation';
import Home from '../pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Home></Home>
            <Container>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
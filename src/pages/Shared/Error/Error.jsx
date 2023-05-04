import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ErrorImage from '../../../assets/Error.webp'

const Error = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center mb-5'>
                <img src={ErrorImage} width={500} alt="" />
                <div className='text-center'>
            <h2>404 Page Not Found</h2>
            <p>Please Provide A Valid URL or Use The Above Navbar</p>
        </div>
        </Col>
            </Row>
        </Container>
    );
};

export default Error;
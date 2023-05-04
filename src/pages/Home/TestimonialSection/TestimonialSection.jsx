import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Testimonial1 from '../../../assets/Testimonial1.jpg'
import Testimonial2 from '../../../assets/Testimonial2.jpg'
import Testimonial3 from '../../../assets/Testimonial3.jpg'

const TestimonialSection = () => {
  return (
      <Container className="text-light py-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center mb-5">
            <h2>Testimonials</h2>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={6} className="mx-auto">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-20 mx-auto"
                  src={Testimonial1} width="100" height="100"
                  alt="Jane Doe"
                />
                <p className="testimonial-text my-4 px-5">
                  "The recipes on this site are absolutely amazing! I especially love the masala chai and paneer butter masala. Thank you for sharing your knowledge with us."
                </p>
                <h4 className="testimonial-name">Priya Sharma</h4>
                <h6 className="testimonial-position mb-5 mx-5">CEO, ABC Inc.</h6>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-20 mx-auto"
                  src={Testimonial2} width="100" height="100"
                  alt="Jane Doe"
                />
                <p className="testimonial-text my-4 px-5">
                  "Being a big foodie, I always experiment with new recipes. This website has been a godsend for me as it has given me an endless list of recipes to try out. The biryani recipe is my favorite and a huge hit in my family."
                </p>
                <h4 className="testimonial-name">Nidhi Patel</h4>
                <h6 className="testimonial-position mb-5 mx-5">
                  Marketing Manager, XYZ Corp.
                </h6>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-20 mx-auto"
                  src={Testimonial3} width="100" height="100"
                  alt="Jane Doe"
                />
                <p className="testimonial-text my-4 px-5">
                  "I have always struggled with cooking Indian food, but this website has made it so much easier for me. The step-by-step instructions are easy to follow and the final product is always delicious. Thank you for making Indian cooking accessible to everyone."
                </p>
                <h4 className="testimonial-name">Rahul Mehra</h4>
                <h6 className="testimonial-position mb-5 mx-5">CTO, PQR Corp.</h6>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
  );
};

export default TestimonialSection;

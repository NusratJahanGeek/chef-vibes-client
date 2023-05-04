import React from 'react';
import './Header.css'
import { Carousel } from 'react-bootstrap';
import rice from '../../../assets/rice.jpg'
import panipuri from '../../../assets/panipuri.jpg'
import dosa from '../../../assets/dosa.jpg'

const Header = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rice}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='pb-4'>Discover The Magic Of Indian Cuisine</h1>
            <h3>ChefVibes - Your Ultimate Recipe Destination!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={panipuri}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h1 className='pb-4'>Discover The Magic Of Indian Cuisine</h1>
            <h3>ChefVibes - Your Ultimate Recipe Destination!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dosa}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h1 className='pb-4'>Discover The Magic Of Indian Cuisine</h1>
            <h3>ChefVibes - Your Ultimate Recipe Destination!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Header;
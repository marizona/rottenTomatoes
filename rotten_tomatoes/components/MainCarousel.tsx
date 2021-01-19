import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MainCarousel = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= "https://otakunext.com/wp-content/uploads/2017/11/Superhero-Movies-2017-News-Cover.jpg"  
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://teaser-trailer.com/wp-content/uploads/John-Wick-2-New-Banner.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/ad/2d/54/ad2d54f16f976bba2c04523564cc0fc9.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <style jsx>{`
            
                margin-left: auto;
                margin-right: auto;
                width: 100%;
                height: 500px;
                
                `}    
            </style>
        </div>
    );
};

export default MainCarousel;
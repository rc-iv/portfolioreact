import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from './Portfolio.module.css';

function Portfolio() {
    return (
        <React.Fragment>
            <div className={style['portfolio-header']}>
                <h1>Projects</h1>
            </div>
            <div className={style['portfolio-container']}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <a href="https://www.floor20.io" target="_blank" rel='noreferrer'>
                            <img
                                className={style['portfolio-image']}
                                src="https://i.imgur.com/gUQ3Y3Q.jpeg?text=First slide&bg=373940"
                                alt="First slide"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='https://www.fakestats.io' target="_blank" rel='noreferrer'>
                            <img
                                className={style['portfolio-image']}
                                src="https://i.imgur.com/HS9bXuH.jpeg?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://rciv-web3-blog.herokuapp.com/" target="_blank" rel='noreferrer'>
                            <img
                                className={style['portfolio-image']}
                                src="https://i.imgur.com/l4cl9vN.jpeg?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </React.Fragment>
    );
}

export default Portfolio;
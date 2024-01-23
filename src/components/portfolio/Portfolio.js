import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./Portfolio.module.css";

function Portfolio() {
  return (
    <React.Fragment>
      <div className={style["portfolio-container"]}>
        <Carousel>
          <Carousel.Item>
            <a
              href="https://www.rmndrbot.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={style["portfolio-image"]}
                src="https://i.imgur.com/QVmbMtF.jpg"
                alt="RMNDR Discord Bot"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item> 
            <a
              href="https://abyssalinfinity.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={style["portfolio-image"]}
                src="https://i.imgur.com/o3JC08T.jpg"
                alt="Abyssal Infinity"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://ezthanks.cards" target="_blank" rel="noreferrer">
              <img
                className={style["portfolio-image"]}
                src="https://i.imgur.com/QM00CFp.jpeg"
                alt="EZThanks AI thank you cards"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href="https://rciv-web3-blog.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={style["portfolio-image"]}
                src="https://i.imgur.com/l4cl9vN.jpeg?text=Third slide&bg=20232a"
                alt="NFT blog"
              />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
}

export default Portfolio;

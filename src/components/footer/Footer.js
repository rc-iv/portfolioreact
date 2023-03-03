import React from "react";
import style from './Footer.module.css';

const Footer = () => {
    return (
            <div className={style['footer-cont']}>
                <a href="https://www.twitter.com/rcivnft" target="_blank" rel="noreferer" className={style['footer-icon']}><i className="fa-brands fa-twitter fa-2xl"></i></a>
                <a href="https://www.linkedin.com/in/raymond-cook-iv-4ba20138/" target="_blank" rel="noreferer" className={style['footer-icon']}><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                <a href="https://github.com/rc-iv" target="_blank" rel="noreferer" className={style['footer-icon']}><i className="fa-brands fa-github fa-2xl"></i></a>
                <p>Copyright 2023 Ray Cook</p>
            </div>
    )
        ;
}

export default Footer;
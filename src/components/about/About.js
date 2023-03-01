import reach from 'react';
import style from './About.module.css';
import Card from "../card/Card";

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.summaryCard}>
                <Card title='About Me'>As a highly motivated and dedicated software engineer with a BS in computer
                    science and experience in manufacturing and NFT data analytics, I am seeking an entry-level position
                    in software development. With proficiency in Python, JavaScript, React, HTML, CSS, Node.js, AWS, and
                    Heroku, I am eager to apply my technical skills and passion for software development to contribute
                    to innovative projects and continue learning and growing in a dynamic and collaborative
                    environment.</Card>
            </div>
        </div>
    )
}

export default About;
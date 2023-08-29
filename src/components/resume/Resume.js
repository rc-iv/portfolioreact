import React from "react";
import style from "./Resume.module.css";

function Resume() {
    return (<div className={style.container}>
            <div className={style.header}>

                <div className={style["full-name"]}>
                    <span className={style["first-name"]}>Ray</span>
                    <span className={style["last-name"]}>Cook</span>
                </div>

                <div className={style["contact-info"]}>
                    <span className={style.email}>Email: </span>
                    <span className={style["email-val"]}>rayscook@gmail.com</span>
                    <span className={style.separator}></span>
                    <span className={style.phone}>Phone: </span>
                    <span className={style["phone-val"]}>302-345-6283</span>
                </div>

                <div className={style.about}>
                    <span className={style.position}>Software Developer</span>
                    <span className={style.desc}>Software Developer with experience using Python, Javascript, React, AWS, and Heroku. I am motivated, eager to learn, and seeking a position with room to grow.</span>
                </div>

            </div>

            <div className={style.details}>

                <div className={style.section}>
                    <div className={style["section__title"]}>Experience</div>
                    <div className={style["section__list"]}>
                        <div className={style["section__list-item"]}>
                            <div className={style.left}>
                                <div className={style.name}>WGMI.IO</div>
                                <div className={style.addr}>Remote</div>
                                <div className={style.duration}>May 2022 - Nov 2022</div>
                            </div>
                            <div className={style.right}>
                                <div className={style.name}>Product Engineer</div>
                                <div className="desc">Designed and developed modules for a NFT portfolio tracking tool.
                                    Led a group of developers on larger scope projects.
                                </div>
                            </div>
                        </div>
                        <div className={style["section__list-item"]}>
                            <div className={style.left}>
                                <div className={style.name}>Diversified Chemical Products</div>
                                <div className={style.addr}>Wilmington, Delaware</div>
                                <div className={style.duration}>May 2009 - May 2022</div>
                            </div>
                            <div className={style.right}>
                                <div className={style.name}>Production Supervisor / IT Director</div>
                                <div className="desc">Managed manufacturing process for FDA regulated pharmaceuticals.
                                    Implemented and maintained IT infrastructure for entire company.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.section}>
                    <div className={style["section__title"]}>Education</div>
                    <div className={style["section__list"]}>
                        <div className={style["section__list-item"]}>
                            <div className={style.left}>
                                <div className={style.name}>University of Delaware</div>
                                <div className={style.addr}>Newark, DE</div>
                                <div className={style.duration}>Sep 2005 - Dec 2009</div>
                            </div>
                            <div className={style.right}>
                                <div className={style.name}>Computer Science</div>
                                <div className={style.desc}>Software development with a focus on data and analytics
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.section}>
                    <div className={style["section__title"]}>Projects</div>
                    <div className={style["section__list"]}>
                        <div className={style["section__list-item"]}>
                            <div className={style.name}>
                                <a href="https://abyssalinfinity.com" target="_blank" rel='noreferrer'>Abyssal
                                    Infinty</a>
                            </div>
                            <div className={style.text}>
                                2D endless dungeon scroller with dungeons, monsters, npcs, and items all generated and
                                illlustrated via AI<br/><br/>
                                Tech stack: React, AWS Amplify, APIGateway webscoket, JS Lambdas, DynamoDB, S3
                            </div>
                        </div>
                        <div className={style["section__list-item"]}>
                            <div className={style.name}>
                                <a href="https://ezthanks.cards" target="_blank" rel='noreferrer'>ezthanks.cards</a>
                            </div>
                            <div className={style.text}>
                                AI thank you card generator <br/><br/>
                                Tech Stack: React, AWS Amplify, JS Lambdas, API Gateway
                            </div>
                        </div>
                        <div className={style["section__list-item"]}>
                            <div className={style.name}>
                                <a href="https://www.fakestats.io" target="_blank" rel='noreferrer'>FakeStats.io</a>
                            </div>
                            <div className={style.text}>
                                Niche NFT tracking application that monitored ownership statistics for a subset of
                                collections to predict owner voting behavior.<br/><br/>
                                Tech Stack: React, AWS Amplify, API Gateway, JS Lambda, Python, AWS Dynamo DB
                            </div>
                        </div>

                        <div className={style["section__list-item"]}>
                            <div className={style.name}>
                                <a href="https://rciv-web3-blog.herokuapp.com/" target="_blank" rel='noreferrer'>NFT
                                    Ecosystem Compendium</a>
                            </div>
                            <div className={style.text}>
                                Blog site that breaks down different artist ecosystems providing an easy to understand
                                overview of the artist's work and the utility benefits of each piece.<br/><br/>
                                Tech Stack: Flask, Heroku, SQL Alchemy, PostgreSQL
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={style["section__title"]}>Competency</div>
                    <div>
                        <strong>Languages:</strong> Python, Javascript, Typescript, C#, Java, C, C++ <br/>
                        <strong>Frameworks:</strong> React, Tailwind, HTML, CSS, Flask, Bootstrap <br/>
                        <strong>Deployment:</strong> AWS Cloud Computing, Heroku Deployment <br/>
                        <strong>Database Management:</strong> SQL, DynamoDB, Postgres, SQLite
                    </div>
                </div>
                <div className={style.section}>
                    <div className={style["section__title"]}>
                        Interests
                    </div>
                    <div className={style["section__list"]}>
                        <div className={style["section__listItem"]}>
                            Artificial intelligence, philosophy, board games/game theory, blockchain, sports, music, and
                            cooking.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
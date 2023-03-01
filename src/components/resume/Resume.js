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
                    <span className={style.desc}>Back End Software Developer with experience using Python, Node.JS, React, AWS, and Heroku. I am motivated, eager to learn, and seeking  a position with room to grow.</span>
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
                                <div className="desc">Designed and developed modules for a NFT portfolio tracking tool. Led a group of developers on larger scope projects.</div>
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
                                <div className="desc">Managed manufacturing process for FDA regulated pharmaceuticals. Implemented and maintained IT infrastructure for entire company.</div>
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
                                <div className={style.desc}>Software development with a focus on data and analytics</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.section}>
                    <div className={style["section__title"]}>Projects</div>
                    <div className={style["section__list"]}>
                        <div className={style["section__list-item"]}>
                            <div className={style.name}>
                                <a href="https://www.floor20.io" target="_blank">Floor20.io</a>
                                </div>
                            <div className={style.text}>
                                NFT data analytics platform that provides proprietary statistics on the top 20 projects by current volume. <br/><br/>
                                Sole developer on the project. Back end built with python. Utilizes novel methods to bypass cloudflare
                                to get access to otherwise unobtainable data. Back end interfaces with AWS Dynamo DB. Front end built with
                                React and deployed to AWS Amplify. Utilizes AWS API Gateway to invoke Lambda functions written in Node.JS.
                            </div>
                        </div>

                        <div className={style["section__list-item"]}>
                            <div className={style.name}>
                                <a href="https://www.fakestats.io" target="_blank">FakeStats.io</a>
                                </div>
                            <div className={style.text}>
                                Niche NFT tracking application that monitored ownership statistics for a subset of collections
                                to predict owner voting behavior.<br/><br/> Sole developer on the project. Back end built with python. Uses
                                multiple API's to aggregate data across marketplaces. Interfaces with AWS Dynamo DB. Front end built with
                                React and deployed to AWS Amplify. Utilizes AWS API Gateway to invoke Lambda functions written in Node.JS.
                            </div>
                        </div>

                        <div className={style["section__list-item"]}>
                            <div className={style.name}>
                                <a href="https://rciv-web3-blog.herokuapp.com/" target="_blank">NFT Ecosystem Compendium</a>
                                </div>
                            <div className={style.text}>
                                Blog site that breaks down different artist ecosystems provdiing an easy to understand overview of the
                                artist's work and the utility benefits of each piece.<br/><br/> Sole developer on the project. Built with
                                flask and deployed to Heroku. Utilizes SQL Alchemy to interface with a Postgres database.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={style["section__title"]}>Skills</div>
                    <div className={style.skills}>
                        <div className={style["skills__item"]}>
                            <div className={style.left}>
                                <div className={style.name}>
                                    Python
                                </div>
                            </div>
                            <div className={style.right}>
                                <input id="ck1" type="checkbox" checked/>
                                <label htmlFor="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>
                                <label htmlFor="ck2"></label>
                                <input id="ck3" type="checkbox" checked/>
                                <label htmlFor="ck3"></label>
                                <input id="ck4" type="checkbox" checked/>
                                <label htmlFor="ck4"></label>
                                <input id="ck5" type="checkbox" checked/>
                                <label htmlFor="ck5"></label>
                            </div>
                        </div>

                        <div className={style["skills__item"]}>
                            <div className={style.left}>
                                <div className={style.name}>
                                    React
                                </div>
                            </div>
                            <div className={style.right}>
                                <input id="ck1" type="checkbox" checked/>
                                <label htmlFor="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>
                                <label htmlFor="ck2"></label>
                                <input id="ck3" type="checkbox" checked/>
                                <label htmlFor="ck3"></label>
                                <input id="ck4" type="checkbox" checked/>
                                <label htmlFor="ck4"></label>
                                <input id="ck5" type="checkbox" />
                                <label htmlFor="ck5"></label>
                            </div>
                        </div>

                        <div className={style["skills__item"]}>
                            <div className={style.left}>
                                <div className={style.name}>
                                   AWS
                                </div>
                            </div>
                            <div className={style.right}>
                                <input id="ck1" type="checkbox" checked/>
                                <label htmlFor="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>
                                <label htmlFor="ck2"></label>
                                <input id="ck3" type="checkbox" checked/>
                                <label htmlFor="ck3"></label>
                                <input id="ck4" type="checkbox" checked/>
                                <label htmlFor="ck4"></label>
                                <input id="ck5" type="checkbox"/>
                                <label htmlFor="ck5"></label>
                            </div>
                        </div>

                        <div className={style["skills__item"]}>
                            <div className={style.left}>
                                <div className={style.name}>
                                    Node.js/Javascript
                                </div>
                            </div>
                            <div className={style.right}>
                                <input id="ck1" type="checkbox" checked/>
                                <label htmlFor="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>
                                <label htmlFor="ck2"></label>
                                <input id="ck3" type="checkbox" checked/>
                                <label htmlFor="ck3"></label>
                                <input id="ck4" type="checkbox" />
                                <label htmlFor="ck4"></label>
                                <input id="ck5" type="checkbox" />
                                <label htmlFor="ck5"></label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.section}>
                    <div className={style["section__title"]}>
                        Interests
                    </div>
                    <div className={style["section__list"]}>
                        <div className={style["section__listItem"]}>
                            Artificial intelligence, philosophy, sports, music, and cooking.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
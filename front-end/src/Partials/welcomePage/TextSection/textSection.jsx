import React,{ Fragment } from "react";
import './textSection.css';

export default function TextSection(){
    return(
        <Fragment>
            <br /><br />
            <div className="parentText" data-aos="fade-up" > 
                <h1 className="titleTextSection">Become Stronger, Faster, and Smarter with R365</h1>
                <br />
                <div className="parentItemText1">
                    <div className="leftText">
                        <h4><i class='bx bx-wallet-alt'></i> NanoServeHub ACCOUNTING</h4>
                        <h2>Accurate, Value-Added Accounting</h2>
                        <p>Detailed sales and labor data is pulled directly from your POS, automatically creating daily sales and labor accrual journal entries for your general ledger. Save time, increase accuracy, and optimize performance.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="rightImage">
                        <img src="/public/ImagesText/image1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="parentText" data-aos="fade-up">
                <br />
                <div className="parentItemText2">
                    <div className="rightImage2">
                        <img src="/public/ImagesText/image2.jpg" alt="" />
                    </div>
                    <div className="leftText2">
                        <h4><i class='bx bx-group'></i> NanoServeHub WORKFORCE</h4>
                        <h2>Hire, Pay, and Retain Your Dream Team​</h2>
                        <p>Streamline administrative work throughout the employee lifecycle with solutions for hiring, onboarding, scheduling, payroll, and benefits. Give managers time back to focus on what matters most: guest experiences, team engagement, and productivity. ​</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="parentText" data-aos="fade-up">
                <br />
                <div className="parentItemText1">
                    <div className="leftText">
                        <h4><i class='bx bx-bullseye' ></i> REPORTING & BUSINESS INTELLIGENCE</h4>
                        <h2>Drive Better Performance with Data​</h2>
                        <p>Get accurate, timely data that's easy to find and share. See what's working, what's not, and what's happening unexpectedly in real-time with out-of-the-box and custom reports to drive improvement, growth, and expansion.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="rightImage">
                        <img src="/public/ImagesText/image3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
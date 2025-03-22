import React, { useEffect, useState, } from "react";
import Styles from "./index.module.css";
import AnchorLogo from "../../Assets/Images/AnchorLogoImageWithoutBg.png"
import HeaderPage from "../headerPage/HeaderPage";
import FooterPage from "../footerPage/FooterPage";
import { MotionUp } from '../../Assets/Animations/Motionup';
import { px, transform } from 'framer-motion';

const AboutUs = () => {




    const courses = [
        {
            title: 'Reach Our Expertise',
            startDate: 'Our ability to comprehend crucial needs, provide a flexible and scalable design, and provide dependable alternatives for every functional module stems from our experience developing solutions for particular sectors. can provide a pertinent technical solution to help your effective operations and business continuity.',
        },
        {
            title: 'Unceasingly Expand Your Enterprise',
            startDate: 'Anchor has a strong structure in place for onboarding and training new team members in addition to a pool of professionals with a specific focus on the business. We guarantee that our staff members receive the domain-specific information required to provide excellent custom solutions through workshops and frequent knowledge-sharing sessions.',
        },
        {
            title: 'Enhance Growth',
            startDate: 'With the help of our knowledgeable and effective staff, experience a seamless and secure onboarding procedure. Compared to a team that lacks subject experience, we can assist you in forming your product more quickly and beginning development beforehand.',
        },
        {
            title: 'Boost the Worth of Your Business',
            startDate: 'You get more with Anchor than just an experienced development staff. Together with our industry-specific custom software services and our experience in streamlining business processes for increased effectiveness, scalability, and customer happiness, you also get our knowledge and that of the subject matter experts we consult.',
        },

    ];

    return (
        <div className={Styles.AboutUsMainContainer}>
            < HeaderPage />
            <div className={Styles.AboutUsFirstContainer}>
                     <img
                        src={AnchorLogo}
                        alt=""
                        className={Styles.AboutUsFirstContainerContentImg}
                    />
 
                <div className={Styles.AboutUsFirstContainerContent}>
                  
                        <div className={Styles.center}>
                            <p className={Styles.AboutUsFirstContainerContentHeader}>
                                Why Anchor Techno Soft ?
                            </p>
                            <p
                                id="text"
                                className={Styles.AboutUsFirstContainerContentText}
                            >
                                With our software engineering services covering the supply chain,
                                healthcare, FinTech, IoT,and other sectors, we help organizations
                                maximize sustainable value and are a solid partner for advancing your
                                success. To create and provide top-notch products and sessions, we pool
                                the extensive and important knowledge of our excellent engineers.
                            </p>
                        </div>
                    {/* )} */}
                </div>
            </div>
            <div className={Styles.AboutUsSecondContainer}>
                <div className={Styles.AboutUsFirstContainer}>
                    <div className={Styles.AboutUsFirstContainerContent}>
                        <p className={Styles.AboutUsFirstContainerContentHeader}>Management Team</p>
                        <p className={Styles.AboutUsFirstContainerContentText}>
                            The company's board members stay in close contact with
                            both Anchor employees and clients, and Anchor Techno Soft is
                            renowned for being an outsourcing company that values equality.
                            So that our clients may relax, our skilled leadership team will make
                            sure that every project and opportunity receives the proper level of strategic monitoring.
                        </p>

                    </div>
                    <div className={Styles.DirecterContentAndImage}>

                    </div>
                </div>
            </div>
            <div className={Styles.AboutUsThirdContainer}>
                <p className={Styles.AboutUsThirdContainerTitle}>Our Services are<br />
                    Industry-Specific and Dedicated
                </p>
               
                    <MotionUp delay={0}>
                        <div className={Styles.AboutUsThirdContainerContentFeild}>
                            {/* <div className={Styles.AboutUsThirdContent}>
                                <p className={Styles.AboutUsThirdContentTitle}>Reach Our Expertise</p>
                                <p className={Styles.AboutUsThirdContentText}>
                                    Our ability to comprehend crucial needs, provide a flexible and scalable design,
                                    and provide dependable alternatives for every functional module
                                    stems from our experience developing solutions for particular sectors.
                                    can provide a pertinent technical solution to help your effective operations and
                                    business continuity.
                                </p>
                            </div>
                            <div className={Styles.AboutUsThirdContent}>
                                <p className={Styles.AboutUsThirdContentTitle}>Unceasingly Expand Your Enterprise</p>
                                <p className={Styles.AboutUsThirdContentText}>
                                    Anchor has a strong structure in place for onboarding and training
                                    new team members in addition to a pool of professionals with a specific
                                    focus on the business. We guarantee that our staff members receive the
                                    domain-specific information required to provide excellent custom solutions
                                    through workshops and frequent knowledge-sharing sessions.
                                </p>
                            </div>
                            <div className={Styles.AboutUsThirdContent}>
                                <p className={Styles.AboutUsThirdContentTitle}>Enhance Growth</p>
                                <p className={Styles.AboutUsThirdContentText}>
                                    With the help of our knowledgeable and effective staff,
                                    experience a seamless and secure onboarding procedure.
                                    Compared to a team that lacks subject experience,
                                    we can assist you in forming your product more quickly and
                                    beginning development beforehand.
                                </p>
                            </div>
                            <div className={Styles.AboutUsThirdContent}>
                                <p className={Styles.AboutUsThirdContentTitle}>Boost the Worth of Your Business</p>
                                <p className={Styles.AboutUsThirdContentText}>
                                    You get more with Anchor than just an experienced development staff.
                                    Together with our industry-specific custom software services and our experience in
                                    streamlining business processes for increased effectiveness, scalability,
                                    and customer happiness, you also get our knowledge and that of the subject matter
                                    experts we consult.
                                </p>
                            </div> */}
                            <div className="ag-courses_box">
                                {courses.map((course, index) => (
                                    <div className="ag-courses_item" key={index}>
                                        <a href="#" className="ag-courses-item_link">
                                            <div className="ag-courses-item_bg"></div>
                                            <div className="ag-courses-item_title">{course.title}</div>
                                            {course.startDate && (
                                                <div className="ag-courses-item_date-box">
                                                    <p className="ag-courses-item_date">{course.startDate}</p>
                                                </div>
                                            )}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionUp>
                
            </div>
            <FooterPage />
        </div>
    )
}
export default AboutUs

import React,{useEffect} from "react";
import Styles from "./index.module.css"
import HeaderPage from "../headerPage/HeaderPage";
import PeopleImg from "../../Assets/Images/peopleImg.png";
import World from "../../Assets/Images/world.png";
import CodeingImage from "../../Assets/Images/CodeingImage.png";
import CustomSoftwareDevelopment from "../../Assets/Images/HustomSoftwareDevelopment.png";
import TestingApplication from "../../Assets/Images/TestingApplication.png";
import ItConsolting from "../../Assets/Images/ItConsolting.png";
import ITSupportAndMaintance from "../../Assets/Images/ITSupportAndMaintance.png";
import Waterfalldevelopment from "../../Assets/Images/Waterfalldevelopment.png";
import ItSystemAndIntegration from "../../Assets/Images/ItSystemAndIntegration.png";
import DesignThinking from "../../Assets/Images/DesignThinking.png";
import AgileDevelopment from "../../Assets/Images/AgileDevelopment.png";
import FooterPage from "../footerPage/FooterPage";
import { MotionUp } from '../../Assets/Animations/Motionup';
import { px, transform } from 'framer-motion';
import { LetterPullup } from './LetterPullup';

const HomePage = () => {
    useEffect(() => {
		window.scrollTo(0 ,0)
	},[])

    return (
        <div className={Styles.HomePageMainContainer}>
            <HeaderPage />
            <div>
                <div className={Styles.HomePageFirstContent} >
              
                    <p className={Styles.HomePageFirstContentLogoImageHeader}>We Create and Develop Digital Products
                    {/* <LetterPullup words="We Create and Develop Digital Products"/> 
                    <LetterPullup words="In the IT Sector to Meet the Needs of Our Customers."/>
                    In the IT Sector to Meet the Needs of Our Customers. */}
                    </p>
                    <p className={Styles.HomePageFirstContentLogoImageHeader}>
                   
                    In the IT Sector to Meet the Needs of Our Customers. 
                    </p>
                </div>
                <div className={Styles.HomePageSecondContent}>
                    <p className={Styles.HomePageSecondContentHeader}>Software Development Services</p>
                    <p className={Styles.HomePageSecondContentSubHeader}>We offer life cycle support to stretch budgets and size opportunities.</p>
                    <MotionUp delay={0} className={Styles.MotionupAnimation}>
                        
                        <div className="container">
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <img src={PeopleImg} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldImg} />
                                        <p className={Styles.HomePageSecondContentTechFeildContentFieldText}>
                                            Hire from our skilled pool of <br /> top-notch personnel.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <img src={World} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldWorldImg} />
                                        <p className={Styles.HomePageSecondContentTechFeildContentFieldText}>
                                            Avail the expertise of our skilled tech professionals.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <img src={CodeingImage} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldImg} />
                                        <p className={Styles.HomePageSecondContentTechFeildContentFieldText}>
                                            Discover the quick ramp-up, scaling, and pivoting capabilities of Anchor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MotionUp>
                </div>
                <div className={Styles.HomePageThirdContent}>
                    <p className={Styles.HomePageThirdContentHeader}>IT Outsourcing Solutions For All Kinds of Organizations</p>
                    <MotionUp delay={0}>
                        <div className={Styles.HomePageThirdContentTechFeildContent}>
                            <div className={Styles.HomePageThirdContentTechFeildContentField}>
                                <img src={CustomSoftwareDevelopment} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldImg} />
                                <div className={Styles.CardContainer}>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldText}>
                                        Custom Software Development
                                    </p>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldTextTwo}>
                                        We offer complete assistance with software conception and implementation in addition to superior, adaptable, and creative software solutions.                                </p>
                                </div>
                            </div>
                            <div className={Styles.HomePageThirdContentTechFeildContentField}>
                                <img src={TestingApplication} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldWorldImgTestingApplication} />
                                <div className={Styles.CardContainer}>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldText}>
                                        Application Testing
                                    </p>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldTextTwo}>
                                        We provide bug-free programs, upkeep, and committed support.
                                    </p>
                                </div>
                            </div>
                            <div className={Styles.HomePageThirdContentTechFeildContentField}>
                                <img src={ItConsolting} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldImg} />
                                <div className={Styles.CardContainer}>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldText}>
                                        IT Consulting
                                    </p>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldTextTwo}>
                                        Along with helping our clients choose the best technology stacks for their needs, we also offer customized software solutions.
                                    </p>
                                </div>
                            </div>
                            <div className={Styles.HomePageThirdContentTechFeildContentField}>
                                <img src={ITSupportAndMaintance} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldImgItSupport} />
                                <div className={Styles.CardContainer}>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldText}>
                                        IT Maintanence And Support
                                    </p>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldTextTwo}>
                                        We provide thorough maintenance and support for applications, including bug and error fixes.
                                    </p>
                                </div>
                            </div>
                            <div className={Styles.HomePageThirdContentTechFeildContentField}>
                                <img src={Waterfalldevelopment} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldWorldImgTestingApplication} />
                                <div className={Styles.CardContainer}>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldText}>
                                        Waterfall Development
                                    </p>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldTextTwo}>
                                        A fantastic approach that enables you to communicate with a client with little difficulty and at minimal time disparities.
                                    </p>
                                </div>
                            </div>
                            <div className={Styles.HomePageThirdContentTechFeildContentField}>
                                <img src={ItSystemAndIntegration} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldImg} />
                                <div className={Styles.CardContainer}>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldText}>
                                        IT System And Service Integration
                                    </p>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldTextTwo}>
                                        The procedures for merging your sub-component systems are part of our IT system and service integration offerings.
                                    </p>
                                </div>
                            </div>
                            <div className={Styles.HomePageThirdContentTechFeildContentField}>
                                <img src={DesignThinking} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldImg} />
                                <div className={Styles.CardContainer}>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldText}>
                                        Design Thinking
                                    </p>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldTextTwo}>
                                        We understand our users' needs, articulate them clearly, and provide relevant, unique, and creative solutions.                                    </p>
                                </div>
                            </div>
                            <div className={Styles.HomePageThirdContentTechFeildContentField}>
                                <img src={AgileDevelopment} alt="" className={Styles.HomePageSecondContentTechFeildContentFieldImgAgile} />
                                <div className={Styles.CardContainer}>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldText}>
                                        Agile Software Development
                                    </p>
                                    <p className={Styles.HomePageThirdContentTechFeildContentFieldTextTwo}>
                                        Short iterations, reduced maintenance costs, enhanced user experience, and increased agility within the client's time and budget are all benefits of agile.                                 </p>
                                </div>
                            </div>
                        </div>
                    </MotionUp>
                </div>
                <MotionUp delay={0}>
                <div className={Styles.HomePageFourthContent}>
               
                    <p className={Styles.HomePageFourthContentHeader}>Power Your Innovation & Growth</p>
                    <p className={Styles.HomePageFourthContentSubHeader}>Collaborate with SME's and top technical personnel to boost business resilience, accelerate transformation, and unlock growth.</p>
                    <p className={Styles.HomePageFourthContentSubText}>Our company offers customized software consulting services.</p>
                    <div className={Styles.HomePageFourthContentField}>
                        <p className={Styles.HomePageFourthContentFieldCard}>
                            Software Assessment

                        </p>
                        <p className={Styles.HomePageFourthContentFieldCard}>
                            Software Testing
                        </p>
                        <p className={Styles.HomePageFourthContentFieldCard}>
                            Design Sprint
                        </p>
                        <p className={Styles.HomePageFourthContentFieldCard}>
                            Deployment
                        </p>
                        <p className={Styles.HomePageFourthContentFieldCard}>
                            Implementation
                        </p>
                        <p className={Styles.HomePageFourthContentFieldCard}>
                            Re-engineering
                        </p>
                        <p className={Styles.HomePageFourthContentFieldCard}>
                            Migration
                        </p>
                        <p className={Styles.HomePageFourthContentFieldCard}>
                            Software Security
                        </p>
                        <p className={Styles.HomePageFourthContentFieldCard}>

                            Quality Assurance

                        </p>
                    </div>
                  
                </div>
                </MotionUp>
            </div>
            <FooterPage />
        </div>
    )
}
export default HomePage
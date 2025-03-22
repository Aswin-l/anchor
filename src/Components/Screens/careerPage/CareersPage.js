import React, { useEffect,useRef } from "react";
import Styles from "./index.module.css";
import HeaderPage from "../headerPage/HeaderPage";
import FooterPage from "../footerPage/FooterPage";
import EmployeeBenefits from "../../Assets/Images/EmployeeBenefits.jpg"
import AnchorIcon from '@mui/icons-material/Anchor';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: '#21252a',
    border: 'none',
    boxShadow: 24,
    borderRadius:"10px",
    p: 4,
    scrollY:"auto",
    '@media (max-width: 768px)': {
            width: '100%',  
            top: '55%', 
            Padding:"0.5rem 1.5rem",
        },
  };


const CareersPage =()=>{



    return(
        <div className={Styles.CareersPageMainContainer}>
            <HeaderPage/>
            <div className={Styles.CareersPageFirstContainer}>
                <p className={Styles.CareersPageFirstContainerHeader} >Welcome to our career portal!</p>
                <p className={Styles.CareersPageFirstContainerTitle} >We look forward to your participation</p>
            </div>
            <div className={Styles.CareersPageSecondContainer}>
                        <p className={Styles.CareersPageSecondContainerContentText}>Joining Anchor Techno Soft   gives You the exposure to face meet challenges with
                        Innovation, Dedication, and Passion.
                        </p>
                        <div className={Styles.CareersPageSecondContainerContent}>
                            <p className={Styles.CareersPageSecondContainerContentFirstText}>
                            Our development team is looking for talented and mission-driven youth to join our team of visionary experts to build cutting-edge products.
                            </p>
                            <p className={Styles.CareersPageSecondContainerContentFirstText}>
                            At Anchor Techno Soft, you’ll have the opportunity to get creative on a vast array of projects, big and small, expand your skills, and be part of a positive and collaborative company culture.
                            </p>
                            <p className={Styles.CareersPageSecondContainerContentFirstText}>
                                Get in touch with us : <span  className={Styles.CareersPageSecondContainerContentFirstTextMail}>aswin@anchortechnosoft.in</span>
                            </p>
                        </div>
            </div>
            <div className={Styles.CareersPageThiredContainer}>

            <div className={Styles.CareersPageThiredContainerSecondContent}>
                        <p className={Styles.CareersPageThiredContainerSecondContentText}> <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon}/>Competitive salary and benefits.</p>
                        <p className={Styles.CareersPageThiredContainerSecondContentText}> <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon}/>Fund support for professional development opportunities and courses.</p>
                        <p className={Styles.CareersPageThiredContainerSecondContentText}> <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon}/>On the Job Professional Training.</p>
                        <p className={Styles.CareersPageThiredContainerSecondContentText}> <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon}/>A remote-friendly schedule that allows employees to work from home either part-time or as much as they reasonably ask for.</p>
                        <p className={Styles.CareersPageThiredContainerSecondContentText}> <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon}/>Benefits to improve work-life balance.</p>
                        <p className={Styles.CareersPageThiredContainerSecondContentText}> <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon}/>An employer who truly values personal development and growth
                        and who invites you to reciprocate the same!</p>
                        <p className={Styles.CareersPageThiredContainerSecondContentText}> <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon}/>Room for new initiatives and ideas.
                        We’re always willing to listen, whether you’ve been with us for a week, a month, or a year.</p>

                    </div>
                    <div className={Styles.CareersPageThiredContainerFirstContent}>
                            <p className={Styles.CareersPageThiredContainerFirstContentTitle}>Perks & Benefits</p>
                            <img src={EmployeeBenefits } alt=""/>
                    </div>
                  

            </div>
            <div className={Styles.CareersPageFourthContainer}>
                <p className={Styles.CareersPageFourthContainerTitle}>Our Cultural Values</p>
                <p className={Styles.CareersPageFourthContainerText}>
                    We fully understand and appreciate the value of diversity, 
                    and we are committed to creating an inclusive environment for all employees. 
                    We are proud to be an equal-opportunity workplace.
                </p>
            </div>
            <div className={Styles.CareersPageFifthContainer}>
                <p className={Styles.CareersPageFifthContainerTitle}>We'd like to hear from you!</p>
                <p className={Styles.CareersPageFifthContainerText}>
                If the opportunities at Anchor Techno Soft excite you, we encourage you to apply.<br/>
                If you have any questions before applying, you can send an e-mail to  <span  className={Styles.CareersPageSecondContainerContentFirstTextMail}>aswin@anchortechnosoft.in</span><br/>
                Please send all applications through the Career Portal. We look forward to recieving your application!
                </p>
            </div>
            <FooterPage/>

           
        </div>
    )
}
export default CareersPage
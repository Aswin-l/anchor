import React, { useState } from "react";
import Styles from "./index.module.css"
import HeaderPage from "../headerPage/HeaderPage";
import CustomSoftwareDevelopment from "../../Assets/Images/HustomSoftwareDevelopment.png";
import TestingApplication from "../../Assets/Images/TestingApplication.png";
import ItConsolting from "../../Assets/Images/ItConsolting.png";
import ITSupportAndMaintance from "../../Assets/Images/ITSupportAndMaintance.png";
import Waterfalldevelopment from "../../Assets/Images/Waterfalldevelopment.png";
import ItSystemAndIntegration from "../../Assets/Images/ItSystemAndIntegration.png";
import DesignThinking from "../../Assets/Images/DesignThinking.png";
import AgileDevelopment from "../../Assets/Images/AgileDevelopment.png";
import FooterPage from "../footerPage/FooterPage";
import { Link } from "react-router-dom";
const BlogPage = () => {

    const [card, setCard] = useState([
        {
            img: <img src={CustomSoftwareDevelopment} alt="" className={Styles.BlogPageCardContentImage} />,
            Button: <Link to="/custom_software_development"><button className={Styles.BlogPageCardContentButton}>View</button></Link>,
            Text:"Custom Software Development",
        },
        {
            img: <img src={TestingApplication} alt="" className={Styles.BlogPageCardContentImage} />,
            Button: <Link to="/application_testing"> <button className={Styles.BlogPageCardContentButton}>View</button></Link>,
            Text:"Application Testing",
        },
        {
            img: <img src={ItConsolting} alt="" className={Styles.BlogPageCardContentImage} />,
            Button: <Link to="/consulting"><button className={Styles.BlogPageCardContentButton}>View</button></Link>,
            Text:"IT Consulting",
        },
        {
            img: <img src={ITSupportAndMaintance} alt="" className={Styles.BlogPageCardContentImage} />,
            Button: <Link to="/maintanence_and_support"><button className={Styles.BlogPageCardContentButton}>View</button></Link>,
            Text:"IT Maintanence And Support",
        },
        {
            img: <img src={Waterfalldevelopment} alt="" className={Styles.BlogPageCardContentImage} />,
            Button: <Link to="/waterfall"><button className={Styles.BlogPageCardContentButton}>View</button></Link>,
            Text:"Waterfall Development",
        },
        {
            img: <img src={ItSystemAndIntegration} alt="" className={Styles.BlogPageCardContentImage} />,
            Button: <Link to="/system_Service_integration"><button className={Styles.BlogPageCardContentButton}>View</button></Link>,
            Text:"IT System And Service Integration",
        },
        {
            img: <img src={DesignThinking} alt="" className={Styles.BlogPageCardContentImage} />,
            Button:<Link to="/design_thinking"><button className={Styles.BlogPageCardContentButton}>View</button></Link> ,
            Text:"Design Thinking",
        },
        {
            img: <img src={AgileDevelopment} alt="" className={Styles.BlogPageCardContentImage} />,
            Button: <Link to="/agile"><button className={Styles.BlogPageCardContentButton}>View</button></Link> ,
            Text:"Agile Software Development",
        },
       
    ])
    return (
        <div className={Styles.BlogPageMainContainer}>
            <HeaderPage />
            <p className={Styles.BlogPageMainContainerTitle}>IT Outsourcing Solutions For All Kinds of Organizations</p>
            <div className={Styles.BlogPageContent}>
                {card.map((data, index) => {
                    return (
                        <div className={Styles.BlogPageContentCard}>
                            <div  className={Styles.BlogPageContentCardData}>
                            {data.img}
                            {data.Button}
                            </div>
                            <p className={Styles.BlogPageContentCardTitle}>{data.Text}</p>

                        </div>
                    )
                })}

            </div>
            <FooterPage/>
        </div>
    )
}
export default BlogPage
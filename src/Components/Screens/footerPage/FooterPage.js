import React from "react";
import Styles from "./index.module.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const FooterPage = () => {
  return (
    <div className={Styles.FooterPageMainContainer}>
      <p className={Styles.FooterPageHeaderLing}></p>
      <p className={Styles.FooterPageMainText}>Anchor Techno Soft</p>
      <div className={Styles.FooterPageButtonContainer}>
        {/* <Link to="/"><button className={Styles.HeaderPageButtonField}>Home</button></Link>
                <Link to="/careers"><button className={Styles.HeaderPageButtonField}>Careers</button></Link>
                <Link to="/blog"><button className={Styles.HeaderPageButtonField}>Blog</button></Link>
                <Link to="/aboutus"><button className={Styles.HeaderPageButtonField}>About US</button></Link> */}

        <section className="nav-8">
          <nav className="footerPageLink">
            {[
              { href: "/", text: "Home", dataText: "Main page" },
              { href: "/careers", text: "Career", dataText: "See our works" },
              // { href: "/aboutus", text: "Contact", dataText: "Get in touch" },
              { href: "/aboutus", text: "About", dataText: "What we do" },
              { href: "/blog", text: "Blog", dataText: "Thoughts" },
            ].map((link, index) => (
              <a key={index} className="item" href={link.href}>
                <div data-text={link.dataText} className="linktext">
                  {link.text}
                </div>
              </a>
            ))}
          </nav>
        </section>
      </div>
      <div className={Styles.FooterPageIconsContainer}>
        <ul className="social-links">
          <li className="facebook">
            <a href="https://www.linkedin.com/company/anchor-techno-soft/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fa fa-facebook"><LinkedInIcon/></span>
            </a>
          </li>
         
          <li className="instagram">
            <a href="https://www.instagram.com/anchor_techno_soft?igsh=ZzUzMTZiNW1yM3Fo">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fa fa-instagram"><InstagramIcon/></span>
            </a>
          </li>
          <li className="linkedin">
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fa fa-linkedin"><WhatsAppIcon/></span>
            </a>
          </li>
        </ul>
      </div>
      <p className={Styles.FooterPageCopyrightsText}>Copyright © anchortechnosoft 2024.</p>
    </div>
  );
};
export default FooterPage;

import React from "react";
import Styles from "./index.module.css"
import AnchorLogo from "../../Assets/Images/AnchorLogoImageWithoutBg.png"
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const ITEM_HEIGHT = 48;
const HeaderPage = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const options = [
        <Link to="/"><button className={Styles.HeaderPageButtonFieldMobile}>Home</button></Link>,
        <Link to="/careers"><button className={Styles.HeaderPageButtonFieldMobile}>Careers</button></Link>,
        <Link to="/blog"><button className={Styles.HeaderPageButtonFieldMobile}>Blog</button></Link>,
        <Link to="/aboutus"><button className={Styles.HeaderPageButtonFieldMobile}>About US</button></Link>,


    ];
    return (
        <div className={Styles.HeaderPageMainContainer}>
            <div className={Styles.HeaderPageLogoContainer}>
                <img src={AnchorLogo} alt="" className={Styles.HeaderPageLogoImage} />
                <div className={Styles.HeaderPageLogoContainerTextContent}>
                    <p className={Styles.HeaderPageLogoContainerTextContentHeader}>Anchor</p>
                    <p className={Styles.HeaderPageLogoContainerTextContentSubHeader}>Techno Soft</p>
                </div>
            </div>
            <div className={Styles.HeaderPageButtonContainer}>
                {/* <Link to="/"><button className={Styles.HeaderPageButtonField}>Home</button></Link>
                <Link to="/careers"><button className={Styles.HeaderPageButtonField}>Careers</button></Link>
                <Link to="/blog"><button className={Styles.HeaderPageButtonField}>Blog</button></Link>
                <Link to="/aboutus"><button className={Styles.HeaderPageButtonField}>About US</button></Link> */}

                <section className="nav-8">
                    <nav>
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

            <div className={Styles.MobileView}>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    
                >
                    <MenuIcon  />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        paper: {
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>

            {/* <Nav /> */}
        </div>
    )
}
export default HeaderPage
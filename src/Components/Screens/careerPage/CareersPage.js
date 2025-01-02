import React, { useEffect,useRef } from "react";
import Styles from "./index.module.css";
import HeaderPage from "../headerPage/HeaderPage";
import FooterPage from "../footerPage/FooterPage";
import EmployeeBenefits from "../../Assets/Images/EmployeeBenefits.jpg"
import AnchorIcon from '@mui/icons-material/Anchor';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import emailjs from "@emailjs/browser";

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
  
  const styles = {
    dud: {
      color: '#757575',
    },
  };


class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }
  
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
  
    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span style="color:${styles.dud.color}">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  const fileTypes = ["JPEG", "PNG", "GIF"];

const CareersPage =()=>{

    const [open, setOpen] = useState(false);

    const [file, setFile] = useState(null);

    const [employeeDetails ,setEmployeeDetails]= useState({
        firstName: "",
        lastName:"",
        email:"",
        mobileNumber:"",
        file:"",
    })

    const notify = () => toast.success("Your Application Submitted Successfully!!!");

    const handleSubmit = (e) => {
        // e.preventDefault();
    
        emailjs
          .send(
            "anchorTechnoSoft", // Replace with your EmailJS Service ID
            "anchorTechnoSoft", // Replace with your EmailJS Template ID
            employeeDetails,
            "qwPchRHkBbHHmaFYX" // Replace with your EmailJS Public Key
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              toast.success("Email sent successfully!");
            },
            (err) => {
              console.error("FAILED...", err);
              toast.error("Failed to send email. Please try again.");
            }
          );
      };
     
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        handleSubmit()
        notify()
        setOpen(false);
    }


  
    const handleChange = (file ,e) => {
      setFile(file);
    };

    useEffect(()=>{
        setEmployeeDetails({
          ...employeeDetails,
          file: file,
        })
      },[ file])


      const textRef1 = useRef(null);
      const textRef2 = useRef(null);
      
      useEffect(() => {
        const fx1 = new TextScramble(textRef1.current);
        const fx2 = new TextScramble(textRef2.current);
    
        fx1.setText("Welcome to our career portal!");
        fx2.setText("We look forward to your participation");
    
        return () => {
          cancelAnimationFrame(fx1.frameRequest);
          cancelAnimationFrame(fx2.frameRequest);
        };
      }, []);

    return(
        <div className={Styles.CareersPageMainContainer}>
            <HeaderPage/>
            <div className={Styles.CareersPageFirstContainer}>
                <p className={Styles.CareersPageFirstContainerHeader} ref={textRef1}></p>
                <p className={Styles.CareersPageFirstContainerTitle} ref={textRef2}></p>
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
                            <button onClick={handleOpen} className={Styles.CareersPageApplyButton}>Apply Now!</button>
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
                If you have any questions before applying, you can send an e-mail to anchortechnosoft@gmail.com<br/>
                Please send all applications through the Career Portal. We look forward to recieving your application!
                </p>
            </div>
            <FooterPage/>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={Styles.ModelContentFeild}>
                    <p className={Styles.ModelContentFeildTitle}>Welcome to Anchor !</p>
                    <div className={Styles.ModelMainContainer}>
                        <div className={Styles.ModelMainContent}>
                            <p className={Styles.ModelMainContentLable}>First Name :</p>
                            <TextField   className={Styles.ModelMainContentInput}
                            name="firstName"
                            onChange={(e) => setEmployeeDetails({ ...employeeDetails, firstName: e.target.value })}
                            />
                        </div>
                        <div className={Styles.ModelMainContent}>
                            <p className={Styles.ModelMainContentLable}>Last Name :</p>
                            <TextField  className={Styles.ModelMainContentInput}
                             name=" lastName"
                             onChange={(e) => setEmployeeDetails({ ...employeeDetails, lastName: e.target.value })}
                             />
                        </div>
                        <div className={Styles.ModelMainContent}>
                            <p className={Styles.ModelMainContentLable}>Email :</p>
                            <TextField  className={Styles.ModelMainContentInput}
                               name=" email"
                               onChange={(e) => setEmployeeDetails({ ...employeeDetails, email: e.target.value })}
                            />
                        </div>
                        <div className={Styles.ModelMainContent}>
                            <p className={Styles.ModelMainContentLable}>Mobile Number : </p>
                            <TextField  className={Styles.ModelMainContentInput}
                              name=" mobileNumber"
                              onChange={(e) => setEmployeeDetails({ ...employeeDetails, mobileNumber: e.target.value })}
                            />
                        </div>
                        <div className={Styles.ModelMainContent}>
                            <p className={Styles.ModelMainContentLable}>Hello To Drag & Drop Files</p>
                            <FileUploader
                                multiple={true}
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                                className={Styles.ModelMainContentInput}

                            />
                            <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                            </div>
                    </div>
                    <button onClick={handleClose} className={Styles.CareersPageApplyButton}>Apply Now!</button>
                </Box>
            </Modal>    
        </div>
    )
}
export default CareersPage
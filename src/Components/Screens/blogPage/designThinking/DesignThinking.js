import React from "react";
import Styles from './index.module.css';
import HeaderPage from "../../headerPage/HeaderPage";
import DesignThinkingBlog from "../../../Assets/Images/DesignThinkingBlog.png";
import AnchorIcon from '@mui/icons-material/Anchor';

const DesignThinking = () => {
    return (
        <div className={Styles.DesignThinkingPageMainContainer}>
            <HeaderPage />
            <div className={Styles.DesignThinkingPageCard}>
                <div className={Styles.DesignThinkingPageCardFirstContainer}>
                    <div className={Styles.DesignThinkingPageCardFirstContainerText}>
                        <p className={Styles.DesignThinkingPageCardTitle}>Design Thinking: The Creative Problem-Solving Framework</p>
                        <p className={Styles.DesignThinkingPageCardFirstContent}>
                            In a world that demands innovation and adaptability,
                            Design Thinking has emerged as a revolutionary approach to tackling complex challenges.
                            Rooted in human-centric methods and focused on understanding user needs, this methodology transcends traditional problem-solving techniques,
                            enabling organizations to create meaningful solutions.
                        </p>
                        <p className={Styles.DesignThinkingPageCardFirstContent}>
                            Here’s a comprehensive guide to understanding Design Thinking and how it can transform your approach to innovation.
                        </p>
                    </div>
                    <img src={DesignThinkingBlog} alt="" className={Styles.DesignThinkingPageCardFirstContentImg} />
                </div>
                <div className={Styles.DesignThinkingPageCardSecondContainer}>
                    <p className={Styles.DesignThinkingPageCardTitle}>What is Design Thinking?</p>
                    <p className={Styles.DesignThinkingPageCardFirstContent}>
                        Design Thinking is a problem-solving framework that emphasizes empathy, ideation, and iterative testing.
                        Originating from the design industry, it has been widely adopted across diverse sectors, from technology to healthcare.
                        The core idea is to view problems from the user's perspective and craft solutions that truly address their needs.</p>
                </div>

                <div className={Styles.DesignThinkingPageCardSecondContainer}>
                    <p className={Styles.DesignThinkingPageCardTitle}>The Five Stages of Design Thinking</p>
                    <p className={Styles.DesignThinkingContentText}>
                        Design Thinking is commonly broken into five distinct but interconnected stages:
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Empathize
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        Understand the end user's needs, challenges, and desires.
                        Techniques like interviews, surveys, and observations are employed to gather insights and build empathy for the user.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Define
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        Synthesize the insights from the empathy phase into a clear problem statement.
                        This step ensures the team is solving the right problem and sets the stage for focused ideation.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Ideate
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        Brainstorm potential solutions without constraints.
                        Creativity flourishes in this stage as diverse ideas are generated. Techniques like mind mapping, sketching, and group discussions can be employed.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Prototype
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        Turn ideas into tangible representations.
                        Prototypes, ranging from sketches to fully functional models, allow teams to visualize and test their concepts.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Test
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        Validate the solutions with real users.
                        Feedback is collected to refine prototypes, ensuring the solution aligns with user needs.
                    </p>
                </div>

                <div className={Styles.DesignThinkingPageCardSecondContainer}>
                    <p className={Styles.DesignThinkingPageCardTitle}>Why is Design Thinking Important?</p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Human-Centric Focus
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                    It prioritizes understanding and solving problems for real people, ensuring solutions are practical and impactful.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Encourages Collaboration
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        Teams with diverse expertise come together, fostering innovation through shared perspectives.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Promotes Iterative Improvement
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        Testing and refining prototypes ensure that the final solution is well-polished and user-ready.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Adaptable to Any Industry
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                    Whether in education, business, or healthcare, Design Thinking can address challenges effectively.
                    </p>
                </div>

                <div className={Styles.DesignThinkingPageCardSecondContainer}>
                    <p className={Styles.DesignThinkingPageCardTitle}>Real-World Applications of Design Thinking</p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Healthcare: Designing patient-centric care models and medical devices.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Technology: Developing intuitive and user-friendly software interfaces.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Education: Enhancing learning experiences and curriculum design.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Business: Innovating products and improving customer experiences.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                    For example, companies like Apple and IDEO have leveraged Design Thinking to create groundbreaking products that resonate deeply with users.
                    </p>

                </div>

                <div className={Styles.DesignThinkingPageCardSecondContainer}>
                    <p className={Styles.DesignThinkingPageCardTitle}>How to Get Started with Design Thinking</p>
                    <p className={Styles.DesignThinkingContentText}>
                    To implement Design Thinking:
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Cultivate a mindset of empathy and openness within your team.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Use tools like empathy maps, journey mapping, and brainstorming frameworks.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Embrace failure as a step towards refining your solutions.
                    </p>
                    <p className={Styles.DesignThinkingContentText}>
                        <AnchorIcon className={Styles.CareersPageThiredContainerSecondContentTextIcon} />
                        Start small: Apply the methodology to a single challenge before scaling it.
                    </p>

                </div>

                <div className={Styles.DesignThinkingPageCardSecondContainer}>
                    <p className={Styles.DesignThinkingPageCardTitle}>Conclusion</p>
                    <p className={Styles.DesignThinkingPageCardFirstContent}>
                    Design Thinking isn't just a methodology; it’s a mindset. 
                    It challenges conventional approaches and fosters innovation by focusing on real people and their needs. 
                    Whether you're designing a product, a service, or a strategy, adopting Design Thinking can lead to transformative results.</p>
                    <p className={Styles.DesignThinkingPageCardFirstContent}>
                    By embracing Design Thinking, you’re not only solving problems—you’re creating opportunities for growth, innovation, and impact. </p>
                </div>
            </div>
        </div>
    )
}
export default DesignThinking
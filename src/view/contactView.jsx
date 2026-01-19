import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

export function ContactView(props) {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact_header">
                    <div className="contact_title_container">
                        <h1 className="contact_title">Contact</h1>
                    </div>
                </div>
                <div className="contact_container">
                    <p>Interested in what I can do?</p>
                    <br/>
                    <p>Let's get in touch!</p>
                    <div style={{display:"flex", marginTop:"10px", gap:"10px", justifyContent:"center"}}>
                        <div>
                            <a href={"https://github.com/Brainthread"} target="_blank" rel="noopener noreferrer">
                                <FaGithub size={50} color="#FFF" />
                            </a>
                        </div>
                        <div>
                            <a href={"mailto:keidukebergman@gmail.com"} target="_blank" rel="noopener noreferrer">
                                <IoMdMail size={50} color="#FFF" />
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.linkedin.com/in/kei-duke-bergman-37771b183"} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={50} color="#FFF" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
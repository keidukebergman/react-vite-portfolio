import { FaGithub } from 'react-icons/fa';
import { FiGlobe, FiFileText, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export function ContactView(props) {
    function create_icon(link, icon_type)
    {
        if (link != "")
        {
            const Icon = icon_type
            return (
                <div>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Icon size={40} color="#FFF" />
                    </a>
                </div>
            )
        }
        return ""
    }
    return (
        <section id="contact">
            <div className='container'>
                <div className='contact_header'>
                    <div className='contact_title_container'>
                        <div className='contact_title'><h1>Contact</h1></div>
                    </div>
                        <p>Ways to get in touch</p>
                    <br/>
                </div>
                <div className="contact_content">
                    <p>{props.info.main_text}</p>
                    <div className="contact_icons">
                        <div className="contact_element">
                            {create_icon(props.info.email_link, FiMail)}
                        </div>
                        <div className="contact_element">
                            {create_icon(props.info.linkedin_link, FaLinkedin)}
                        </div>
                        <div className="contact_element">
                            {create_icon(props.info.github_link, FaGithub)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
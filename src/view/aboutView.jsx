import Carousel from "../utilities/carousel";
import { TbFileCv } from "react-icons/tb";

export function AboutView(props) {
    function format_images(images){
        return images.map(element => import.meta.env.BASE_URL + "/img/about/" + element);
    }
    function link_CV(link){
        if (link == "")
            return "";
        else
        {
            return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <TbFileCv size={40} color="#FFF" />
                </a>
            );
        }
    }
    return (
        <section id="about">
            <div className='container'>
                <div className='about_header'>
                    <div className='about_title_container'>
                        <div className='about_title'><h1>About Me</h1></div>
                    </div>
                        <p>I don't really know what to put here</p>
                    <br/>
                </div>
                <div className="about_content">
                    <Carousel images={format_images(props.info.images)}/>
                    <p>{props.info.main_text}</p>
                    <div className="cv_container">{link_CV("documents/cv.pdf")}</div>
                </div>
            </div>
        </section>
    );
} 

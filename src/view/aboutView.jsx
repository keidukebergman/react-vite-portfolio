import { TbFileCv } from "react-icons/tb";
import pdf from "../data/keidb_CV.pdf";
export function AboutView(props) {
    return (
        <section id="about">
            <div className="container">
                <div className="about_header">
                    <div className="about_title_container">
                        <h1 className="about_title">About me</h1>
                    </div>
                </div>
                <div className="about_container">
                    {props.aboutme}
                    <div style={{marginTop:"15px"}}>
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            <TbFileCv size={50} color="#FFF" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 
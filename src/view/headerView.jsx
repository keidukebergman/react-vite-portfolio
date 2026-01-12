import { BackgroundShaderView } from "./backgroundShaderView";

export function HeaderView(props) {
    return (
            <>
                <div className="header_container">
                    <nav>
                        <img src="img/KeiLogo1.png" className="logo" alt="Logo"/>
                        <ul>
                            <li><a href="#work">My Work</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#shaders">Some shaders</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header_text_box">
                    <img src="img/kei_inspirational_photo.png" className="header_image" alt="Kei"/>
                    <div className="header_text">
                        <h1 className="heading-primary">
                            <span>Kei Duke-Bergman</span>
                        </h1>
                        <p>Computer Science and Interactive Media Technology student @ KTH</p>
                    </div>
                </div>
            </>
    );
}
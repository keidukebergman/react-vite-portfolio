import { AboutView } from "../view/aboutView";
import { ProjectView } from "../view/projectView";

export function AboutPresenter(props) {
    return (
        <AboutView aboutme = {props.aboutme}/>
    );
} 

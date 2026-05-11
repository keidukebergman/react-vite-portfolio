import { AboutView } from "../view/aboutView";

export function AboutPresenter(props) {
    return (
        <AboutView info = {props.info}/>
    );
} 

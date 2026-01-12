import { ProjectView } from "../view/projectView";

export function ProjectPresenter(props) {
    return (
        <ProjectView projectData = {props.projectData}/>
    );
} 

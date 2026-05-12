import { FaGithub } from 'react-icons/fa';
import { RiPagesLine } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import Carousel from '../utilities/carousel';

export function ProjectView(props) {
    
    function CreateCarouselData (carousel_data)
    {
        return carousel_data.map(element => import.meta.env.BASE_URL + "/img/projects/" + element);
    }
    const sortedProjects = [...props.projectData.projects].sort((a,b) => b.pride - a.pride);
    function DisplayProjectData({data})
    {
        return(
            <div className="work_entry">
                <h2>{data.title}</h2>
                <div className="contents">
                    <div className="description_block">
                        <div>
                            <strong>Keywords:</strong> {data.keywords.map((keyword, index) => (
                            <span key={index}>{keyword}{index < data.keywords.length - 1 ? ', ' : ''}</span>
                            ))}
                        </div>
                        <p><strong>Year:</strong> {data.year}</p>
                        <br/>
                        <p><strong>Description:</strong><br/><br/>{data.description}</p>
                        <br/>
                        <p><strong>My contributions:</strong><br/><br/>{data.contributions}</p>
                        <br/>
                        <div className='links'>
                                {data.github && (
                                    <div>
                                        <a href={data.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub size={30} color="#FFF" />
                                        </a>
                                    </div>
                                )}
                                {data.website && (
                                    <div>
                                        <a href={data.website} target="_blank" rel="noopener noreferrer">
                                            <FiGlobe size={30} color="#FFF" />
                                        </a>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className="media">
                        {data.youtube && (
                                <iframe src={data.youtube}
                                title="YouTube video player" 
                                frameborder="0" 
                                style={{ width: '100%', aspectRatio: '16/9' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>  
                                </iframe>
                        )}
                        {data.images &&
                        (
                            <div className="image_container">
                            {data.images.map((imagePath, index) => (
                                <div className="image_inner_container">
                                    <img 
                                    key={index} 
                                    src={import.meta.env.BASE_URL+"/img/projects/"+imagePath} 
                                    alt={`Image ${index}`} 
                                    style={{ width: '100%', aspectRatio: '16/9' }}
                                    />
                                </div>
                            ))}
                            </div>
                        )}
                        {data.carousel && data.carousel.length != 0 && (
                            <div>
                                <Carousel images={CreateCarouselData(data.carousel)}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
    return (
    <section id="work">
        <div className="container">
            <div className='work_header'>
                <div className='work_title_container'>
                    <div className='work_title'> <h1>My Work</h1> </div>
                </div>
                <br/>
                <p>Coming from a solid Computer Science foundation, my specialities are graphics programming, game design and development of electronic interfaces. Here is an overview of some of my projects.</p>
            </div>
            <div className="work_container">
                {sortedProjects.map((project)=>(<DisplayProjectData key={project.title} data={project}/>))}
            </div>
        </div>     
    </section>
    );
} 
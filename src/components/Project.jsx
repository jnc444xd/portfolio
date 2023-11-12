import { useEffect } from 'react';
import projectArr from '../../assets/projectData';
import fitHub from '../../images/fithub.png';
import travelBlog from '../../images/travel-blog.png';
import weatherDashboard from '../../images/weather-dashboard.png';
import employeeTracker from '../../images/employee-tracker.png';
import codingQuiz from '../../images/coding-quiz.png';
import techBlog from '../../images/tech-blog.png';

export default function Project() {

    useEffect(() => {

        // Mouse hover

        const cards = document.querySelectorAll('.project-card');

        const toggleShow = (event) => {
            const image = event.target.nextElementSibling;

            image.classList.toggle('show');
        };

        cards.forEach((card) => {
            card.addEventListener('mouseover', toggleShow);
            card.addEventListener('mouseleave', toggleShow);
        });
    }, []);

    const getImage = (projectName) => {
        switch (projectName) {
            case 'FitHub':
                return fitHub;
            case 'Travel Blog':
                return travelBlog;
            case 'Weather Dashboard':
                return weatherDashboard;
            case 'Employee Tracker':
                return employeeTracker;
            case 'Coding Quiz Game':
                return codingQuiz;
            case 'Tech Blog':
                return techBlog;
        }
    }

    return (
        <main className="project-container">
            {projectArr.map((project, i) => (
                <section key={i}>
                    <a href={project.url} target="_blank">
                        <div className="project-card">{project.name}</div>
                        <img className="project-img" src={getImage(project.name)} alt={project.alt}></img>
                    </a>
                </section>
            ))}
        </main>

        // <main className="project-container">
        //     <section>
        //         <a href={projectArr[0].url} target="_blank">
        //             <div className="project-card">{projectArr[0].name}</div>
        //             <img src={fitHub} alt={projectArr[0].alt} className="project-img"></img>
        //         </a>
        //     </section>
        //     <section>
        //         <a href={projectArr[1].url} target="_blank">
        //             <div className="project-card">{projectArr[1].name}</div>
        //             <img src={travelBlog} alt={projectArr[1].alt} className="project-img"></img>
        //         </a>
        //     </section>
        //     <section>
        //         <a href={projectArr[2].url} target="_blank">
        //             <div className="project-card">{projectArr[2].name}</div>
        //             <img src={weatherDashboard} alt={projectArr[2].alt} className="project-img"></img>
        //         </a>
        //     </section>
        //     <section>
        //         <a href={projectArr[3].url} target="_blank">
        //             <div className="project-card">{projectArr[3].name}</div>
        //             <img src={employeeTracker} alt={projectArr[3].alt} className="project-img"></img>
        //         </a>
        //     </section>
        //     <section>
        //         <a href={projectArr[4].url} target="_blank">
        //             <div className="project-card">{projectArr[4].name}</div>
        //             <img src={codingQuiz} alt={projectArr[4].alt} className="project-img"></img>
        //         </a>
        //     </section>
        //     <section>
        //         <a href={projectArr[5].url} target="_blank">
        //             <div className="project-card">{projectArr[5].name}</div>
        //             <img src={techBlog} alt={projectArr[5].alt} className="project-img"></img>
        //         </a>
        //     </section>
        // </main>
    )
}
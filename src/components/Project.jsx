import { useEffect } from 'react';
import projectArr from '../../assets/projectData';
import fitHub from '../../images/fithub.png';
import travelBlog from '../../images/travel-blog.png';
import weatherDashboard from '../../images/weather-dashboard.png';
import employeeTracker from '../../images/employee-tracker.png';
import codingQuiz from '../../images/coding-quiz.png';
import techBlog from '../../images/tech-blog.png';
import icon from '../../images/icon.png';

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
    };

    const handleHome = () => {
        document.location.replace('/')
    };

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
            <section>
                <img id="icon" src={icon} onClick={handleHome}></img>
            </section>
        </main>
    )
}
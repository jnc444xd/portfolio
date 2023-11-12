import { useEffect } from 'react';
import fitHub from '../../images/fithub.png';
import travelBlog from '../../images/travel-blog.png';
import weatherDashboard from '../../images/weather-dashboard.png';
import employeeTracker from '../../images/employee-tracker.png';
import codingQuiz from '../../images/coding-quiz.png';
import techBlog from '../../images/tech-blog.png';

export default function Project() {

    useEffect(() => {

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

    return (
        <main className="project-container">
            <section>
                <a href="https://morning-ravine-18715-2df03199dbf8.herokuapp.com/" target="_blank">
                    <div className="project-card">FitHub</div>
                    <img src={fitHub} alt="FitHub Screenshot" className="project-img"></img>
                </a>
            </section>
            <section>
                <a href="https://ramitaarora.github.io/travel-guide/" target="_blank">
                    <div className="project-card">Travel Blog</div>
                    <img src={travelBlog} alt="Travel Blog Screenshot" className="project-img"></img>
                </a>
            </section>
            <section>
                <a href="https://jnc444xd.github.io/weather-dashboard/" target="_blank">
                    <div className="project-card">Weather Dashboard</div>
                    <img src={weatherDashboard} alt="Weather Dashboard Screenshot" className="project-img"></img>
                </a>
            </section>
            <section>
                <a href="https://github.com/jnc444xd/employee-tracker" target="_blank">
                    <div className="project-card">Employee Tracker</div>
                    <img src={employeeTracker} alt="Employee Tracker Screenshot" className="project-img"></img>
                </a>
            </section>
            <section>
                <a href="https://jnc444xd.github.io/coding-quiz-game/" target="_blank">
                    <div className="project-card">Coding Quiz Game</div>
                    <img src={codingQuiz} alt="Coding Quiz Game Screenshot" className="project-img"></img>
                </a>
            </section>
            <section>
                <a href="https://grim-ghost-05578-d643ed2467b4.herokuapp.com/login" target="_blank">
                    <div className="project-card">Tech Blog</div>
                    <img src={techBlog} alt="Tech Blog Screenshot" className="project-img"></img>
                </a>
            </section>
        </main>
    )
}
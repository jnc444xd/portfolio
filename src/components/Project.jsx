import { useEffect } from 'react';
import fitHub from '../../images/fithub.png';
import travelBlog from '../../images/travel-blog.png';
import weatherDashboard from '../../images/weather-dashboard.png';
import employeeTracker from '../../images/employee-tracker.png';
import codingQuiz from '../../images/coding-quiz.png';
import techBlog from '../../images/tech-blog.png';

const projectArr = [{
    name: 'FitHub',
    url: 'https://morning-ravine-18715-2df03199dbf8.herokuapp.com/',
    alt: 'FitHub Screenshot',
    img: {fitHub},
},
{
    name: 'Travel Blog',
    url: 'https://ramitaarora.github.io/travel-guide/',
    alt: 'Travel Blog Screenshot',
    img: {travelBlog},
},
{
    name: 'Weather Dashboard',
    url: 'https://jnc444xd.github.io/weather-dashboard/',
    alt: 'Weather Dashboard Screenshot',
    img: {weatherDashboard},
},
{
    name: 'Employee Tracker',
    url: 'https://github.com/jnc444xd/employee-tracker',
    alt: 'Employee Tracker Screenshot',
    img: {employeeTracker},
},
{
    name: 'Coding Quiz Game',
    url: 'https://jnc444xd.github.io/coding-quiz-game/',
    alt: 'Coding Quiz Screenshot',
    img: {codingQuiz},
},
{
    name: 'Tech Blog',
    url: 'https://grim-ghost-05578-d643ed2467b4.herokuapp.com/',
    alt: 'Tech Blog Screenshot',
    img: {techBlog},
},
];

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

    return (
        <main className="project-container">
            <section>
                <a href={projectArr[0].url} target="_blank">
                    <div className="project-card">{projectArr[0].name}</div>
                    <img src={fitHub} alt={projectArr[0].alt} className="project-img"></img>
                </a>
            </section>
            <section>
                <a href={projectArr[1].url} target="_blank">
                    <div className="project-card">{projectArr[1].name}</div>
                    <img src={travelBlog} alt={projectArr[1].alt} className="project-img"></img>
                </a>
            </section>
            <section>
                <a href={projectArr[2].url} target="_blank">
                    <div className="project-card">{projectArr[2].name}</div>
                    <img src={weatherDashboard} alt={projectArr[2].alt} className="project-img"></img>
                </a>
            </section>
            <section>
                <a href={projectArr[3].url} target="_blank">
                    <div className="project-card">{projectArr[3].name}</div>
                    <img src={employeeTracker} alt={projectArr[3].alt} className="project-img"></img>
                </a>
            </section>
            <section>
                <a href={projectArr[4].url} target="_blank">
                    <div className="project-card">{projectArr[4].name}</div>
                    <img src={codingQuiz} alt={projectArr[4].alt} className="project-img"></img>
                </a>
            </section>
            <section>
                <a href={projectArr[5].url} target="_blank">
                    <div className="project-card">{projectArr[5].name}</div>
                    <img src={techBlog} alt={projectArr[5].alt} className="project-img"></img>
                </a>
            </section>
        </main>
    )
}
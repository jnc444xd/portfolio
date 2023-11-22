import github from '../../images/github-logo.png';
import linkedin from '../../images/linkedin-logo.png';
import stack from '../../images/stack-logo.png';

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/jnc444xd" target="_blank">
                <img src={github} alt="GitHub Logo"></img>
            </a>
            <a href="https://stackoverflow.com/users/22904259/justin-c" target="_blank">
                <img src={stack} alt="StackOverflow Logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/justin-undefined-32b08729b/" target="_blank">
                <img src={linkedin} alt="LinkedIn Logo"></img>
            </a>
        </footer>
    )
}
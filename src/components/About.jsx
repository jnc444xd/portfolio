import { useEffect } from 'react';
import icon from '../../images/icon.png';
import car from '../../images/car.png';

export default function About() {

    useEffect(() => {

        // Intersection Observer

        const cards = document.querySelectorAll('.about-card');

        const callback = (cards) => {
            cards.forEach(card => {
                card.target.classList.toggle('show', card.isIntersecting)
            })
        };

        const options = {
            threshold: 1,
            rootMargin: '0px 0px -200px 0px',
        };

        const observer = new IntersectionObserver(callback, options);

        cards.forEach(card => {
            observer.observe(card)
        });

        // Slide Animation

        const startAnimation = (event) => {
            const target = event.currentTarget;
            const text = target.querySelector('.slide-about');
            text.style.animation = 'slideRight 2s linear infinite';
        }

        const stopAnimation = (event) => {
            const target = event.currentTarget;
            const text = target.querySelector('.slide-about');
            text.style.animation = 'none';
        }

        const containers = document.querySelectorAll('.slide-container');

        containers.forEach(container => {
            container.addEventListener('mouseover', startAnimation);
            container.addEventListener('mouseleave', stopAnimation);
        });

        return () => {
            observer.disconnect();
        };

    }, []);

    const handleHome = () => {
        document.location.replace('/')
    };

    // const scrollVariable = () => {
    //     const htmlEl = document.documentElement;
    //     const scrollPercent = htmlEl.scrollTop / htmlEl.clientHeight;
    //     htmlEl.style.setProperty('--scroll', Math.max((scrollPercent * 100) - 160, 0));
    // }

    // window.addEventListener('scroll', scrollVariable);
    // window.addEventListener('resize', scrollVariable);

    // scrollVariable();

    return (
        <div className="about-container">
            <section>
                <div className="about-card">a little bit about myself</div>
                <div className="slide-container">
                    <div className="slide-about">I AM</div>
                </div>
            </section>
            <section>
                <div className="about-card">i was raised in atlanta</div>
                <div className="slide-container">
                    <div className="slide-about">NOW BASED IN LOS ANGELES</div>
                </div>
            </section>
            <section>
                <div className="about-card">good design is obvious, great design is <span className="transparent">transparent</span></div>
                <div className="slide-container">
                    <div className="slide-about">FRONT END ADDICTED</div>
                </div>
            </section>
            <section>
                <div className="about-card">completed a full-stack coding bootcamp through UCLA</div>
                <div className="slide-container">
                    <div className="slide-about">FULL STACK CAPABLE</div>
                </div>
            </section>
            <section>
                <div className="about-card">simplicity is the greatest sophistication</div>
                <div className="slide-container">
                    <div className="slide-about">LOVER OF DRY CODE</div>
                </div>
            </section>
            <section>
                <div className="about-card">
                    <div>my mother was an artist who showed me the power of a good picture</div>
                </div>
                <div className="slide-container">
                    <div className="slide-about">ASPIRATIONAL GRAPHIC DESIGNER</div>
                </div>
            </section>
            <section>
                <div className="about-card">if you're afraid to fail then you're probably going to fail</div>
                <div className="slide-container">
                    <div className="slide-about">WEEKEND WARRIOR</div>
                </div>
            </section>
            <section onClick={handleHome}>
                <div className="about-card">
                    <div>country roads,</div>
                    <div>take me home,</div>
                    <div>to the place I belong...</div>
                </div>
                <img id="icon" src={icon}></img>
            </section>
            {/* <section className="scrollDiv">
                <img id="basketball-img" src={basketball} alt="Basketball"></img>
            </section> */}
        </div>
    )
}
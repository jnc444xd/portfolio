import { useEffect } from 'react';

export default function About () {

    useEffect(() => {

        const cards = document.querySelectorAll('.about-card');

        const callback = (cards) => {
            cards.forEach(card => {
                card.target.classList.toggle('show', card.isIntersecting)
            })
        };

        const options = {
            threshold: 1,
            rootMargin: '0px 0px -150px 0px',
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

        return () => {s
            observer.disconnect();
        };

    }, []);

    return (
        <main className="about-container">
            <section>
                <div className="about-card">a little bit about myself</div>
                <div className="slide-container">
                    <div className="slide-about">I AM</div>
                </div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div className="slide-container">
                    <div className="slide-about">BASED IN LOS ANGELES</div>
                </div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div className="slide-container">
                    <div className="slide-about">FRONT END ADDICTED</div>
                </div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div className="slide-container">
                    <div className="slide-about">FULL STACK CAPABLE</div>
                </div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div className="slide-container">
                    <div className="slide-about">LOVER OF DRY CODE</div>
                </div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div className="slide-container">
                    <div className="slide-about">ASPIRATIONAL GRAPHIC DESIGNER</div>
                </div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div className="slide-container">
                    <div className="slide-about">PART-TIME HOOPER</div>
                </div>
            </section>
        </main>
    )
}
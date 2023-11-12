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
            rootMargin: '0px 0px -200px 0px',
        };

        const observer = new IntersectionObserver(callback, options);

        cards.forEach(card => {
            observer.observe(card)
        });

        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <main className="about-container">
            <section>
                <div className="about-card">a little bit about myself</div>
                <div className="about-info">I AM</div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div>BASED IN LOS ANGELES</div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div>FRONT END ADDICTED</div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div>FULL STACK CAPABLE</div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div>LOVER OF DRY CODE</div>
            </section>
            <section>
                <div className="about-card">text</div>
                <div>ASPIRATIONAL GRAPHIC DESIGNER</div>
            </section>
        </main>
    )
}
export default function Contact() {
    return (
        <main>
            <h2 className="contact-header">Contact</h2>
            <section className="contact-form">
                <label>Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text" ></input>
                <label>Message</label>
                <textarea id="contactMsg" rows="3"></textarea>
                <button>Let's Connect!</button>
            </section>
        </main>
    )
}
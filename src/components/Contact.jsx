import { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // For now this only clears input fields
    const handleFormSubmit = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <main>
            <h2 className="contact-header">Contact</h2>
            <section className="contact-form">
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Message</label>
                <textarea id="contactMsg" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button id="contactBtn" onClick={handleFormSubmit}>Let's Connect!</button>
            </section>
        </main>
    )
}
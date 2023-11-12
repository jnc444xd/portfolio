import { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // For now this only clears input fields
    const handleFormSubmit = () => {

        if (name && email) {
            alert("Thanks! Will be in touch soon 😎");
            setName('');
            setEmail('');
            setMessage('');
            document.location.replace('/');
        } else {
            alert("Please enter name and email so I know who to contact 🥸");
        }

        
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
                <textarea rows="3" value={message} placeholder="If you want to tell me more..." onChange={(e) => setMessage(e.target.value)}></textarea>
                <button id="contactBtn" onClick={handleFormSubmit}>Let's Connect!</button>
            </section>
        </main>
    )
}
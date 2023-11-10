export default function Header({ links }) {
    return (
        <header>
            <div className="name">
                <h1>JUSTIN</h1>
                <h2>CHUN</h2>
            </div>
            <div>
                <ul>
                    {links.map((link) => link)}
                </ul>
            </div>
        </header>
    );
}
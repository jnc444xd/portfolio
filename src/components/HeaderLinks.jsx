import { Link } from 'react-router-dom';
import Header from './UI/Header';

export default function HeaderLinks() {
    return (
        <Header
            links={[
                <Link key={1} to="/about" className="header-links">
                    ABOUT
                </Link>,
                <Link key={2} to="/work" className="header-links">
                    WORK
                </Link>,
                <Link key={3} to="/contact" className="header-links">
                    CONTACT
                </Link>,
            ]}
        />
    );
}
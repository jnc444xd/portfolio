import { Link } from 'react-router-dom';
import Header from './UI/Header';

export default function Header() {
    return (
        <Header
            links={[
                <Link key={1} to="/about">
                    ABOUT
                </Link>,
                <Link key={2} to="/work">
                    WORK
                </Link>,
                <Link key={3} to="/contact">
                    CONTACT
                </Link>,
            ]}
        />
    );
}
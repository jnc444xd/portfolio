import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from '../../images/profile-picture.png';

export default function Header({ links }) {
    return (
        <header>
            <Container>
                <Row>
                    <Col sm={8}>
                        <Row className="header-name">JUSTIN</Row>
                        <Row className="header-name">CHUN</Row>
                        <img src={profilePic} id="profile-pic"></img>
                    </Col>
                    <Col sm={4}>
                        {links.map((link, index) => (
                            <Row key={index}>{link}</Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
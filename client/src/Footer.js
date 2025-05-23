import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import logo from "./assets/logo-dev.png";
import { FaUserCircle, FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa"; 

function Footer() {
  return (
    <div style={{backgroundColor:'#D9D9D9'}}>
    <Container>
      <Row>
        <Col style={{textAlign:"center"}}>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="/Top Categories">Top Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Photopraphy">Photopraphy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Sculpture">Sculpture</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Drowing">Drowing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Fine Art Print">Fine Art Print</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr/>
        </Col>
      </Row>
      <Row>
      <Col className='col-md-4'>
            <img src={logo} alt="Logo" width="140" height="40" className="me-2" />
            <p>Sign Up to Receive 10% Off Your First Order
            Discover new art and collections added weekly by our curators.</p>
            <input type='text' className='formControl' placeholder='Inter your email address'/>
            <table className='table'>
                <tr>
                    <td><a href=''><FaUserCircle size={28} /></a></td>
                    <td><a href=''><FaFacebook size={28} /></a></td>
                    <td><a href=''><FaYoutube size={28} /></a></td>
                    <td><a href=''><FaLinkedin size={28} /></a></td>
                    <td><a href=''><FaInstagram size={28} /></a></td>
                </tr>
            </table>
        </Col>
        <Col className='col-md-4'>
            <h4>For collectors</h4>
            <p>How to Buy art Returns Help Center Gift Cart</p>
        </Col>
        <Col className='col-md-4'>
            <h4>HerNet Fine Arts</h4>
            <p>About HerNet fine Art Stories The other Art Fair Sell on HerNet fine Art Affiliate Program  Careers Contact Support</p>
        </Col>
        <hr/>
      </Row>
      <Row>
      <Col style={{textAlign:"center"}}>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="/Top Categories">Terms of Service</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Photopraphy">Privacy Notice</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Sculpture">Cookie Policy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Drowing">Copyright Policy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Fine Art Print">Bangladesh Notice of Collection </Nav.Link>
                </Nav.Item>
            </Nav>
            <hr/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Footer;
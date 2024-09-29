import Identicon from 'identicon.js';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

const SiteNavbar = ({token, account, setAccount, setToken}) => {
    const navigate = useNavigate()
    
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('account')
        setToken('')
        setAccount('');
        navigate('/login');
    }
    return (
        <Navbar collapseOnSelect expand="md" variant="dark" bg='coolColor' fixed="top" className="site-navbar">
            <Container>
                {/* <Navbar.Brand as={Link} to="/"><img className='ml-2' height="40" src={logo} /></Navbar.Brand> */}
                <h2 className="navbar-logo">GauMedi</h2>
                <Nav justify>
                    { token!=='' && account!=="" ? 
                        <>
                            <Nav.Link className='img'>
                                <img
                                    className='ml-2 img-avatar'
                                    width='30'
                                    height='30'
                                    src={`data:image/png;base64,${new Identicon(account, 40).toString()}`}
                                    alt="profile"
                                />
                            </Nav.Link>
                            <Nav.Link>
                                <small className='text-nav'>
                                    {account.slice(0, 5)+ '...' + account.slice(-4)}
                                </small>
                            </Nav.Link>
                            <Nav.Link onClick={logout}>
                                <small className='text-nav logout-btn'>
                                    Log&nbsp;Out
                                </small>
                            </Nav.Link>
                        </>
                        : 
                        <>
                            <Nav.Link as={Link} to="/login" >
                                <small className='text-nav'>
                                    Login
                                </small>
                            </Nav.Link>
                            <Nav.Link  as={Link} to="/register" >
                                <small className='text-nav'>
                                    Register
                                </small>
                            </Nav.Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}


export default SiteNavbar

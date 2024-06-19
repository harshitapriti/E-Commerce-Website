import { Link } from 'react-router-dom';
import '../App.css';
import logoLight from '../images/logoLight.png';

//footer component
const Footer = () => {
    return(
        <>
        <nav className="navbar" style={{backgroundColor: '#960037'}}>
  <div className="container  d-flex">
    <Link className="navbar-brand" to='/'>
      <img src={logoLight} style={{ color: 'white', width: '160px', height: '80px' }} alt="Bootstrap" />
    </Link>
    <p className='copyright-msg' style={{color: 'white', marginTop: '2vh'}}>&copy; 2024, Urban Hue</p>
  </div>
</nav>
        </>
    )
};

export default Footer;
import { Link } from "react-router-dom";
import './Header.css'
import dglogo from '../../assets/DG-New-Logo.jpeg';


const Header = () => {

    return (
        <div className='mainHeader'>
            <div className='logoSection'>
                <img src={dglogo} className='logoImage'/>
            </div>
            <div className='navSection'>
                <ul className='navbar'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="About">ABOUT</Link></li>
                    <li><Link to="Product">PRODUCT</Link></li>
                    <li><Link to="Service">SERVICE</Link></li>
                    <li><Link to="Gallery">GALLERY</Link></li>
                    <li><Link to="Blog">BLOG</Link></li>
                    <li><Link to="Placement">PLACEMENT</Link></li>
                     <li><Link to="productMoreDetails"></Link></li>
                     <li><Link to="galleryDetails"></Link></li>
                </ul>
            </div>
        </div>
        // <h3 style={{textAlign:'center',backgroundColor:'purple',color:'white'}}> THIS IS THE HEADER </h3>
    )

}

export default Header;
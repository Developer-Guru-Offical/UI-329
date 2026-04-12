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
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PRODUCT</a></li>
                    <li><a href="#">SERVICE</a></li>
                    <li><a href="#">GALLERY</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">PLACEMENT</a></li>
                </ul>
            </div>
        </div>
        // <h3 style={{textAlign:'center',backgroundColor:'purple',color:'white'}}> THIS IS THE HEADER </h3>
    )

}

export default Header;
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import './navbar.css';

export default function Navbar(){

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        var ulNavbar = document.getElementsByClassName('ulNavbar');
        if(menuVisible){
            ulNavbar[0].style.display = 'none';
        } else {
            ulNavbar[0].style.display = 'flex';
        }
    };

    console.log(menuVisible);

    return (
        <Fragment>
            <div className="parentNavbar">
                <button className="btnMenu" onClick={toggleMenu}>
                    {menuVisible ? <i className='bx bx-x' ></i> : <i className='bx bx-menu' ></i>}
                </button>
                <ul className="ulNavbar">
                    <li>
                        <Link to='' className="LinkNavbar">
                            Product <i className='bx bxs-down-arrow' ></i>
                        </Link>
                    </li>
                    <li>
                        <Link to='' className="LinkNavbar">
                            Solutions <i className='bx bxs-down-arrow' ></i>
                        </Link>
                    </li>
                    <li>
                        <Link to='' className="LinkNavbar">
                            Customer Stories
                        </Link>
                    </li>
                    <li>
                        <Link to='' className="LinkNavbar">
                            Pricing 
                        </Link>
                    </li>
                    <li>
                        <Link to='' className="LinkNavbar">
                            Demo 
                        </Link>
                    </li>
                    <li>
                        <Link to='' className="LinkNavbar">
                            Resources <i className='bx bxs-down-arrow' ></i>
                        </Link>
                    </li>
                </ul>
                <ul className="ulParentBtns">
                    <li>
                        <Link to='/start-your-free-trial' className="btnFreeTrial">
                        Start Your Free Trial 
                        </Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}
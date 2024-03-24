import { Fragment } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
export default function Header(){
    return(
        <Fragment>
            <header>
                <div className="parentLogoBrand">
                    <Link to='/'>
                        <img src="/public/nanoSH-logoRBG.png" alt="NanoServeHub" className='LogoBrand'/>
                    </Link>
                    <ul className='ulLinksNavbar'>
                        <li className='Contact'>
                            <Link to='/'>
                                <i className='bx bx-phone' ></i>
                            </Link>
                        </li>
                        <li className='Contact'>
                            <Link to='/'>
                                <i className='bx bx-envelope' ></i>
                            </Link>
                        </li>
                        <li className='Contact'>
                            <Link to='/' >
                                <i className='bx bx-calendar' ></i>
                            </Link>
                        </li>
                        <li>
                            <span    className='verticaleLine'></span>
                        </li>
                        <li>
                            <Link to='' className='BtnLogin'>
                                login
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </Fragment>
    )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/Nav.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

const Nav = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <nav>
                {/* Mobile Nav */}
                <div className={`mobile-nav ${nav ? "open-nav" : ""}`}>
                    <div onClick={openNav} className="mobile-nav__close">
                        <p className='mobile-nav__XBtn'>X</p>
                    </div>
                    <ul className='mobile-nav__links'>
                        <li>
                            <Link onClick={openNav} to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/cart">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Desktop Nav */}
                <div className="nav">
                    <button className='nav__lightBtn bg-red-600 p-3'>Dark/Light</button>
                    <div className="nav__left">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            {/* <p className="nav__logo"><img src={Logo} alt='' className='nav__logo' /></p> */}
                            <p className='nav__logo'>Spider-Man 2</p>
                        </Link>
                    </div>
                    <div className="nav__btns">
                        <Link className="nav__btnSignIn" to="/">
                            Home
                        </Link>
                        <Link className="" to="/cart">
                            <IconButton>
                                <ShoppingCartIcon
                                    fontSize='large'
                                />
                            </IconButton>
                        </Link>
                    </div>

                    {/* mobile nav  */}
                    <div className="mobile-nav__hamburger" onClick={openNav}>
                        <svg viewBox="0 0 100 80" width="40" height="40" className="mobile-nav__hamburgerIcon">
                            <rect width="100" height="15"></rect>
                            <rect y="30" width="100" height="15"></rect>
                            <rect y="60" width="100" height="15"></rect>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
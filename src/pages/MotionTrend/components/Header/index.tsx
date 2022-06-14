import React from 'react';

function Header() {
    return (
        <header className='header'>
            <div className="headerWrapper containerPage">
                <nav className='navWrapper'>
                    <div className="logo">
                        <img src='/assets/images/logo.png' />
                    </div>

                    <div className="nav-item">
                        <p className="nav-text">
                            Discover
                        </p>
                    </div>

                    <div className="nav-item">
                        <p className="nav-text">
                            Job
                        </p>
                    </div>
                </nav>

                <div className="searchWrapper">
                    <div className="search-box">
                        <input type="text" className="search-input" placeholder='Search for motion trend......' />
                    </div>
                </div>

                <div className="authWrapper">
                    <div className="search">
                        <img src='/assets/icons/search-icon.png' alt="seach" />
                    </div>
                    <div className="auth-item">
                        <p className="auth-text">
                            Login
                        </p>
                    </div>
                    <div className="auth-item">
                        <p className="auth-text">
                            Sign Up
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
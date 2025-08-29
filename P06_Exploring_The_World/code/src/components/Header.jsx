import { useState } from 'react';

const Header = () => {
    const [loginLabel, setLoginLabel] = useState('Logout');

    console.log('Header Rendered!');

    const loginHandler = () => {
        loginLabel === 'Logout' ? setLoginLabel('Login') : setLoginLabel('Logout');
    };

    return (
        <div className='header'>
            <div className='logo-container'>
                <a href='/' className='app-logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='btn-login' onClick={loginHandler}>{loginLabel}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

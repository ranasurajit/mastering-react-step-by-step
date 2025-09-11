import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loginLabel, setLoginLabel] = useState('Logout');

    console.log('Header Rendered!');

    const loginHandler = () => {
        loginLabel === 'Logout' ? setLoginLabel('Login') : setLoginLabel('Logout');
    };

    // No dependency array
    useEffect(() => {
        console.log('useEffect with No dependency array is called after every header rendered');
    });

    // with Empty dependency array
    useEffect(() => {
        console.log('useEffect with [] dependency array is called once after 1st time header is rendered');
    }, []);

    // with state variable dependency array
    useEffect(() => {
        console.log('useEffect with state variable `[loginLabel]` as dependency array is called everytime `loginLabel` is modified');
    }, [loginLabel]);

    return (
        <div className='header'>
            <div className='logo-container'>
                <a href='/' className='app-logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className='btn-login' onClick={loginHandler}>{loginLabel}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [loginLabel, setLoginLabel] = useState('Logout');
    const onlineStatus = useOnlineStatus();

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
        <div className='flex justify-between bg-orange-200 shadow-lg xl:bg-orange-200 lg:bg-red-400 sm:bg-amber-800'>
            <div className='logo-container'>
                <a href='/' className='app-logo' />
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>
                        {onlineStatus ? <span>🟢</span> : <span>🔴</span>}
                    </li>
                    <li className='px-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className='px-4'>Cart</li>
                    <button className='btn-login' onClick={loginHandler}>{loginLabel}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

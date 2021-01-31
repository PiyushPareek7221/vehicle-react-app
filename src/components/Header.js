import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'
const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={TeslaLogo} alt='' />
            </div>
            <div className='header-center'>
                <p>Model 5</p>
                <p>Model 3</p>
                <p>Model x</p>
                <p>Model y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>
            <div className='header-right'>
                <p>Shop</p>
                <p className='pa'>Your Account</p>
            </div>
        </div>
    )
}

export default Header

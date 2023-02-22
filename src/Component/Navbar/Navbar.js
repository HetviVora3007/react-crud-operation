import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar-main-container'>
                <div className='navbar-container'>
                    <div className='left-side-container'>
                        <p>CRUD Operation</p>
                    </div>
                    <div className='right-side-container'>
                        <Link className='add-button-link' to='/add'>Add Employee</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
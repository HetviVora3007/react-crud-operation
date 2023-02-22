import React from 'react'
import { useState, useNavigate } from 'react'

import './Edit.css'
import Data from '../../Utils/Data'
import Navbar from '../../Component/Navbar/Navbar'

const Edit = () => {

    // var navigate = useNavigate()

    const [formData, setFormData] = useState({})

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const editHandler = () => {
        console.log(formData)
    }

    return (
        <><div><Navbar /></div>
            <div className='edit-page-main-container'>
                <div className='edit-page-title'><p>Edit Employee</p></div>
                <div className='edit-page-sub-container'>
                    <div className='edit-page-container'>
                        <div className='employee-name'>
                            <p>Name</p>
                            <input type='text' name='name' placeholder='Enter Employee First Name' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='employee-email'>
                            <p>Email</p>
                            <input type='text' name='email' placeholder='Enter Employee Email' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='employee-salary'>
                            <p>Salary</p>
                            <input type='number' name='salary' placeholder='Enter Employee Salary' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='employee-date'>
                            <p>Date</p>
                            <input type='date' name='date' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='edit-and-cancel-button'>
                            <button className='edit-button' onClick={editHandler}>Edit</button>
                            <button className='cancel-button'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit
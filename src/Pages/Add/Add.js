import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Add.css'
import Navbar from '../../Component/Navbar/Navbar'

const Add = () => {

    const [formData, setFormData] = useState({})
    const [list, setList] = useState([])

    const navigate = useNavigate()

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, id: Math.random() })
    }

    const submitHandler = () => {
        const myData = localStorage.getItem('myData')
        const data = JSON.parse(myData)
        data.push(formData)
        localStorage.setItem('myData', JSON.stringify(data))
        setList(JSON.parse(localStorage.getItem('myData')))
        navigate('/')
    }

    const cancelHandler = () => {
        navigate('/')
    }

    return (
        <><div><Navbar /></div>
            <div className='add-page-main-container'>
                <div className='add-page-title'><p>Add Employee</p></div>
                <div className='add-page-sub-container'>
                    <div className='add-page-container'>
                        <div className='add-page-employee-name'>
                            <p>Name</p>
                            <input type='text' name='name' placeholder='Enter Employee First Name' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='add-page-employee-email'>
                            <p>Email</p>
                            <input type='text' name='email' placeholder='Enter Employee Email' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='add-page-employee-salary'>
                            <p>Salary</p>
                            <input type='number' name='salary' placeholder='Enter Employee Salary' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='add-page-employee-date'>
                            <p>Date</p>
                            <input type='date' name='date' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='add-and-cancel-button'>
                            <button className='add-button' onClick={submitHandler}>Add</button>
                            <button className='cancel-button' onClick={cancelHandler}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add
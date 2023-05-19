import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import './Edit.css'
import Navbar from '../../Component/Navbar/Navbar'

const Edit = () => {

    const [formData, setFormData] = useState({})
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const id = params.id
        const myData = localStorage.getItem('myData')
        const data = JSON.parse(myData)
        const obj = data.filter(d => Number(d.id) == Number(id))
        setFormData(obj[0])
    }, [])

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const editHandler = () => {
        const editData = formData
        editData['id'] = params.id
        const myData = localStorage.getItem('myData')
        const data = JSON.parse(myData)
        const index = data.findIndex(d => Number(d.id) == Number(params.id))
        data[index] = editData
        localStorage.setItem('myData', JSON.stringify(data))
        navigate('/')
    }

    const cancelHandler = () => {
        navigate('/')
    }

    return (
        <><div><Navbar /></div>
            <div className='edit-page-main-container'>
                <div className='edit-page-title'><p>Edit Employee</p></div>
                <div className='edit-page-sub-container'>
                    <div className='edit-page-container'>
                        <div className='employee-name'>
                            <p>Name</p>
                            <input type='text' name='name' value={formData.name} placeholder='Enter Employee First Name' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='employee-email'>
                            <p>Email</p>
                            <input type='text' name='email' value={formData.email} placeholder='Enter Employee Email' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='employee-salary'>
                            <p>Salary</p>
                            <input type='number' name='salary' value={formData.salary} placeholder='Enter Employee Salary' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='employee-date'>
                            <p>Date</p>
                            <input type='date' name='date' value={formData.date} onChange={(e) => inputHandler(e)} />
                        </div>
                        <div className='edit-and-cancel-button'>
                            <button className='edit-button' onClick={editHandler}>Edit</button>
                            <button className='cancel-button' onClick={cancelHandler}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit
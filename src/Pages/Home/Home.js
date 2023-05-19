import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
import Navbar from '../../Component/Navbar/Navbar'
import { Table, Button } from 'react-bootstrap'

const Home = () => {

    const [list, setList] = useState([])

    const deleteHandler = (id) => {
        const index = list.findIndex(d => Number(d.id) == Number(id))
        list.splice(index, 1)
        const newData = list.map((e) => {
            return { id: e.id, name: e.name, email: e.email, salary: e.salary, date: e.date }
        })
        localStorage.setItem('myData', JSON.stringify(newData))
        setList(JSON.parse(localStorage.getItem('myData')));
    }

    useEffect(() => {
        const storageData = localStorage.getItem('myData')
        if (storageData == null) {
            localStorage.setItem('myData', JSON.stringify([]))
        }
        else {
            const data = JSON.parse(storageData)
            setList(data)
        }
    }, [])

    return (
        <>
            <div><Navbar /></div>
            <div className='employee-table-container'>
                <div className='employee-data-table'>
                    {list.length == 0 ? <h1>Please Enter the Employee Details</h1> :
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Salary</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((item, index) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.salary}</td>
                                                    <td>{item.date}</td>
                                                    <td>
                                                        <Link to={`/edit/${item.id}`}>
                                                            <Button >Edit</Button>
                                                        </Link>
                                                        &nbsp;
                                                        &nbsp;
                                                        <Button onClick={() => deleteHandler(item.id)}>Delete</Button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    }
                </div>
            </div>
        </>
    )
}

export default Home
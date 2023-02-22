import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import { Table, Button } from 'react-bootstrap'

import './Home.css'
import Data from '../../Utils/Data'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    var navigate = useNavigate()

    const deleteHandler = (id) => {
        var index = Data.map(function (e) {
            return e.id
        }).indexOf(id)
        Data.splice(index, 1)
        navigate('/')
    }

    return (
        <>
            <div><Navbar /></div>

            <div className='employee-table-container'>
                <div className='employee-data-table'>
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
                                Data.map((item, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{id + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.salary}</td>
                                                <td>{item.date}</td>
                                                <td>
                                                    <Link to={`/edit/${id + 1}`}>
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
                </div>
            </div>
        </>
    )
}

export default Home
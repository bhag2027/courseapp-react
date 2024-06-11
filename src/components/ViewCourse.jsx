import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewCourse = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8085/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table table-success table-striped">
                                
                                    <thead>
                                        <tr>
                                            <th scope="col">SNO</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">DESCRIPTION</th>
                                            <th scope="col">DATE</th>
                                            <th scope="col">DURATION</th>
                                            <th scope="col">VENUE</th>
                                            <th scope="col">TRAINER NAME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value,index)=>{
                                            return <tr>
                                            
                                            <td>{index+1}</td>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td>{value.date}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.venue}</td>
                                            <td>{value.trainername}</td>
                                        </tr>
                                        }
                                       )}
                                        
                                    </tbody>
                                </table>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCourse
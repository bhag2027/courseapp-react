import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchCourse = () => {
    const [data, changeData] = useState(

        {
            "title": "",


        }

    )

    const [result, changeresult] = useState(
        [
            
            ]
        
    )

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8085/search",data).then(
            (response)=>{
                changeresult(response.data)
            }
        ).catch()

    }
    return (
        <div>
            <NavBar />
            <h1 align="center"><u>SEARCH COURSE</u></h1>
            <div className="container">


            </div>
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Coursetitle</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Search</button>

                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">TITLE</th>
                                                <th scope="col">DESCRIPTION</th>
                                                <th scope="col">DATE</th>
                                                <th scope="col">DURATION</th>
                                                <th scope="col">VENUE</th>
                                                <th scope="col">TRAINERNAME</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                      {result.map(
                                        (value,index)=>{
                                            return<tr>
                                                
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
            </div>
        </div>

    )
}

export default SearchCourse
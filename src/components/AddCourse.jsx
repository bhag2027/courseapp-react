import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCourse = () => {
    const [data,changeData]=useState(
        
            {
                "title":"",
                "description":"",
                "date":"",
                "duration":"",
                "venue":"",
                "trainername":""
        
            }  
        
    )

    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8085/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully added")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
  return (
    <div>
        <NavBar/>
        <h1 align="center"><u>COURSES</u></h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">description</label>
                                <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">date</label>
                                <input type="text" className="form-control" name='date' value={data.date} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">duration</label>
                                <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">venue</label>
                                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">trainername</label>
                                <input type="text" className="form-control" name='trainername' value={data.trainername} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourse
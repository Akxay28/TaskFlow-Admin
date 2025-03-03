import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const EditTeahcerList = () => {

    const { register, handleSubmit, reset } = useForm();

    const { id } = useParams()
    console.log(id, 'this is id')
    const navigate = useNavigate();

    const showServicesData = () => {
        console.log("hello");
        axios.get(`http://localhost:4000/teachers/${id}`)
            .then((response) => {
                console.log(response.data)
                reset(response.data)
            })
    }

    useEffect(() => {
        showServicesData();
    }, [])

    const onSubmit = (data) => {
        console.log(data, 'data');
        axios.put(`http://localhost:4000/teachers/${id}`, data)
            .then((response) => {
                console.log(response.data, 'This is data');
                alert("data Successfully added");
                navigate('/theme/teachersList')
            })
    };

    return (
        <>
            <div className="container my-5">
                <h1>Teachers Data</h1>

                <div className="row">
                    <div className="col-lg-12 ">
                        <form className='form-control shadow py-5' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">  Teacher Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter className name" {...register('TeacherName', { required: true })} />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">  Teacher Profile Pice</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter className name" {...register('TeacherProfilePic', { required: true })} />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Department</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Example : Instructor"       {...register('Department', { required: true })} />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register('description', { required: true })}></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Background Color</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Provide Background Color Without Hashtag only required code"       {...register('bgColor', { required: true })} />
                            </div>

                            <button className='btn btn-primary'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTeahcerList
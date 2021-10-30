import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        axios.post('https://stark-badlands-88982.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added Succesfully")
                    reset()
                }
            })
    };

    return (
        <div className="border border-dark bg-secondary">
            <h2 className="fw-bold text-danger m-2 bg-warning">Add A new service</h2>
            <div className="row p-2 m-0">
                <div className="col-md-6 col-12 mx-auto border border-dark mb-2">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100 mt-2 p-2" placeholder="*Service Tittle" {...register("name", { required: true })} />
                        <br />
                        <textarea className="w-100 mt-2" placeholder="*Service Details" {...register("desc", { required: true })} />
                        <br />

                        <div className="p-1">
                            <div className="row w-100 g-1">
                                <div className="col-sm-5 p-0">
                                    <input className="w-100 mt-2 p-2" placeholder="*From" {...register("from", { required: true })} />
                                </div>
                                <div className="col-sm-2 p-0">
                                    <i class="fas fa-exchange-alt text-white p-3"></i>
                                </div>
                                <div className="col-sm-5 p-0">
                                    <input className="w-100 mt-2 p-2" placeholder="*To" {...register("to", { required: true })} />
                                    <br />
                                </div>
                            </div>
                        </div>

                        <br />
                        <div className="w-100 mx-auto">
                            <label className="me-1 bg-warning p-1 rounded-pill ps-2 pe-2">Travel By : </label>
                            <select className="btn btn-danger rounded-pill w-50" {...register("by", { required: true })}>
                                <option value="">Select...</option>
                                <option value="Bus">Bus</option>
                                <option value="Air">Air</option>
                                <option value="Launch">Launch</option>
                            </select>
                        </div>
                        <br />
                        <input type="number" className="w-100 mt-2 p-2" placeholder="*Price" {...register("price", { required: true })} />
                        <br />
                        <input className="w-100 mt-2 p-2" placeholder="*Cover Image Link" {...register("img", { required: true })} />
                        <br />
                        {(errors.name || errors.desc || errors.from || errors.to || errors.by || errors.price) && <span className="text-danger">*All field are required</span>}
                        <br />
                        <input className="btn btn-danger mb-2 rounded-pill ps-5 pe-5" type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddService;
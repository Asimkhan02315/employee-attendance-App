import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";

const Form = (props) => {

const { register, formState: { errors }, handleSubmit } = useForm()

const onSubmit = (data) => {
  console.log(data);
    axios.post('http://localhost:5000/employee', {
        'employee_code': data.employee_code,
        'employee_name': data.employee_name,
        'date': data.date,
        'logintime': data.logintime,
        'logouttime': data.logouttime,
        'status':data.status,
        'label': data.label
      })
      .then(function (response) {
        props.setrefresh(!props.refresh)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


  return (
    <div className='container mt-4'>
    <h1>Employee Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

      <label>Employee Code: </label>
      <div className='form-group'>
<input  {...register("employee_code", { required: true })}
 aria-invalid={errors.employee_code ? "true" : "false"} 
  placeholder='Enter employee code...'/>
{errors.employee_code?.type === 'required' && <p role="alert" className='text-danger'>Employee Code is required</p>}
</div><br/>

<label>Employee Name: </label>
      <div className='form-group'>
<input {...register("employee_name", { required: true })}
 aria-invalid={errors.employee_name ? "true" : "false"} 
  placeholder='Enter employee name...'/>
{errors.employee_name?.type === 'required' && <p role="alert" className='text-danger'>Employee Name is required</p>}
</div><br/>

<label>Date:</label>
      <div className='form-group'>
<input type='date' {...register("date", { required: true })}
 aria-invalid={errors.date ? "true" : "false"} 
    placeholder='Enter date...'/> 
{errors.date?.type === 'required' && <p role="alert" className='text-danger'>Date is required</p>}
</div><br/>

<label>Login Time:</label>
      <div className='form-group'>
<input type='time' {...register("logintime", { required: true })}
 aria-invalid={errors.logintime ? "true" : "false"} 
  placeholder='Enter login time...'/>
{errors.logintime?.type === 'required' && <p role="alert" className='text-danger'>Login Time is required</p>}
</div><br/>

<label>Logout Time:</label>
      <div className='form-group'>
<input type='time' {...register("logouttime", { required: true })}
 aria-invalid={errors.logouttime ? "true" : "false"} 
   placeholder='Enter logout time...'/>
{errors.logouttime?.type === 'required' && <p role="alert" className='text-danger'>Logout Time is required</p>}
</div><br/>


<label>Status:</label>
      <div className='form-group'>
<select {...register("status", {required: true})} placeholder='Enter status...'
aria-invalid={errors.status ? "true" : "false"} >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
    </select>
{errors.status?.type === 'required' && <p role="alert" className='text-danger'>Status is required</p>}
      </div><br/>

      <label>Label:</label>
      <div className='form-group'>
<select {...register("label", {required: true})} placeholder='Enter label...' 
aria-invalid={errors.label ? "true" : "false"}
>
        <option value="Start">Start</option>
        <option value="Pending">Pending</option>
        
      </select>
      {errors.label?.type === 'required' && <p role="alert" className='text-danger'>Label is required</p>}
      </div><br/>



<input type='submit' value='Add' className='btn btn-primary'/>
      </form>
    </div>
  )
}

export default Form
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

 const Login = () => {

const Naviagte = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  axios.post('http://localhost:5000/login', {
    email:data.email,
    password:data.password,
}).then((res) => {
    console.log(res);
    Naviagte('/Table')
})
  }
  
  return (

    <div className="container mt-4">

    <h1>Login Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>

<label>Email:</label>
<div className="form-group">
<input type='text' placeholder="Enter the Email..."
        {...register("email", { required: "Email Address is required" })} 
        aria-invalid={errors.email ? "true" : "false"} 
      />
      {errors.email && <p role="alert">{errors.email?.message}</p>}
      </div>  <br />

<label>Password:</label>
<div className="form-group">
      <input type='password' placeholder="Enter the Password..."
        {...register("password", { required: true })} 
        aria-invalid={errors.password ? "true" : "false"} 
      />
      {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
</div><br />
     
      <input type="submit" value='Login' className="btn btn-primary"/>
    </form>
    </div>
  );
}

export default Login;
import axios from "axios";
import { useForm } from "react-hook-form";
import './register.css';
import { NavLink, useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function saveData(data) {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    let options = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      await axios.post("http://localhost:4000/register", formData, options);
      alert('Inserted successfully');
    } catch (error) {
      console.error("There was an error!", error);
      alert('Error inserting data');
    }
  }

  function Login(){
    navigate("/login");
  }

  return (
    <div>
     <div className="form_container">
      <div className="headings mb-3">
        Sign Up
      </div>
     <form onSubmit={handleSubmit(data => saveData(data))}>
        <div>
          <input
            type="text"
            placeholder="name"
            className="form-control form-control-sm p-2"
            {...register('name', { required: true })}
          />
          <div>
            {errors.name && <div className="text-danger">Name required</div>}
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="email"
              className="form-control form-control-sm p-2"
              {...register('email', { required: true })}
            />
          </div>
          <div>
            {errors.email && <div className="text-danger">Email required</div>}
          </div>
          <div className="mt-2">
            <input
              type="password"
              placeholder="password"
              className="form-control form-control-sm p-2"
              {...register('password', { required: true })}
            />
          </div>
          <div>
            {errors.password && <div className="text-danger">Password required</div>}
          </div>
        </div>
        <div>
          <input type="submit" className="btn btn-success mt-3 mb-2 w-100 bg-dark text-light" value="continue" />
        </div>
        <div>
        <span className="final_confirm">
       Already have an account?  
        </span>
        <span className="ms-2 dec" onClick={()=>{
          Login();
        }}>
          Login
        </span>
        </div>
        <div className="declaration mt-3">
       <span>
       <input type="checkbox"></input>
       </span>
       <span className="ms-1">
        By continuing, I agree to the terms of use & privacy Policy
       </span>
        </div>
      </form>
     </div>
    </div>
  );
}

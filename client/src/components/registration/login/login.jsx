import axios from "axios";
import { useForm } from "react-hook-form";
import './login.css';
import { NavLink, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function saveData(data) {
    let formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    let options = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      await axios.post("http://localhost:4000/login", formData, options);
      alert('Inserted successfully');
    } catch (error) {
      console.error("There was an error!", error);
      alert('Error inserting data');
    }
  }

  function Register(){
    navigate("/register");
  }

  return (
    <div>
     <div className="form_container">
      <div className="headings mb-3">
        Sign In
      </div>
     <form onSubmit={handleSubmit(data => saveData(data))}>
        <div>
         
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
       Create an account?  
        </span>
        <span className="ms-2 dec" onClick={()=>{
          Register();
        }}>
          Register
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

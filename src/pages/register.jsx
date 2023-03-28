import { Link, useNavigate } from "react-router-dom";
import { faUser, faMailBulk, faKey, faEye, faEyeSlash  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [ user, setUser ] = useState("");
    const [ mail, setMail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ show, setShow ] = useState(false);
    const [ confpassword, setConfpassword ] = useState("");
    const navigate = useNavigate();

    if (password!==confpassword)
    {
        console.log("Passwords should be same")
    }
    else{
            const handleLogin = async () => {
                await axios.post(
                 import.meta.env.VITE_BACKEND_URL+"/auth/register",
                {
                    username: user,
                    email: mail,
                    password: password
                }
                ).then((response) => {
                const output = response.data
                if(output.success)
                {
                    navigate("/");
                 }
                }).catch((err) => {
                console.log(err);
             })
             }
    }

    const handleRegister = () => {
        console.log("Register Done");
        navigate("/analyse");
    }
    return (
        <div className='flex flex-col items-center gap-y-8 p-10 gap-x-4 justify-evenly'>
            <h2 className="text-center text-primary font-serif text-xl">Create Your <br />ScribNote Account</h2>
            <div className="flex flex-row items-center gap-x-4 justify-between">
                <FontAwesomeIcon className="text-secondary" icon={faUser} />
                <input type="text" 
                onChange={(e) => setUser(e.target.value)}
                className="border-2 border-primary rounded-md p-2" 
                placeholder="Username"/>
            </div>
            <div className="flex flex-row items-center gap-x-4  justify-between">
                <FontAwesomeIcon className="text-secondary" icon={faMailBulk} />
                <input type="text" 
                onChange={(e) => setMail(e.target.value)}
                className="border-2 border-primary rounded-md p-2"
                placeholder="Email"/>
            </div>
            <div className="flex flex-row items-center gap-x-4  justify-between">
                <FontAwesomeIcon className="text-secondary" icon={faKey} />
                <input type={show?"text":"password" }
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-primary rounded-md p-2" 
                placeholder="Password"/>
                <button className="hover:scale-90 active:scale-105" onClick={() => setShow(!show)}>
                    {show?<FontAwesomeIcon className="text-secondary" icon={faEyeSlash} />:<FontAwesomeIcon className="text-secondary" icon={faEye} />}
                </button>
            </div>
            <div className="flex flex-row items-center gap-x-4  justify-between">
                <FontAwesomeIcon className="text-secondary" icon={faKey} />
                <input 
                type={show?"text":"password" }
                onChange={(e) => setConfpassword(e.target.value)}
                className="border-2 border-primary rounded-md p-2" 
                placeholder="Confirm Password"/>
                <button className="hover:scale-90 active:scale-105" onClick={() => setShow(!show)}>
                    {show?<FontAwesomeIcon className="text-secondary" icon={faEyeSlash} />:<FontAwesomeIcon className="text-secondary" icon={faEye} />}
                </button>
            </div>
            <div className="flex flex-row items-center">
            <button onClick={handleRegister} type="submit"  className="btn btn-outline btn-primary border-2 shadow-xl shadow-sky-900 px-4 py-2 hover:scale-110 active:scale-90">
                Register
            </button>
            </div>
            <span>Already have an account? <Link to="/" className="text-accent text-xs underline italic">Login</Link></span>
        </div>  
    )
}

export default Register;
import { Link, useNavigate } from "react-router-dom";
import { faUser, faMailBulk, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        console.log("Register Done");
        navigate("/analyse");
    }
    return (
        <div className='flex flex-col items-center gap-y-8 p-10 gap-x-4 justify-evenly'>
            <h2 className="text-center text-primary font-serif text-xl">Create Your <br />ScribNote Account</h2>
            <div className="flex flex-row items-center gap-x-4 justify-between">
                <FontAwesomeIcon className="text-secondary" icon={faUser} />
                <input type="text" className="border-2 border-primary rounded-md p-2" placeholder="Username"></input>
            </div>
            <div className="flex flex-row items-center gap-x-4  justify-between">
                <FontAwesomeIcon className="text-secondary" icon={faMailBulk} />
                <input type="text" className="border-2 border-primary rounded-md p-2" placeholder="Email"></input>
            </div>
            <div className="flex flex-row items-center gap-x-4  justify-between">
                <FontAwesomeIcon className="text-secondary" icon={faKey} />
                <input type="password" className="border-2 border-primary rounded-md p-2" placeholder="Password"></input>
            </div>
            <div className="flex flex-row items-center gap-x-4  justify-between">
                <FontAwesomeIcon className="text-secondary" icon={faKey} />
                <input type="password" className="border-2 border-primary rounded-md p-2" placeholder="Confirm Password"></input>
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
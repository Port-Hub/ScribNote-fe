import { faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ show, setShow ] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        await axios.post(
            import.meta.env.VITE_BACKEND_URL+"/auth/login",
            {
                username: user,
                password: password
            }
        ).then((response) => {
            const output = response.data
            if(output.success)
            {
                localStorage.setItem("token",output.token);
                navigate("/");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='flex flex-col gap-4 p-10'>
            <h2 className="text-center font-serif text-xl">ScribNotes</h2>
            <div className="flex flex-row gap-x-4 items-center">
                <FontAwesomeIcon icon={faUser} />
                <input 
                    type="text" 
                    onChange={(e) => setUser(e.target.value)}
                    className="border-2 border-black rounded-md p-2" 
                    placeholder="Username" 
                />
            </div>
            <div className="flex flex-row gap-x-4 items-center">
                <FontAwesomeIcon icon={faLock} />
                <input 
                    type={show?"text":"password" }
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 border-black rounded-md p-2" 
                    placeholder="Password" 
                />
                <button onClick={() => setShow(!show)}>
                    {show?<FontAwesomeIcon icon={faEyeSlash} />:<FontAwesomeIcon icon={faEye} />}
                </button>
            </div>
            <a className="text-xs underline italic">Forgot password</a>
            <span>Don't have an account? <a className="text-xs underline italic">Sign up</a></span>
            <button onClick={handleLogin} className="border-2 p-4 rounded-lg hover:scale-95 active:scale-105">Log in</button>
  
          </div>
    )
}

export default Login;
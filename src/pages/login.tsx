import { faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

const Login: (arg: any) => JSX.Element = () => {

    const [ user, setUser ] = useState<String>();
    const [ password, setPassword ] = useState<String>();
    const [ show, setShow ] = useState<Boolean>();

    const navigate: NavigateFunction = useNavigate();

    const handleLogin: (arg: any) => Promise<void> = async () => {
        await axios.post(
            import.meta.env.VITE_BACKEND_URL+"/auth/login",
            {
                username: user,
                password: password
            }
        ).then((response: AxiosResponse<any,any>) => {
            const output: any = response.data
            if(output.success)
            {
                localStorage.setItem("token",output.token);
                navigate("/analyse");
            }
        }).catch((err: any) => {
            console.log(err);
        })
    }

    return (
        <div className='flex flex-col gap-4 p-10'>
            <h2 className="text-center text-primary font-serif text-xl">ScribNotes</h2>
            <div className="flex flex-row gap-x-4 items-center">
                <FontAwesomeIcon className="text-secondary" icon={faUser} />
                <input 
                    type="text" 
                    onChange={(e) => setUser(e.target.value)}
                    className="border-2 border-primary rounded-md p-2" 
                    placeholder="Username" 
                />
            </div>
            <div className="flex flex-row gap-x-4 items-center">
                <FontAwesomeIcon className="text-secondary" icon={faLock} />
                <input 
                    type={show?"text":"password" }
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 border-primary rounded-md p-2" 
                    placeholder="Password" 
                />
                <button className="hover:scale-90 active:scale-105" onClick={() => setShow(!show)}>
                    {show?<FontAwesomeIcon className="text-secondary" icon={faEyeSlash} />:<FontAwesomeIcon className="text-secondary" icon={faEye} />}
                </button>
            </div>
            <a className="text-xs underline italic">Forgot password</a>
            <span>Don't have an account? <Link to="register" className="link-accent link-hover text-xs italic">Sign up</Link></span>
            <button onClick={handleLogin} className="btn btn-outline btn-primary border-2 p-4 hover:scale-95 active:scale-105">Log in</button>
          </div>
    )
}

export default Login;
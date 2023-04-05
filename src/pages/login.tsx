import { faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

const Login: (arg: any) => JSX.Element = () => {

    const [ user, setUser ] = useState<String>();
    const [ password, setPassword ] = useState<String>();
    const [ show, setShow ] = useState<Boolean>();
    const [ analyse, setAnalyse ] = useState<Boolean>(false);

    const navigate: NavigateFunction = useNavigate();

    const handleLogin: (arg: any) => Promise<void> = async () => {
        setAnalyse(true);
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
            else
            {
                console.log(output.message);
            }
            setAnalyse(false);
        }).catch((err: any) => {
            console.log(err);
            setAnalyse(false);
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
            <button onClick={handleLogin} className={analyse?"btn btn-outline btn-primary items-center border-2 shadow-xl shadow-neutral rounded-xl px-4 py-2 hover:scale-110 active:scale-90 loading":"btn btn-outline btn-primary items-center border-2 shadow-xl shadow-neutral rounded-xl px-4 py-2 hover:scale-110 active:scale-90 "}>Log in</button>
            
          </div>
    )
}

export default Login;
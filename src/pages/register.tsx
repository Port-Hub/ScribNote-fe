import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { faUser, faMailBulk, faKey, faEye, faEyeSlash  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";

const Register: (arg: any) => JSX.Element = () => {

    const [ user, setUser ] = useState<String>();
    const [ mail, setMail ] = useState<String>();
    const [ password, setPassword ] = useState<String>();
    const [ show, setShow ] = useState<Boolean>();
    const [ confpassword, setConfpassword ] = useState<String>();

    const navigate: NavigateFunction = useNavigate();

    const handleRegister: (arg: any) => Promise<void> = async () => {
        if(password !== confpassword)
        {
            console.log("Passwords should be same")
        }
        else
        {
            await axios.post(
                import.meta.env.VITE_BACKEND_URL+"/auth/register",
                {
                    username: user,
                    email: mail,
                    password: password
                }
            ).then((response: AxiosResponse<any,any>) => {
                const output: any = response.data
                if(output.success)
                {
                    navigate("/");
                }
            }).catch((err: any) => {
                console.log(err);
            })
        }
    }
    return (
        <div className='flex flex-col items-center gap-y-8 p-10 gap-x-4 justify-evenly'>
            <h2 className="text-center text-primary font-serif text-xl">Create Your <br />ScribNote Account</h2>
            <div className="flex flex-col items-start gap-6">
                <div className="flex flex-row items-center gap-x-4 justify-between">
                    <FontAwesomeIcon className="text-secondary" icon={faUser} />
                    <input type="text" 
                        onChange={(e) => setUser(e.target.value)}
                        className="border-2 border-primary rounded-md p-2" 
                        placeholder="Username"/>
                </div>
                <div className="flex flex-row items-center gap-x-4 justify-between">
                    <FontAwesomeIcon className="text-secondary" icon={faMailBulk} />
                    <input type="text" 
                        onChange={(e) => setMail(e.target.value)}
                        className="border-2 border-primary rounded-md p-2"
                        placeholder="Email"/>
                </div>
                <div className="flex flex-row items-center gap-x-4 justify-between">
                    <FontAwesomeIcon className="text-secondary" icon={faKey} />
                    <div className="flex flex-row gap-x-2">
                        <input type={show?"text":"password" }
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 border-primary rounded-md p-2" 
                            placeholder="Password"/>
                        <button className="hover:scale-90 active:scale-105" onClick={() => setShow(!show)}>
                            {show?<FontAwesomeIcon className="text-secondary" icon={faEyeSlash} />:<FontAwesomeIcon className="text-secondary" icon={faEye} />}
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-x-4 justify-between">
                    <FontAwesomeIcon className="text-secondary" icon={faKey} />
                    <div className="flex flex-row gap-x-2">
                        <input 
                            type={show?"text":"password" }
                            onChange={(e) => setConfpassword(e.target.value)}
                            className="border-2 border-primary rounded-md p-2" 
                            placeholder="Confirm Password"/>
                        <button className="hover:scale-90 active:scale-105" onClick={() => setShow(!show)}>
                            {show?<FontAwesomeIcon className="text-secondary" icon={faEyeSlash} />:<FontAwesomeIcon className="text-secondary" icon={faEye} />}
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center">
            <button onClick={handleRegister} type="submit"  className="btn btn-outline btn-primary border-2 shadow-xl shadow-sky-900 px-4 py-2 hover:scale-110 active:scale-90">
                Register
            </button>
            </div>
            <span>Already have an account? <Link to="/" className="text-xs link-hover link-accent italic">Login</Link></span>
        </div>  
    )
}

export default Register;
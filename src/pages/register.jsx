import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='flex flex-col gap-y-8 p-10 gap-x-4 justify-evenly'>
            <h2 className="text-center text-primary font-serif text-xl">Create Your ScribNote Account</h2>
            <div className="flex flex-row gap-2 gap-x-4 justify-between">
                <p>Username</p>
                <input type="text" className="border-2 border-primary rounded-md p-2" placeholder="Username"></input>
            </div>
            <div className="flex flex-row gap-x-4 justify-between">
                <p>Email</p>
                <input type="text" className="border-2 border-primary rounded-md p-2" placeholder="Email"></input>
            </div>
            <div className="flex flex-row gap-x-4 justify-between">
                <p>Password</p>
                <input type="password" className="border-2 border-primary rounded-md p-2" placeholder="Password"></input>
            </div>
            <div className="flex flex-row gap-x-4 justify-between">
                <p className="text-wrap">Confirm Password</p>
                <input type="password" className="border-2 border-primary rounded-md p-2" placeholder="Confirm Password"></input>
            </div>
            <div className="flex flex-row items-center">
            <button type="submit"  className="btn btn-outline btn-primary border-2 shadow-xl shadow-sky-900 px-4 py-2 hover:scale-110 active:scale-90">
                Register
            </button>
            </div>
            <span>Already have an account? <Link to="/" className="text-accent text-xs underline italic">Login</Link></span>
        </div>  
    )
}

export default Register;
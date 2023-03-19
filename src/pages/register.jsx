const Register = () => {
    return (
        <div className='flex flex-col gap-x-4 gap-y-8 p-10 gap-x-4 justify-evenly'>
            <h2 className="text-center font-serif text-xl">CREATE YOUR ACCOUNT</h2>
            <div className="flex flex-row gap-2 gap-x-4 justify-between">
                <p>Username</p>
                <input type="text" className="border-2 border-black rounded-md p-2" placeholder="Username"></input>
            </div>
            <div className="flex flex-row gap-x-4 justify-between">
                <p>Email</p>
                <input type="text" className="border-2 border-black rounded-md p-2" placeholder="Email"></input>
            </div>
            <div className="flex flex-row gap-x-4 justify-between">
                <p>Password</p>
                <input type="password" className="border-2 border-black rounded-md p-2" placeholder="Password"></input>
            </div>
            <div className="flex flex-row gap-x-4 justify-between">
                <p className="text-wrap">Confirm Password</p>
                <input type="password" className="border-2 border-black rounded-md p-2" placeholder="Confirm Password"></input>
            </div>
        </div>

    )
}

export default Register;
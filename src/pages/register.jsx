const Register = () => {
    return (
        <div className='flex flex-col gap-4 p-10'>
            <h2 className="text-centre font-serif text-2xl">CREATE YOUR ACCOUNT</h2>
            <div className="flex flex-row gap-2">
                <p>Username</p>
                <input type="text" className="border-2 border-black rounded-md p-2" placeholder="Username"></input>
            </div>
            <div className="flex flex-row">
                <p>Email</p>
                <input type="text" className="border-2 border-black rounded-md p-2" placeholder="Email"></input>
            </div>
            <div className="flex flex-row">
                <p>Password</p>
                <input type="password" className="border-2 border-black rounded-md p-2" placeholder="Password"></input>
            </div>
            <div className="flex flex-row">
                <p>Confirm Password</p>
                <input type="password" className="border-2 border-black rounded-md p-2" placeholder="Confirm Password"></input>
            </div>
        </div>

    )
}

export default Register;
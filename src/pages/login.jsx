const Login = () => {
    return (
        <div className="flex flex-row h-screen gap-10 items-center justify-around">
        <div className='flex flex-col gap-4 p-10'>
            <h2 className="text-center font-serif text-xl">ScribeNotes</h2>
            <p>Username</p>
            <textField className="border-2 border-black rounded-md p-2" placeholder="Username"></textField>
            <p>Password</p>
            <textField className="border-2 border-black rounded-md p-2" placeholder="Password"></textField>
            <a className="text-xs underline italic">Forgot password</a>
            <button>Log in</button>
          </div>
          </div>
    )
}

export default Login;
const Login = () => {
    return (
        <div className="flex flex-row h-screen gap-10 items-center justify-around">
        <div className='flex flex-col gap-4 p-10'>
            <h2 className="text-center font-serif text-xl">ScribNotes</h2>
            <input type= "text" className="border-2 border-black rounded-md p-2" placeholder="Username"></input>
            <img src = "/username.png object-contain md:object-contain"></img>
            <input type="password" className="border-2 border-black rounded-md p-2" placeholder="Password"></input>
            <a className="text-xs underline italic">Forgot password</a>
            <a className="text-xs underline italic">Don't have an account? Sign up</a>
            <button>Log in</button>
  
          </div>
          </div>
    )
}

export default Login;
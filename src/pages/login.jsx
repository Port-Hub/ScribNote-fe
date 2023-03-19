const Login = () => {
    return (
        <div className='flex flex-col gap-4 p-10'>
            <h2 className="text-center font-serif text-xl">ScribNotes</h2>
            <div className="flex flex-row">
                <img src = "/username.png" className="h-10"></img>
                <input type= "text" className="border-2 border-black rounded-md p-2" placeholder="Username"></input>
            </div>
            <input type="password" className="border-2 border-black rounded-md p-2" placeholder="Password"></input>
            <a className="text-xs underline italic">Forgot password</a>
            <span>Don't have an account? <a className="text-xs underline italic">Sign up</a></span>
            <button className="border-2 p-4 rounded-lg hover:scale-95 active:scale-105">Log in</button>
  
          </div>
    )
}

export default Login;
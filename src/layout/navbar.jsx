import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
    <div className="flex flex-col gap-y-20">
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/analyse" className="btn btn-ghost normal-case text-xl">ScribNote</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li onClick={handleLogout}><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-around">
            {props.children}
        </div>
    </div>
)};

export default Navbar;
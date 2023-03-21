import Layout from './layout/layout'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom"
import Home from './pages/home';
import Sample from './pages/sample';
import Login from './pages/login';
import Register from './pages/Register';
import Profile from './pages/Profile';
const App = () => {
    return(
        <Router>
            <Routes>
                <Route element={<Layout><Outlet /></Layout>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/sample" element={<Sample />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Profile" element={<Profile/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;

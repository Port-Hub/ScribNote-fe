import Layout from './layout/layout'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom"
import Sample from './pages/sample';
import Login from './pages/login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Analyse from './pages/analyse';
import Navbar from './layout/navbar';

const App = () => {
    return(
        <Router>
            <Routes>
                <Route element={<Layout><Outlet /></Layout>}>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route element={<Navbar><Outlet /></Navbar>}>
                        <Route path="/analyse" element={<Analyse />} />
                        <Route path="/sample" element={<Sample />} />
                        <Route path="/profile" element={<Profile/>} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default App;

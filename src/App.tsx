import Layout from './layout/layout'
import { ReactElement } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom"
import Sample from './pages/sample';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Analyse from './pages/analyse';
import Navbar from './layout/navbar';

const App = () => {
    return(
        <Router>
            <Routes>
                <Route element={<Layout><Outlet /></Layout> as ReactElement}>
                    <Route path="/" element={<Login /> as ReactElement} />
                    <Route path="/register" element={<Register /> as ReactElement} />
                </Route>
                <Route element={<Navbar><Outlet /></Navbar> as ReactElement}>
                        <Route path="/analyse" element={<Analyse /> as ReactElement} />
                        <Route path="/sample" element={<Sample /> as ReactElement} />
                        <Route path="/profile" element={<Profile/> as ReactElement} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;

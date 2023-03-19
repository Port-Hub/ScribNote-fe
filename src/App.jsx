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

const App = () => {
    return(
        <Router>
            <Routes>
                <Route element={<Layout><Outlet /></Layout>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Sample" element={<Sample/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/Register" element={<Register/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;

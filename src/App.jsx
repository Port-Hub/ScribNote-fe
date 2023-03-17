import Layout from './layout/layout'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom"
import Home from './pages/home';


const App = () => {
    return(
        <Router>
            <Routes>
                <Route element={<Layout><Outlet /></Layout>}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Feeds from "../pages/Feeds/Feeds";
import Layout from "../pages/Layout";
import AddFeed from "../pages/AddFeed/AddFeed";
//import Configurator from "../pages/AddFeed/Configurator/Configurator";
//import Schedule from "../pages/AddFeed/Schedule/Schedule";

function AppStack() {
    console.log("AppStack");

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="feeds" element={<Feeds/>} />
                <Route path="feeds/add" element={<AddFeed/>}>
                    {/*<Route path="feeds/add/configurator" element={<Configurator/>} />
                    <Route path="feeds/add/schedule" element={<Schedule/>} />*/}
                </Route>
            </Routes>
        </Layout>
    );
}

export default AppStack;

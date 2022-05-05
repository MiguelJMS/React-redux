import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";
import Player from "../containers/Player";
import Register from "../containers/Register";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/player/:id" element={<Player />} />
                <Route element={<NotFound />} />
            </Routes>
        </Layout>
    </BrowserRouter>
)

export default App;
import React from "react";
import Header from "../../Header/src/Header";
import Footer from "../../Footer/src/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return <Router>
        <Header/>
        <Routes>
            <Route path='/' exact/>
        </Routes>
        <Footer/>
    </Router>
}

export default App

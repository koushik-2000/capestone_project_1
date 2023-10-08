import React from "react";
import Signup from "./components/Signup/Signup";
import Category from "./components/Category/Category";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App(){
    return(
            <Router>
                <Routes>
                    <Route path="/Cate" element={<Category />}/>    
                    <Route path="/" element={<Signup />}/>
                </Routes>
            </Router>
    )
}

export default App;
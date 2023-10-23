import React from "react";
import Signup from "./components/Signup/Signup";
import Category from "./components/Category/Category";
import Main from "./components/Main/Main";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App(){
    return(
            <Router>
                <Routes>
                    <Route path="/Cate" element={<Category />}/>    
                    <Route path="/" element={<Signup />}/>
                    <Route path="/Main" element={<Main />} />
                </Routes>
            </Router>
    )
}

export default App;
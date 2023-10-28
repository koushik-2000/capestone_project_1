import React from "react";
import Signup from "./components/Signup/Signup";
import Category from "./components/Category/Category";
import Main from "./components/Main/Main";
import Movie from "./components/Movie/Movie";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App(){
    return(
            <Router>
                <Routes>
                    <Route path="/Cate" element={<Category />}/>    
                    <Route path="/" element={<Signup />}/>
                    <Route path="/Main" element={<Main />} />
                    <Route path="/Movie" element={<Movie />} />
                </Routes>
            </Router>
    )
}

export default App;
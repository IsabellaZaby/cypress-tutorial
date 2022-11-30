import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Form from "./Form";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="form" element={<Form/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

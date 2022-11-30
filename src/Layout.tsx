import React, {FC} from "react";
import {Link, Outlet} from "react-router-dom";
import {Grid} from "@mui/material";

const Layout: FC = () => {
    return (
        <div>
            <nav className="App-header">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                </ul>
            </nav>
            <Grid className="App-body">
                <Outlet/>
            </Grid>
        </div>
    );
}

export default Layout;
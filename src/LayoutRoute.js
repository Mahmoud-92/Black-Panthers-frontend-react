import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';


const LayoutRoute = (props) => {
    return (
        <div>

            { /* Main navgation */ }
            <NavBar  
                links={
                [
                    {
                    'path': '/',
                    'label': 'Home'
                    },  
                    {
                    'path': '/signup',
                    'label': 'Register'
                    },
                    {
                    'path': '/about',
                    'label': 'About us'
                    },
                ]
                } 
            />

            <div className="content" style={{minHeight: 'calc(100vh - 112px)'}}>
                <Route path={props.path} exact={props.exact} component={props.component} />
            </div>

        </div>
    )
}

export default LayoutRoute;

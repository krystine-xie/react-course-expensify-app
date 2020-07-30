// HOC = higher order component --> a component (hoc) that renders another component 
// Reuse Code
// Render hijacking 
// Prop manipulation
// Abstract state 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}. </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is privileged information. Please do not share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Please log in to see this information.</p>)}
        </div>
    )
};

const AdminInfo = withAdminWarning(Info); 
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="Here are the details" isAdmin={true} />, document.getElementById('app'));
ReactDOM.render(<AuthInfo info="Here are the details" isAuthenticated={false} />, document.getElementById('app'));
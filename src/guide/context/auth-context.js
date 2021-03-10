import React from 'react';

// the reason to initialize it here is only to have better autocompletion suggestion from IDE. The real content will be set up in the Component which uses the context
const authContext = React.createContext(
    {
        isAuthenticated: false,
        login: () => {}, // passing an empty function
    }
);

export default authContext
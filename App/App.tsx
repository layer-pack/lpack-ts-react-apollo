// Root entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from "react";
import Helmet from "react-helmet";
import {Route, Switch} from "react-router-dom";

/* Local */

// Components
import Posts from "App/ui/comps/Post";

// ----------------------------------------------------------------------------

const Root: React.FunctionComponent = () => (
    <div>
        <Helmet>
            <title>ReactQL starter kit - edit me!</title>
        </Helmet>
        <Posts/>
    </div>
);

export default Root;

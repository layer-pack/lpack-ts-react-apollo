// Root entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from "react";
import Helmet from "react-helmet";
import {Route, Switch} from "react-router-dom";

/* Local */


// ----------------------------------------------------------------------------

const Root: React.FunctionComponent = () => (
    <div>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>lpack-react boilerplate v1.0</title>
        </Helmet>
        <h1>lpack-ts-react-apollo boilerplate v1.0</h1>
        <h2>Included ( among others ) : </h2>
        <ul>
            <li>react ^16.8.6</li>
            <li>express with apollo SSR</li>
            <li>sass</li>
            <li>subscription</li>
            <li>es6 + decorators</li>
            <li>hot reload with dev server, SSR & api proxying</li>
            <li>react-helmet ( html header manager )</li>
        </ul>
    </div>
);

export default Root;

// Client entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

// Create browser history, for navigation a la single page apps
import {createBrowserHistory} from "history";

// React, our UI engine
import app from "App/index.tsx";

app.renderTo(
    document.getElementById("root")
);

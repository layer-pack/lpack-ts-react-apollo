/*
 *
 * Copyright (C) 2019 Nathanael Braun
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import "core-js";
import React from "react";
import ReactDom from 'react-dom';
import {renderToString} from "react-dom/server";
import {Helmet} from "react-helmet";
import {hot} from 'react-hot-loader/root'
import "regenerator-runtime/runtime";
import Index from "./index.html.tsx";

// Create browser history, for navigation a la single page apps
import {createBrowserHistory} from "history";
// Apollo GraphQL
import {ApolloProvider, getDataFromTree} from "react-apollo";

// React SSR routers
import {Router, StaticRouter} from "react-router";

/* Local */

// Utility for creating a per-request Apollo client
import {createClient} from "App/db/lib/apollo";

// Types
export interface IRouterContext {
    status?: number;
    url?: string;
}

const ctrl = {
    renderTo(node, initialState = {}) {
        const isDev = process.env.NODE_ENV !== 'production',
            App = require('App/App.tsx').default,
            HMRApp = isDev ? hot(App) : App;

        const client = createClient();
        const history = createBrowserHistory();

        ReactDom[node.innerHTML ? "hydrate" : "render"](
            <ApolloProvider client={client}>
                <Router history={history}>
                    <HMRApp/>
                </Router>
            </ApolloProvider>,
            node
        );

        if (process.env.NODE_ENV !== 'production' && module.hot) {
            module.hot.accept('App/App.tsx', m => {
                let NextApp = hot(require('App/App.tsx').default);

                ReactDom[node.innerHTML ? "hydrate" : "render"](
                    <ApolloProvider client={client}>
                        <Router history={history}>
                            <NextApp/>
                        </Router>
                    </ApolloProvider>,
                    node
                );
            })
        }
    },
    async renderSSR({state, url}, cb) {
        let content = "",
            App = require('App/App.tsx').default,
            html;
        //
        // Create a new Apollo client
        const client = createClient();

        // Create a fresh 'context' for React Router
        const routerContext: IRouterContext = {};

        // Render our components - passing down MobX state, a GraphQL client,
        // and a router for rendering based on our route config
        const components = (
            <ApolloProvider client={client}>
                <StaticRouter location={url} context={routerContext}>
                    <App/>
                </StaticRouter>
            </ApolloProvider>
        );

        // Await GraphQL data coming from the API server
        await getDataFromTree(components);

        // Handle 404 `Not Found`
        if (routerContext.status === 404) {
            // By default, just set the status code to 404. You can
            // modify this section to do things like log errors to a
            // third-party, or redirect users to a dedicated 404 page

            // ctx.status = 404;
            // ctx.body = "Not found";
            // html = "<!doctype html>\n" + renderToString(<Index ssrErrors={`<pre>${e}\n${e.stack}</pre>`}/>);
            //
            return cb(404, 404);
        }

        try {
            // Create response HTML
            html = renderToString(components);
            html = "<!doctype html>\n" + renderToString(
                <Index
                    // css={output.client.main("css")!}
                    helmet={Helmet.renderStatic()}
                    content={html}
                    // scripts={output.client.scripts()}
                    state={client.extract() // <-- GraphQL store
                    }
                />);
        } catch (e) {
            html = "<!doctype html>\n" + renderToString(<Index ssrErrors={`<pre>${e}\n${e.stack}</pre>`}/>);
        }
        cb(null, html)
    }
}

export default ctrl;


/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */

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

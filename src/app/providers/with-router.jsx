import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component) => () =>
    (
        <BrowserRouter>
            <Suspense
                fallback={<div>loading</div>}
            >
                {component()}
            </Suspense>
        </BrowserRouter>
    );
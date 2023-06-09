import React from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import {BrowserRouter, Route} from "react-router-dom"
import TestPage from "../pages/Tests/TestPage";
import TestingPage from "../pages/Tests/TestingPage";

const App = () => {
    return (
        <BrowserRouter>
            <Route component={Main} exact={true} path={"/"}/>
            <Route component={SignUp} path={"/sign-up"}/>
            <Route component={SignIn} path={"/sign-in"}/>
            <Route component={TestPage} exact={true} path={"/test/:testId"}/>
            <Route component={TestingPage} path={"/test/:testId/testing/:testingId"}/>
        </BrowserRouter>
    )
};


export default App;

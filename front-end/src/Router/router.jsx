import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Partials/welcomePage/LandingPage";
import PageStartYourFreeTrial from "../Partials/StartYouFreeTrial/page";

export default function RouterApp(){
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />}/>
                    <Route path='/start-your-free-trial' element={<PageStartYourFreeTrial />}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}
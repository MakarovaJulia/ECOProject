import React from 'react';
import { hot } from "react-hot-loader";
import { Routes, Route } from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {CollectPointPage} from "./pages/CollectPointPage";
import ECOMarketPage from "./pages/ECOMarketPage";
import {AuthModal} from "./components/Modals/AuthModal";
import {RegisterModal} from "./components/Modals/RegisterModal";


const App = hot(module)(() => {
    return (
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/collect_point" element={<CollectPointPage />}/>
                <Route path="/eco_market" element={<ECOMarketPage />}/>
            </Routes>
    );
})

export default App;

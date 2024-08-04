import React, { useEffect } from "react";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Events from "./Events";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUser";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit"; 
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";


/** REDUX SLIX & SELECTOR */ 

const acttionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data))
});
const popularDishesRetriever = createSelector(
    retrievePopularDishes,
    (popularDishes) => ({popularDishes})
)
export function HomePage() {
    // Selector: Store => Data

    const {setPopularDishes} = acttionDispatch(useDispatch());
    const {popularDishes} = useSelector(popularDishesRetriever);

    useEffect (() => {
        //Backend server data request => Data
        // Slice: Data => Store
    }, []);
    return (
        <div className="homepage">
            
            <Statistics />
            <PopularDishes />
            <NewDishes />
            <Advertisement />
            <ActiveUsers />
            <Events />
        </div>
    );
}

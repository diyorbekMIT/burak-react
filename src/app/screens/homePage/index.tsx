import React, { useEffect } from "react";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Events from "./Events";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUser";
import "../../../css/home.css";

import { useDispatch} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit"; 
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";


/** REDUX SLIX & SELECTOR */ 

const acttionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data))
});

export function HomePage() {
    // Selector: Store => Data

    const {setPopularDishes} = acttionDispatch(useDispatch());
    
    useEffect (() => {
        //Backend server data request => Data
        const product = new ProductService();
        product.getProducts({
            page: 1,
            limit: 4,
            order: "productViews",
            productCollection: ProductCollection.DISH
        }).then((data) => {
            console.log("data passed here ",data);
            setPopularDishes(data);
        }).catch((error) => {
            console.error(error);
        });
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

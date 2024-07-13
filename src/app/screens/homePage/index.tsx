import React from "react";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Events from "./Events";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUser";
import "../../../css/home.css";

export function HomePage() {
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

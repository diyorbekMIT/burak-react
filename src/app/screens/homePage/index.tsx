import React from "react";
import Statistics from "./PopularDishes";
import PopularDishes from "./Statistics";
import NewDishes from "./NewDishes";
import Events from "./Events";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUser";

export function HomePage() {
    return <div className="homepage">
      <Statistics/>
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>;
  }
  
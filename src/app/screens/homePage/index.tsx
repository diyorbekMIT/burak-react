import React from "react";
import Statistics from "./PopularDishes";
import PopularDishes from "./Statistics";
import NewDishes from "./NewDishes";
import Events from "./Events";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUser";
import "/Users/macos/burak-react/src/css/home.css";

export function HomePage() {
    return <div className="homepage">
      <PopularDishes/>
      <Statistics/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>;
  }
  
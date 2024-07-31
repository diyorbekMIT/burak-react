import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";



const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularDishes = createSelector(selectHomePage,
    (HomePage) => HomePage.popularDishes)

const retrieveNewDishes = createSelector(selectHomePage,
    (HomePage) => HomePage.newDishes
)

const retrieveTopUsers = createSelector(selectHomePage,
    (HomePage) => HomePage.topUsers
)
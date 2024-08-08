import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import chatslice from "./chatslice";
import Searchslice from "./Searchslice";

const store =configureStore({
    reducer:{
        app:appslice,
        search:Searchslice,
        chat:chatslice,
    }
});
export default store;  
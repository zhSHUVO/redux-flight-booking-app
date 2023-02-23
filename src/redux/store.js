import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookingReducer from "./booking/bookingRedeucers";

const store = createStore(bookingReducer, composeWithDevTools());

export default store

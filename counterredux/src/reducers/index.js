import changeTheCount from "./upDown";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changeTheCount:changeTheCount
})

export default rootReducer;
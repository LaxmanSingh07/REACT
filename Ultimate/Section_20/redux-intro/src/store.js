import { createStore, combineReducers } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
  });
  
  // I WILL CHANGE IT SOON
const store = createStore(rootReducer);
  

export default store;


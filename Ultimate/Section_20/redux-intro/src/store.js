import { configureStore } from "./configureStore";


import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";


const store=configureStore({
  root: {
    account: accountReducer,
    customer: customerReducer,
  }
})


export default store;


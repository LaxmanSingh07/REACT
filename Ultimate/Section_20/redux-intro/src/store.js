import { createStore,combineReducers } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/widthdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createAt,
      };

    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// I WILL CHANGE IT SOON
const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 1000 });

// // console.log("Hello Redux");

// console.log(store.getState());

// store.dispatch({ type: "account/widthdraw", payload: 500 });

// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "buy a car" },
// });

// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });

// console.log(store.getState());

const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WIDTHDRAW = "account/widthdraw";
const ACCOUNT_REQUEST_LOAN = "account/requestLoan";
const ACCOUNT_PAY_LOAN = "account/payLoan";

function deposit(amount) {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
}
function widthdraw(amount) {
  return { type: ACCOUNT_WIDTHDRAW, payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: ACCOUNT_REQUEST_LOAN,
    payload: { amount, purpose },
  };
}
function payLoan() {
  return { type: ACCOUNT_PAY_LOAN };
}

store.dispatch(deposit(1000));
console.log(store.getState());
store.dispatch(widthdraw(500));
console.log(store.getState());
store.dispatch(requestLoan(1000, "buy a car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

// Action Creator

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "account/updateName",
    payload: fullName,
  };
}

store.dispatch(createCustomer("Laxman Singh", "123456789"));
console.log(store.getState());
store.dispatch(deposit(1000));
console.log(store.getState());
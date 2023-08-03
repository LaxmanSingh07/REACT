import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
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

// I WILL CHANGE IT SOON
const store = createStore(reducer);

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
    return { type: ACCOUNT_WIDTHDRAW, payload: amount}
}
function requestLoan(amount,purpose) {
    return {
          type: ACCOUNT_REQUEST_LOAN,
           payload: { amount, purpose },
         }
}
function payLoan() {
    return { type: ACCOUNT_PAY_LOAN }
}


store.dispatch(deposit(1000));
console.log(store.getState());
store.dispatch(widthdraw(500));
console.log(store.getState());
store.dispatch(requestLoan(1000, "buy a car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());


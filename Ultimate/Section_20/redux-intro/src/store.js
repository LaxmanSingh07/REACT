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

store.dispatch({ type: "account/deposit", payload: 1000 });

// console.log("Hello Redux");

console.log(store.getState());

store.dispatch({ type: "account/widthdraw", payload: 500 });

console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 1000, purpose: "buy a car" },
});

console.log(store.getState());

store.dispatch({ type: "account/payLoan" });

console.log(store.getState());
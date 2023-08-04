import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },

    withdraw(state, action) {
      state.balance -= action.payload;
    },

    requestLoan: {
      //this is a function that returns an action object  with more than one property

      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") {
    return { type: "account/deposit", payload: amount };
  }
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    //1. api call
    const host = "api.frankfurter.app";
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();
    const convertedAmount = data.rates.USD;

    // return;

    dispatch({ type: "account/deposit", payload: convertedAmount });
  };
}

export default accountSlice.reducer;

/*

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
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

    case "account/convertingCurrency":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

//YOU MAY FIND SOMETHING LIKE THIS IN THE OLD CODE BASES
const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WIDTHDRAW = "account/widthdraw";
const ACCOUNT_REQUEST_LOAN = "account/requestLoan";
const ACCOUNT_PAY_LOAN = "account/payLoan";
const ACCOUNT_CONVERTING_CURRENCY = "account/convertingCurrency";

export function deposit(amount, currency) {
  if (currency === "USD") {
    return { type: ACCOUNT_DEPOSIT, payload: amount };
  }
  return async function (dispatch, getState) {
    dispatch({ type: ACCOUNT_CONVERTING_CURRENCY });

    //1. api call
    const host = "api.frankfurter.app";
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();
    const convertedAmount = data.rates.USD;

    // return;

    dispatch({ type: ACCOUNT_DEPOSIT, payload: convertedAmount });
  };
}
export function widthdraw(amount) {
  return { type: ACCOUNT_WIDTHDRAW, payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: ACCOUNT_REQUEST_LOAN,
    payload: { amount, purpose },
  };
}
export function payLoan() {
  return { type: ACCOUNT_PAY_LOAN };
}

*/

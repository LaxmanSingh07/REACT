const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
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


//YOU MAY FIND SOMETHING LIKE THIS IN THE OLD CODE BASES
const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WIDTHDRAW = "account/widthdraw";
const ACCOUNT_REQUEST_LOAN = "account/requestLoan";
const ACCOUNT_PAY_LOAN = "account/payLoan";

export function deposit(amount) {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
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

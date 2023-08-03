const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
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

// Action Creator

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "account/updateName",
    payload: fullName,
  };
}

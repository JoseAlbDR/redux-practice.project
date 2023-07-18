import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID, createdAt) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt,
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

console.log(customerSlice);

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createtAd,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//       };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName: fullName,
//       nationalID: nationalID,
//       createtAd: new Date().toISOString(),
//     },
//   };
// }

// export function updateName(fullName) {
//   return {
//     type: "customer/updateName",
//     payload: {
//       fullName: fullName,
//     },
//   };
// }

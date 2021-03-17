import { notesEnum } from "../actions";

const initialState = {
  notes: [
    {"Key":"","Record":{"Emailid":"","Notes":"","Title":""}}
  ]
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case notesEnum.GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
}
import {
  GET_ACCOUNTS,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_FAIL,
  GET_ACCOUNT_DETAIL,
  GET_ACCOUNT_DETAIL_SUCCESS,
  GET_ACCOUNT_DETAIL_FAIL,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAIL
} from "./constants";

const initialState = {
  accounts: [],
  account: {},
  loading: false,
  loadingAccountDetails: false,
  error: null,
};

const AccountReducer = (state = initialState, action) => {
  const {type, data} = action;
  switch (type) {
    case GET_ACCOUNTS:
      state = { ...state, loading: true };
      break;
    case GET_ACCOUNTS_SUCCESS:
      state = { ...state, accounts: data.users, loading: false };
      break;
    case GET_ACCOUNTS_FAIL:
      state = { ...state, error: data?.message || "Something went wrong", loading: false };
      break;
    case GET_ACCOUNT_DETAIL:
      state = { ...state, loadingAccountDetails: true };
      break;
    case GET_ACCOUNT_DETAIL_SUCCESS:
      state = { ...state, account: action.payload[0], loadingAccountDetails: false };
      break;
    case GET_ACCOUNT_DETAIL_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingAccountDetails: false,
      };
      break;
    case DELETE_ACCOUNT:
      state = { ...state, loading: true };
      break;
    case DELETE_ACCOUNT_SUCCESS:
      state = { ...state, loading: false };
      break;
    case DELETE_ACCOUNT_FAIL:
      state = { ...state, error: data?.message || "Something went wrong", loading: false };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default AccountReducer;
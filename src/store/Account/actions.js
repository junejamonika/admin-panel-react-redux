import { data } from "autoprefixer";
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
  
  export const getAccounts = () => {
    return {
      type: GET_ACCOUNTS,
    };
  };
  
  export const getAccountsSuccess = (accounts) => {
    return {
      type: GET_ACCOUNTS_SUCCESS,
      data: accounts,
    };
  };
  
  export const getAccountsFail = (error) => {
    return {
      type: GET_ACCOUNTS_FAIL,
      data: error,
    };
  };

  export const deleteAccount = (id) => {
    return {
      type: DELETE_ACCOUNT,
      id: id,
    };
  };
  
  export const deleteAccountSuccess = (data) => {
    return {
      type: DELETE_ACCOUNT_SUCCESS,
      data: data,
    };
  };
  
  export const deleteAccountFail = (error) => {
    return {
      type: DELETE_ACCOUNT_FAIL,
      data: error,
    };
  };
  
  export const getAccountDetail = (id) => {
    return {
      type: GET_ACCOUNT_DETAIL,
      id: id,
    };
  };
  
  export const getAccountDetailSuccess = (post) => {
    return {
      type: GET_ACCOUNT_DETAIL_SUCCESS,
      data: account,
    };
  };
  
  export const getAccountDetailFail = (error) => {
    return {
      type: GET_ACCOUNT_DETAIL_FAIL,
      data: error,
    };
  };
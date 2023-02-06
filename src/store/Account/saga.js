import { all } from "redux-saga/effects";
import { takeEvery, put } from "redux-saga/effects"
import { GET_ACCOUNTS, DELETE_ACCOUNT, GET_ACCOUNT_DETAIL } from "./constants";
import { accountsGet, accountDelete, accountGetDetail } from "@/services/account";
import { getAccounts, getAccountsSuccess, getAccountsFail, deleteAccountSuccess, deleteAccountFail, getAccountDetailSuccess, getAccountDetailFail } from "./actions";
import toast from "react-hot-toast"

function* handleGetAccounts(data) {
    try {
        const response = yield accountsGet();
        if (response.status === "success") {
            yield put(getAccountsSuccess(response.data));
        } else {
            toast.error("Something Went Wrong Please Try Again Later")
            yield put(getAccountsFail("test"))
        }
    } catch (error) {
        toast.error("Something Went Wrong Please Try Again Later")
        yield put(getAccountsFail(error))
    }
}

export function* getAccountsSaga() {
    yield takeEvery(GET_ACCOUNTS, handleGetAccounts);
}

function* handleDeleteAccount(data) {
    try {
        const response = yield accountDelete(data.id);
        if (response.status == "success") {
            toast.success(response.message)
            yield put(deleteAccountSuccess(response.data));
            yield put(getAccounts());
        } else {
            toast.error(response.message)
            yield put(deleteAccountFail(response.message))
        }
    } catch (error) {
        toast.error("Something Went Wrong Please Try Again Later")
        yield put(deleteAccountFail(error))
    }
}

export function* deleteAccountSaga() {
    yield takeEvery(DELETE_ACCOUNT, handleDeleteAccount);
}

function* handleGetAccountDetail(data) {
    try {
        const response = yield accountGetDetail(data.id);
        if (response.status == "success") {
            yield put(getAccountDetailSuccess(response.data));
        } else {
            toast.error("Something Went Wrong Please Try Again Later")
            yield put(getAccountDetailFail(response.error.message))
        }
    } catch (error) {
        toast.error("Something Went Wrong Please Try Again Later")
        yield put(getAccountDetailFail(error))
    }
}

export function* getAccountDetailSaga() {
    yield takeEvery(GET_ACCOUNT_DETAIL, handleGetAccountDetail);
}


export default function* accountSaga() {
    yield all([
        getAccountsSaga(),
        deleteAccountSaga(),
        getAccountDetailSaga(),
    ]);
}

import { authGateway } from "@/utils/gateway";
import URLS from "@/configs/url";

export const accountsGet = async () => {
    const response = await authGateway("GET", URLS.USERS.GET_USERS);
    return response;
}

export const accountDelete = async (id) => {
    const response = await authGateway("DELETE", URLS.USERS.DELETE_USER + id);
    return response;
}

export const accountGetDetail = async (id) => {
    const response = await authGateway("GET", URLS.USERS.GET_USER_DETAIL + id);
    return response;
}
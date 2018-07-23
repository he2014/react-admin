import * as login from "./action-type";

export const initToken = (token) => {
    return {
        type: login.LOGIN,
        token
    }
}
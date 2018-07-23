import * as login from "./action-type";

let defaultToken = {
    token: ""
}

export const saveToken = (state = defaultToken, action = {}) => {
    switch (action.type) {
        case login.LOGIN:
            return { ...state, ...action.token };
        default:
            return state;
    }
}
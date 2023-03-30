import { legacy_createStore as createStore } from "redux";
import axios from 'axios'
import { act } from "react-dom/test-utils";



/* reducer ------chuaw state va cac phuong thuc thay doi state */
let initialState = {
    products: [],
    cart: []
};

let productReducer = (state = initialState, action) => {

    /* ding nghia thong bao va logic thay doi state cho tung action */
    /* khi dinh nghia action thi ngam hieu action la object co 2 truong la type, [payload]// */
    /* state trong store la immutiable object====>  KHONG BAO GIO THAY DOI CAC THUOC TINH TRONG STATE */
    if (action.type === "save-products") {
        return {
            ...state,
            products: [...action.payload]
        }
    }
    if (action.type === "save-cart") {
        return {
            ...state,
            cart: [...action.payload]
        }
    }
    if (action.type === "add-new-to-cart-from-detail") {
        let { payload } = action
        let { cart } = state

        cart.push(payload)
        return {
            ...state,
            cart: [...cart]
        }
    }
    if (action.type === "edit-to-cart-from-detail") {
        let { payload } = action
        let { cart } = state
        let findIndex = cart.findIndex((item, i) => item.id === payload.id)
        cart[findIndex].quantity = cart[findIndex].quantity + payload.quantity
        return {
            ...state,
            cart: [...cart]
        }
    }
    if (action.type === "increase") {
        let { payload } = action
        let { cart } = state
        let findIndex = cart.findIndex((item, i) => item.id === payload.id)
        cart[findIndex].quantity = cart[findIndex].quantity + 1

        return {
            ...state,
            cart: [...cart]
        }
    }
    if (action.type === "decrease") {
        let { payload } = action
        let { cart } = state
        let findIndex = cart.findIndex((item, i) => item.id === payload.id)
        cart[findIndex].quantity = cart[findIndex].quantity - 1

        return {
            ...state,
            cart: [...cart]
        }
    }
    if (action.type === "remove-check-all") {
        let { cart } = state
        for (let i = 0; i < cart.length; i++) {
            cart[i].isChecker = false

            return {
                ...state,
                cart: [...cart]
            }
        }
    }
    if (action.type === "check-all") {
        let { cart } = state
        for (let i = 0; i < cart.length; i++) {
            cart[i].isChecker = true
        }
        return {
            ...state,
            cart: [...cart]
        }

    }
    if (action.type === "checked") {
        let { cart } = state
        let { payload } = action
        let findIndex = cart.findIndex((item, i) => item.id === payload.id)
        cart[findIndex].isChecker = true
        return {
            ...state,
            cart: [...cart]
        }
    }
    if (action.type === "remove-checked") {
        let { cart } = state
        let { payload } = action
        let findIndex = cart.findIndex((item, i) => item.id === payload.id)
        cart[findIndex].isChecker = false
        console.log(cart);
        return {
            ...state,
            cart: [...cart]
        }
    }
    return state;

};

/* store chua cac reducer */
const store = createStore(productReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;
import { legacy_createStore as createStore } from "redux";
import axios from 'axios'



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

    if (action.type === "add-to-cart") {
        let { payload } = action
        let { cart } = state
        let findIndex = cart.findIndex((e, i) => e.id === payload.id)
        if (findIndex === -1) {
            cart.push({
                id: payload.id,
                price: payload.price,
                number: 1,
                name: payload.name,
                isChecker: payload.isChecker

            })
            axios.post("http://localhost:8080/cart", {
                id: payload.id,
                price: payload.price,
                number: 1,
                name: payload.name,
                isChecker: payload.isChecker

            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            return {
                ...state,
                cart: [...cart]

            }

        }

        cart[findIndex].number = cart[findIndex].number + 1;
        axios.put(`http://localhost:8080/cart/${cart[findIndex].id}`,
            {
                id: cart[findIndex].id,
                name: cart[findIndex].name,
                price: cart[findIndex].price,
                number: cart[findIndex].number,
                isChecker: cart[findIndex].isChecker

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        return {
            ...state,
            cart: [...cart]
        }
    }
    if (action.type === "remove-from-cart") {
        let { payload } = action
        console.log(payload);
        let { cart } = state
        let findIndex = cart.findIndex((e, i) => e.id === payload)
        console.log(findIndex);
        cart.splice(findIndex,1)
       
        axios.delete(`http://localhost:8080/cart/${payload}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            return {
                ...state,
                cart: [...cart]
            }
        

    }
    if (action.type === "increase") {
        let { payload } = action
        let { cart } = state
        let findIndex = cart.findIndex((e, i) => e.id === payload.id)
        cart[findIndex].number = cart[findIndex].number - 1;
        axios.put(`http://localhost:8080/cart/${cart[findIndex].id}`,
            {
                id: cart[findIndex].id,
                name: cart[findIndex].name,
                price: cart[findIndex].price,
                number: cart[findIndex].number,
                isChecker: cart[findIndex].isChecker

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        return {
            ...state,
            cart: [...cart]
        }
    }
    if (action.type === "decrease") {
        let { payload } = action
        let { cart } = state
        let findIndex = cart.findIndex((e, i) => e.id === payload.id)
        cart[findIndex].number = cart[findIndex].number + 1;

        axios.put(`http://localhost:8080/cart/${cart[findIndex].id}`,
            {
                id: cart[findIndex].id,
                name: cart[findIndex].name,
                price: cart[findIndex].price,
                number: cart[findIndex].number,
                isChecker: cart[findIndex].isChecker

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        return {
            ...state,
            cart: [...cart]
        }
    }
    if(action.type==="remove-checker"){
        let { payload } = action
        let { cart } = state
        let findIndex = cart.findIndex((e, i) => e.id === payload.id)
        cart[findIndex].isChecker=false;

        axios.put(`http://localhost:8080/cart/${cart[findIndex].id}`,
            {
                id: cart[findIndex].id,
                name: cart[findIndex].name,
                price: cart[findIndex].price,
                number: cart[findIndex].number,
                isChecker: cart[findIndex].isChecker

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        return {
            ...state,
            cart: [...cart]
        }

    }
    if(action.type==="checker"){
        let { payload } = action
        let { cart } = state
        let findIndex = cart.findIndex((e, i) => e.id === payload.id)
        cart[findIndex].isChecker=true;

        axios.put(`http://localhost:8080/cart/${cart[findIndex].id}`,
            {
                id: cart[findIndex].id,
                name: cart[findIndex].name,
                price: cart[findIndex].price,
                number: cart[findIndex].number,
                isChecker: cart[findIndex].isChecker

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        return {
            ...state,
            cart: [...cart]
        }

    }
    if(action.type ==="remove-all"){
        let { cart } = state
        for (let i = 0; i < cart.length; i++) {
            cart[i].isChecker=false
            axios.put(`http://localhost:8080/cart/${cart[i].id}`,
            {
                id: cart[i].id,
                name: cart[i].name,
                price: cart[i].price,
                number: cart[i].number,
                isChecker:cart[i].isChecker

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        return {
            ...state,
            cart: [...cart]
        }
    }
    if(action.type ==="check-all"){
        let { cart } = state
        for (let i = 0; i < cart.length; i++) {
            cart[i].isChecker=true
            axios.put(`http://localhost:8080/cart/${cart[i].id}`,
            {
                id: cart[i].id,
                name: cart[i].name,
                price: cart[i].price,
                number: cart[i].number,
                isChecker:cart[i].isChecker

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
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
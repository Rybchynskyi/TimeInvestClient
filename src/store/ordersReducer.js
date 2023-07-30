const currentDate = new Date();
const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

const defaultState = {
    name: "Розрахунок за: "+formattedDate,
    orders: []
}

const SET_NAME = "SET_NAME";
const ADD_ORDER = "ADD_ORDER";
const REMOVE_ORDER = "REMOVE_ORDER";
const CHANGE_ORDER_VALUE = "CHANGE_ORDER_VALUE";

export const ordersReducer = (state = defaultState, action) => {
    switch (action.type){
        case SET_NAME:
            console.log(action.payload)
            return {...state, name: action.payload}
        case ADD_ORDER:
            return {...state, orders: [...state.orders, action.payload]}
        case REMOVE_ORDER:
            return {...state, orders: state.orders.filter((item) => item.template_id !== action.payload)}
        case CHANGE_ORDER_VALUE:
            let number = action.payload[0];
            let key = action.payload[1];
            let value = action.payload[2];
            const ordersCopy = [...state.orders];
            ordersCopy[number][key] = value;
            return { ...state, orders: ordersCopy };
        default:
            return state
    }
}

export const setOrderName = (payload) => ({type: SET_NAME, payload})
export const addOrder = (payload) => ({type: ADD_ORDER, payload})
export const removeOrder = (payload) => ({type: REMOVE_ORDER, payload})
export const changeOrderValue = (payload) => ({type: CHANGE_ORDER_VALUE, payload})

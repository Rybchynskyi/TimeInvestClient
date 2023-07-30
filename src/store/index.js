import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {usersReducer} from "./usersReducer";
import {stepsReducer} from "./stepsReducer";
import {newCalculationReducer} from "./newCalculationReducer";
import {cateroriesReducer} from "./cateroriesReducer";
import {ordersReducer} from "./ordersReducer";
import { persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    users: usersReducer,
    steps: stepsReducer,
    calculations: newCalculationReducer,
    categories: cateroriesReducer,
    orders: ordersReducer
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

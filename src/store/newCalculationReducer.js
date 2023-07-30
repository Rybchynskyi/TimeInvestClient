const defaultState = {
    calculations: [],
}

const ADD_CALCULATIONS = "ADD_CALCULATIONS";
const REMOVE_CALCULATION = "REMOVE_CALCULATION";
const CHANGE_CACLULATION_FIRST_LEVEL_VALUE = "CHANGE_CACLULATION_FIRST_LEVEL_VALUE";
const CHANGE_CACLULATION_THIRD_LEVEL_VALUE = "CHANGE_CACLULATION_THIRD_LEVEL_VALUE";
const ADD_NEW_CALCULATION = "ADD_NEW_CALCULATION";
const ADD_NEW_TIMESPEND = "ADD_NEW_TIMESPEND";
const REMOVE_TIMESPEND = "REMOVE_TIMESPEND";

export const newCalculationReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_CALCULATIONS:
            return {state, calculations: action.payload}
        case REMOVE_CALCULATION:
            return {...state, calculations: state.calculations.filter((_, index) => index !== action.payload)}
        case CHANGE_CACLULATION_FIRST_LEVEL_VALUE:
            const calc1Property = action.payload[0];
            const calc1Index = action.payload[1];
            const calc1Value = action.payload[2];
            const calc1Copy = [...state.calculations];
            calc1Copy[calc1Index][calc1Property] = calc1Value;
            return { ...state, calculations: calc1Copy };
        case CHANGE_CACLULATION_THIRD_LEVEL_VALUE:
            const calc3PropertyFirst = action.payload[0];
            const calc3PropertySecond = action.payload[1];
            const calc3IndexFirst = action.payload[2];
            const calc3IndexSecond = action.payload[3];
            const calc3IndexThird = action.payload[4];
            const calc3Value = action.payload[5];
            const calc3Copy = [...state.calculations];
            calc3Copy[calc3IndexFirst].calculations[calc3IndexSecond][calc3PropertyFirst][calc3IndexThird][calc3PropertySecond] = calc3Value;
            return { ...state, calculations: calc3Copy };
        case ADD_NEW_CALCULATION:
            return {...state, calculations: action.payload}
        case ADD_NEW_TIMESPEND:
            const firstIndex = action.payload[0];
            const secondIndex = action.payload[1];
            const newSpend = action.payload[2];
            const calculationsCopy = [...state.calculations];
            calculationsCopy[firstIndex].calculations[secondIndex].stuff.push(newSpend);
            return { ...state, calculations: calculationsCopy };
        case REMOVE_TIMESPEND:
            const categoryIndex = action.payload[0];
            const calculationIndex = action.payload[1];
            const stuffIndex = action.payload[2];
            const calculationsForRemove = [...state.calculations];
            const stuffFiltered = calculationsForRemove[categoryIndex].calculations[calculationIndex].stuff.filter((_, index) => index !== stuffIndex);
            calculationsForRemove[categoryIndex].calculations[calculationIndex].stuff = stuffFiltered;
            return { ...state, calculations: calculationsForRemove };
        default:
            return state
    }
}

export const addCalculations = (payload) => ({type: ADD_CALCULATIONS, payload})
export const removeCalculation = (payload) => ({type: REMOVE_CALCULATION, payload})
export const changeCalculationFirstLevelValue = (payload) => ({type: CHANGE_CACLULATION_FIRST_LEVEL_VALUE, payload})
export const changeCalculationThirdLevelValue = (payload) => ({type: CHANGE_CACLULATION_THIRD_LEVEL_VALUE, payload})
export const addNewCalculation = (payload) => ({type: ADD_NEW_CALCULATION, payload})
export const addNewTimespend = (payload) => ({type: ADD_NEW_TIMESPEND, payload})
export const removeTimespend = (payload) => ({type: REMOVE_TIMESPEND, payload})

const defaultState = {
    step: 1,
}

const CHANGE_STEP = "CHANGE_STEP";

export const stepsReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_STEP:
            return {step: action.payload}
        default:
            return state
    }
}

export const changeStepAction = (payload) => ({type: CHANGE_STEP, payload})

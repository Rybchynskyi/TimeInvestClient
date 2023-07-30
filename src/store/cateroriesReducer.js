const defaultState = {
    categories: [],
}

const CHANGE_CATEGORIES = "CHANGE_CATEGORIES";

export const cateroriesReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_CATEGORIES:
            let name = action.payload[0];
            let isTrue = action.payload[1];
            if (isTrue){
                return {...state, categories: [...state.categories, name]}
            }
            else {
                const categoriesCopy = state.categories;
                const indexToDelete = categoriesCopy.indexOf(name);

                if (indexToDelete !== -1) {
                    categoriesCopy.splice(indexToDelete, 1);
                }
                return {...state, categories: categoriesCopy}
            }
        default:
            return state
    }
}

export const changeCategory = (payload) => ({type: CHANGE_CATEGORIES, payload})

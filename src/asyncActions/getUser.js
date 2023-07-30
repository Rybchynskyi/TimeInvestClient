import {addCurrentUserAction} from "../store/usersReducer";
import axios from "../api/axios";

export const getUser = () => {
    return function (dispatch) {
        axios.get('/api/user')
            .then(response => dispatch(addCurrentUserAction(response.data)))
            .catch(function (error) {
                if(error.response.status === 401) {
                    console.log(error.response)
                }
            });
    }
}

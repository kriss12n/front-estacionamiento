import { types } from "../types/types";

// const initialState ={

//     id:'',
//     nombre:'',
//     apellido:'',
//     img:'',
//     email:'' 

// };

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:

            return {
                state
            }

        default:
            return state;
    }
}
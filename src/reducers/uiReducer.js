import { types } from "../types/types";

const initialState = {

    indexSelected: "1"

}

export const uiReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.selected:

            return {
                indexSelected: action.payload
            }

        default:
            return state
    }


}
import { types } from "../types/types"

export const selectedNav = (index) => {

    return {
        type: types.selected,
        payload: index
    }

}
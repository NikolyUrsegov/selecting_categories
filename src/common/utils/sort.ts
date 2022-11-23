import {DirectionType} from "../../state/directionsReducer";

export const sort = (arrFilter: string[], arr: DirectionType[]) => {
    if (arr.length !== 0) {
        let newArr = []
        for (let i = 0; i < arrFilter.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].code === arrFilter[i]) {
                    newArr.push(arr[j])
                }
            }
        }
        return newArr
    }
    return arr
}

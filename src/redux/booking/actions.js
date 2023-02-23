import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

export const addBooking = (data) => {
    return {
        type: ADD_BOOKING,
        payload: {
            value: data,
        },
    };
};

export const removeBooking = (data) => {
    return {
        type: REMOVE_BOOKING,
        payload: {
            value: data,
        },
    };
};

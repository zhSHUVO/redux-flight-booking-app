import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

const bookingReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_BOOKING: {
            const bookingState = state.slice();
            bookingState.push(action.payload.value);
            return bookingState;
        }
        case REMOVE_BOOKING: {
            const bookingState = state.slice();
            return bookingState.filter(
                (booking) => booking.id !== action.payload.value.id
            );
        }

        default:
            return state;
    }
};

export default bookingReducer;

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
            console.log(bookingState);
            return bookingState.filter(
                (booking) => booking.id !== action.payload.value
            );
        }

        default:
            return state;
    }
};

export default bookingReducer;

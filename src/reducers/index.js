import {getAllBookings,getHotelDetails} from '../apiCalls';
const allBookings = getAllBookings();
const initialState = {
    pending:allBookings[0],
    approved:allBookings[1],
    rejected:allBookings[2],
    hotelDetails:getHotelDetails(),
}
const rootReducer = (state = initialState, action) => {
    return state;
};

export default rootReducer;

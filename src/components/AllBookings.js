import React from "react";
import Booking from "./Booking";
import BookingsTableDetails from "../configs/BookingsTableDetails";
const AllBookings = (props) => {
  return (
    <table responsive hover>
      <thead>
        <tr>
          {BookingsTableDetails.map(field => {
            return <th key={field.name}>{field.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.allBookings.map(booking => {
          return <Booking key={booking.booking_id} booking={booking} getBookingData={props.getBookingData}/>;
        })}
      </tbody>
    </table>
  );
};

export default AllBookings;

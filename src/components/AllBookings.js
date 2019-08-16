import React from "react";
import Booking from "./Booking";
import Table from "react-bootstrap/Table";
import BookingsTableDetails from "../configs/BookingsTableDetails";
const AllBookings = (props) => {
  return (
    <Table responsive hover>
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
    </Table>
  );
};

export default AllBookings;

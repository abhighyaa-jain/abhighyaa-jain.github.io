import React from "react";
import BookingsTableDetails from "../../../configs/BookingsTableDetails";
import Booking from "./Booking";

class DisplayBookings extends React.Component {
  render() {
    return (
      <>
        {this.props.allBookings != undefined ? (
          this.props.allBookings.length === 0 ? (
            <h4>No {this.props.category} Bookings!</h4>
          ) : (
            <table responsive hover>
              <thead>
                <tr>
                  {BookingsTableDetails.map(field => {
                    return <th key={field.name}>{field.name}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {this.props.allBookings.map(booking => {
                  return (
                    <Booking
                      key={booking.booking_id}
                      booking={booking}
                      getBookingData={this.props.getBookingData}
                    />
                  );
                })}
              </tbody>
            </table>
          )
        ) : (
          <div>Loading all bookings</div>
        )}
      </>
    );
  }
}

export default DisplayBookings;

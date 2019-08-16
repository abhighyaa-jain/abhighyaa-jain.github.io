import React from "react";
import AllBookings from "./AllBookings";
class DisplayBookings extends React.Component {
  render() {
    return (
      <div>
        {this.props.bookings != undefined ? (
          this.props.bookings.length === 0 ? (
            <h4>No {this.props.category} Bookings!</h4>
          ) : (
            <AllBookings allBookings={this.props.bookings} getBookingData={this.props.getBookingData}/>
          )
        ) : (
          <div>Loading all bookings</div>
        )}
      </div>
    );
  }
}

export default DisplayBookings;

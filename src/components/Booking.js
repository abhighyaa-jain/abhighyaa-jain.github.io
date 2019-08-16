import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getBookingDetails, approveBooking } from "../apiCalls";
import BookingTableDetails from "../configs/BookingsTableDetails";
import { BookingDetails, GuestDetails } from "../configs/BookingDetails";
class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, bookingDetail: {}, guests: {} };
  }

  handleShow = () => {
    getBookingDetails(this.props.booking.id).then(booking => {
      this.setState({
        show: true,
        bookingDetail: booking,
        guests: booking.form_details
      });
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <tr>
        {BookingTableDetails.map(field => {
          if (field.key === "booking_id") {
            return (
              <td>
                <a href="#" onClick={this.handleShow}>
                  {this.props.booking[field.key]}
                </a>
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {this.props.booking.booking_id} 's Details
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <table>
                      <tbody>
                        {BookingDetails.map(field => {
                          if (field.name != "Guest Details") {
                            return (
                              <tr key={field.name}>
                                <td>{field.name}</td>
                                <td>{this.state.bookingDetail[field.key]}</td>
                              </tr>
                            );
                          } else {
                            // this.GuestDetails()
                            // console.log(this.state.bookingDetail[field.key]);
                            if (
                              this.state.bookingDetail[field.key] != undefined
                            ) {
                              return Object.keys(
                                this.state.bookingDetail[field.key]
                              ).map((guest, index) => {
                                return (
                                  <React.Fragment>
                                    <tr>
                                      <th>Guest {index + 1} :</th>
                                    </tr>
                                    {GuestDetails.map(f => {
                                      return (
                                        <tr>
                                          <td>{f.key}</td>
                                          <td>
                                            {
                                              this.state.bookingDetail[
                                                field.key
                                              ][guest][f.key]
                                            }
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </React.Fragment>
                                );
                              });
                            }
                          }
                        })}
                      </tbody>
                    </table>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="success"
                      onClick={e =>
                        approveBooking(this.props.booking.booking_id).then(
                          message => {
                            this.props.getBookingData();
                            alert(message);
                            this.setState({ show: false });
                          }
                        )
                      }
                    >
                      Approve
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            );
          } else return <td>{this.props.booking[field.key]}</td>;
        })}
      </tr>
    );
  }
}

export default Booking;

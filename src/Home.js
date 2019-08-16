import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import DisplayBookings from "./components/DisplayBookings";
import Status from "./configs/status";
import {uploadFile} from "./apiCalls";
class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="body">
          {Status.map(s => {
            return (
              <Link to={"/bookings/" + s.value} key={s.name} className="status">
                {s.name}
              </Link>
            );
          })}
          <form
            className="fileUpload float-right mr-4 "
            encType="multipart/form-data"
          >
            <input type="file" onChange={e => uploadFile(e.target.files[0])} />
            <button className="btn btn-success">Upload CSV</button>
          </form>

          {/* {console.log("props bookings "+JSON.stringify(this.props.bookings))} */}
          <DisplayBookings
            category={this.props.category}
            bookings={this.props.bookings}
            getBookingData={this.props.getBookingData}
          />
        </div>
      </div>
    );
  }
}
export default Home;

import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import AllBookings from "./AllBookings";
import { getAllBookings, uploadFile } from "../apiCalls";

const DisplayMessage = props => {
  if (props.bookings.length === 0)
    return <h4>No {props.category} Bookings!</h4>;
  else return <AllBookings allBookings={props.bookings} />;
};

class BookingsClassification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: [],
      approved: [],
      rejected: []
    };
  }
  componentDidMount() {
    getAllBookings().then(allBookings => {
      this.setState({
        pending: allBookings[0],
        approved: allBookings[1],
        rejected: allBookings[2]
      });
    });
  }

  render() {
    const { pending, approved, rejected } = this.state;
    return (
      <Tabs
        defaultTab="pending"
        onChange={tabId => {
          console.log(tabId);
        }}
      >
        <TabList>
          <Tab tabFor="pending">Pending</Tab>
          <Tab tabFor="approved">Approved</Tab>
          <Tab tabFor="rejected">Rejected</Tab>
          <form
            className="fileUpload float-right mr-4 mt-2"
            encType="multipart/form-data"
          >
            <input type="file" onChange={e => uploadFile(e.target.files[0])} />
            <button className="btn btn-success">Upload CSV</button>
          </form>
        </TabList>
        <TabPanel tabId="pending">
          <DisplayMessage bookings={pending} category="pending" />
        </TabPanel>
        <TabPanel tabId="approved">
          <DisplayMessage bookings={approved} category="approved" />
        </TabPanel>
        <TabPanel tabId="rejected">
          <DisplayMessage bookings={rejected} category="rejected" />
        </TabPanel>
      </Tabs>
    );
  }
}
export default BookingsClassification;

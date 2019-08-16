import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HotelSettings from "./components/HotelSettings";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./Home";
import { getAllBookings } from "./apiCalls";
import Status from "./configs/status";

class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBookings: [],
      isLoaded:false,
    };
    this.getBookingData=this.getBookingData.bind(this);
  }
  getBookingData(){
    getAllBookings().then(allBookings => {
      this.setState({
        allBookings: allBookings,
        isLoaded:true,
      });
    });
  }
  componentDidMount() {
    this.getBookingData();
  }

  render() {
    return (
      <Router>
        <div>
          {Status.map(s => {
            return (
              <Route
                exact
                path={"/bookings/" + s.value}
                key={s.name}
                component={() => (
                  <Home
                    category={s.name}
                    bookings={this.state.allBookings[s.value]}
                    getBookingData={this.getBookingData}
                  />
                )}
              />
            );
          })}

          <Route exact path="/hotel-settings" component={HotelSettings} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

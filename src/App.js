import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import BookingsClassification from "./components/BookingsClassification";
// import Sidenavbar from "./components/Sidenavbar";

function App() {
  return (
    <Provider store={store}>
      <div>
        <BookingsClassification />
      </div>
    </Provider>
  );
}

export default App;

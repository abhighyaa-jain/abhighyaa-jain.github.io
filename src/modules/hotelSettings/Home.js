import React from "react";
import { deleteField, addNewField, getHotelDetails } from "../../apiCalls";
import Header from "../../components/Header";
import { HotelDetails, AskToUser } from "../../configs/HotelDetails";

class HotelSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fieldType: "", hotelDetails: {},isLoaded:false };
    this.fieldTypeRef = React.createRef();
    this.fieldTitleRef = React.createRef();
    this.fieldIsMandatoryRef = React.createRef();
    this.handleFieldtype = this.handleFieldtype.bind(this);
    this.handleAddNewField = this.handleAddNewField.bind(this);
    this.loadHotelData = this.loadHotelData.bind(this);
  }
  loadHotelData() {
    getHotelDetails().then(hotelDetails => {
      this.setState({ hotelDetails: hotelDetails,isLoaded:true });
    });
  }
  componentDidMount() {
    this.loadHotelData();
  }
  handleFieldtype(value) {
    this.setState({ fieldType: value });
  }
  handleAddNewField() {
    var type = this.fieldTypeRef.current.value;
    var title = this.fieldTitleRef.current.value;
    var isMandatory = this.fieldIsMandatoryRef.current.checked;
    addNewField(type, title, isMandatory).then(message => {
      alert(message);
      this.loadHotelData();
      this.fieldTitleRef.current.value = "";
      this.fieldTypeRef.current.value = "";
      this.fieldIsMandatoryRef.current.checked = false;
    });
  }
  render() {
    // const { hotelDetails={} } = store.getState();
    const {
      avail_fields = [],
      avail_types = [],
      field_suggestions = {},
      hotel_details = {}
    } = this.state.hotelDetails;

    //ToDo declare function outside
    const fetchSuggestions = () => {
      var x;
      if (this.fieldTypeRef.current != null)
        x = this.fieldTypeRef.current.value;
      if (x in field_suggestions) {
        var titles = [];
        avail_fields.forEach(field => {
          titles.push(field.title);
        });
        console.log("titleess");
        console.log(titles);
        return Object.keys(field_suggestions[x]).map(key => {
          if (titles.includes(field_suggestions[x][key])) {
          } else return <option value={field_suggestions[x][key]} />;
        });
      }
    };
    if(!this.state.isLoaded){
      return <div>Loading....</div>
    }
    else return (
      <div className="main">
        <Header />
        <h2>About Hotel: </h2>
        <table responsive borderless>
          <tbody>
            {HotelDetails.map(field => {
              if (this.state.hotelDetails.hotel_details != undefined)
                return (
                  <tr key={field.name}>
                    <th>{field.name}</th>
                    <td>{this.state.hotelDetails.hotel_details[field.key]}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>

        <h2>Details to be asked for check in :</h2>
        <table responsive borderless>
          <thead>
            <tr>
              {AskToUser.map(field => {
                return <th key={field.name}>{field.name}</th>;
              })}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {avail_fields.map(field => {
              return (
                <tr>
                  {AskToUser.map(f => {
                    if (f.key != "is_mandatory") return <td>{field[f.key]}</td>;
                    else
                      return (
                        <td>
                          <input type="checkbox" checked={field[f.key]} />
                        </td>
                      );
                  })}
                  <td>
                    <button
                      id={field.field_id}
                      onClick={e =>
                        deleteField(field.field_id).then(message =>
                          {this.loadHotelData();
                          alert(message + field.field_id)}
                        )
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td>
                <select
                  ref={this.fieldTypeRef}
                  value={this.state.fieldType}
                  onChange={e => this.handleFieldtype(e.target.value)}
                >
                  <option selected={true} value="" disabled>
                    Select Type
                  </option>
                  {avail_types.map(type => {
                    return (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  ref={this.fieldTitleRef}
                  list="suggestions"
                />
                <datalist id="suggestions">{fetchSuggestions()}</datalist>
              </td>
              <td>
                <input type="checkbox" ref={this.fieldIsMandatoryRef} />
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={this.handleAddNewField}
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default HotelSettings;

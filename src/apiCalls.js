import { post, get } from "./APILayer";
import Status from "./configs/status";

export function addNewField(type, title, is_mandatory) {
  var body = {
    is_new_field: true,
    title: title,
    type: type,
    is_mandatory: is_mandatory
  };
  // post("/admin/add_field/", body).then(response => {
  //   return response.message;
  // });
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var response = {
        success: true,
        message: "Added Successfully."
      };
      resolve(response.message);
    }, 100);
  });
}
export function deleteField(id) {
  //post api call
  // post('/admin/delete_field/' , id).then(response => {
  // return response.message;
  // })
  return new Promise(function(resolve) {
    setTimeout(function() {
      var response = {
        success: true,
        message: "Deleted Successfully."
      };
      resolve(response.message);
    }, 100);
  });
}
export function getAllBookings() {
  // get("/admin/get_check_in_details/").then(response => {
  //   var allBookings = [];
  //   var pending = [],
  //     approved = [],
  //     rejected = [];
  //     var result=response.data;
  //   for (var key in result) {
  //     if (result[key]["status"] === "pending") pending.push(result[key]);
  //     if (result[key]["status"] === "approved") approved.push(result[key]);
  //     if (result[key]["status"] === "rejected") rejected.push(result[key]);
  //   }
  //   allBookings = {
  //     pending: pending,
  //     approved: approved,
  //     rejected: rejected
  //   };
  //   return allBookings;
  // });
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var result = [
        {
          id: "12",
          booking_id: "dfjsg-df-sdf-sdf",
          status: "none",
          expected_check_in: "2019-03-02",
          expected_check_out: "2019-03-05",
          occupancy: 3,
          no_of_rooms: 1,
          check_in_status: false,
          sent_ack: false,
          primary_user_name: "Harsh",
          primary_user_phone: 9989898990
        },
        {
          id: "13",
          booking_id: "dfjhgg-df-sdf-sdf",
          status: "approved",
          expected_check_in: "2019-03-02",
          expected_check_out: "2019-03-05",
          occupancy: 3,
          no_of_rooms: 1,
          check_in_status: true,
          sent_ack: true,
          primary_user_name: "Harsh",
          primary_user_phone: 9989898990
        }
      ];

      var allBookings = {};
      var pending = [],
        approved = [],
        rejected = [];
      for(var s in Status){
        allBookings[Status[s].value] = []
      }
      for (var key in result) {
        for(var s in Status){
          // console.log(Status[s].name)
          if (result[key]["status"] === Status[s].value) {var stat=Status[s].value;
            allBookings[stat].push(result[key]);
          }
        }
        // if (result[key]["status"] === "pending") pending.push(result[key]);
        // if (result[key]["status"] === "approved") allBookings["approved"].push(result[key]);
        // if (result[key]["status"] === "rejected") rejected.push(result[key]);
      }
      // allBookings = {
      //   pending: pending,
      //   approved: approved,
      //   rejected: rejected
      // };
      // console.log(allBookings)
      resolve(allBookings);
    }, 100);
  });
}
export function getBookingDetails(id) {
  // var url= "/admin/get_form_booking_details/"+id;
  //  get(url).then(response=>{
  //    return response.data;
  //  })

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var result = {
        success: true,
        message: "",
        data: {
          id: "12323-23232-2323-3232",
          booking_id: "dfjsg-df-sdf-sdf",
          status: "pending",
          expected_check_in: "2019-03-02",
          expected_check_out: "2019-03-05",
          occupancy: 3,
          no_of_rooms: 1,
          check_in_status: false,
          sent_ack: false,
          primary_user_name: "Harsh",
          primary_user_phone: 9989898990,
          form_details: {
            guest_1: {
              is_primary_guest: true,
              doc: "doc_url",
              name: "Harsh",
              phone: 9989878980,
              age: 22
            },
            guest_2: {
              is_primary_guest: false,
              doc: "doc_url2",
              name: "second",
              phone: 9989878980,
              age: 24
            },
            guest_3: {
              is_primary_guest: false,
              doc: "doc_url3",
              name: "third",
              phone: 9989878980,
              age: 26
            }
          }
        }
      };
      resolve(result.data);
    }, 100);
  });
}

export function getHotelDetails() {
  // get(' /admin/get_hotel_details/').then(response=>{
  //   return response.data
  // })
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var result = {
        success: true,
        message: "",
        data: {
          avail_types: ["text", "number"],
          field_suggestions: {
            text: {
              "2": "Name",
              "4": "Coming From",
              "5": ""
            },
            number: {
              "1": "Phone",
              "3": "Age"
            }
          },
          avail_fields: [
            {
              field_id: 1,
              title: "Name",
              is_mandatory: true,
              field_type: "text"
            },
            {
              field_id: 2,
              title: "Phone",
              is_mandatory: false,
              field_type: "number"
            }
          ],
          hotel_details: {
            hotel_name: "Taj",
            tnc: "1.sdhjfsdfsdfsdff 2.sdfsdfsdf 3. dfsdfsdf",
            hotel_address: "34, jkfh,gd,fgdg,fd",
            hotel_contact: "9989789890",
            hotel_timezone: "Asia/kolkata",
            standard_check_in_time: "12 PM"
          }
        }
      };
      resolve(result.data);
    }, 100);
  });
}
export function uploadFile(file) {
  // post("/admin/upload_csv_data/",{"csv_file": file}).then(response=>{return response.message});
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(file);
      resolve("okay");
    }, 100);
  });
}

export function approveBooking(id) {
  // post("/admin/approve_check_in/", { booking_id: id }).then(response=>{return response.message});
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var response = {
        success: true,
        message: "Approved successfully."
      };
      //get all bookings again
      resolve(response.message + "  " + id);
    }, 100);
  });
}

import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User API
const API = {
  getUser: function () {
    return axios.get("https://randomuser.me/api/");
  },
  // get multiple users but set results to only English-speaking countries for dev purposes
  getUsers: function (num) {
    return axios.get(`https://randomuser.me/api/?nat=us,gb,au&results=${num}`);
  },
};

export default API;

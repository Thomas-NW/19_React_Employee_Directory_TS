// Axios Component for React with child function callback. 
// This is intended to allow in render async requests.
// https://www.npmjs.com/package/react-axios
// Bootcamp Ref.: 19-Inc_AJAX activity

import axios from "axios";
const url = 'https://randomuser.me/api/?results=30';


//api call
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ApiSearch: function () {
        return axios.get(url);
    }
};
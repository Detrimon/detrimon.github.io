import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function (headers) {
  return axios.create({
    baseURL: "http://localhost/api",
    // baseURL: 'http://localhost:1337',
    headers: {
      "Content-type": "application/json",
      "x-request-id": uuidv4(),
      ...headers,
    },
  });
}

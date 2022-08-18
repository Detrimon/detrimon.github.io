// import http from "../http";
import { v4 as uuidv4 } from "uuid";

class sendFileToServerService {
  postSendFileToServer(data) {
    // return http().post("/verify", data);
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          guid: uuidv4(),
          success: true,
          error: null,
        });
      }, 1200);
    });

    /* RESPONSE OBJECT:
    {
      success: [boolean],
      error: {
        code: [string, 50],
        description: [string, 255]
      }
    }
    */
  }
}

export default new sendFileToServerService();

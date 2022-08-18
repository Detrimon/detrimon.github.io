// import http from "../http";

class verifyService {
  postVerify(data) {
    const oData = {
      data: {},
    };

    if (data.email) {
      oData.data.email = data.email;
    }

    if (data.phone) {
      oData.data.phone = data.phone;
    }

    // return http.post("/verify", oData);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          emailToken: "EmAiL-ToKeN",
          phoneToken: "PhOnE-ToKeN",
          retryTime: 17,
          error: null,
        });
      }, 1200);
    });

    /* RESPONSE OBJECT:
    {
      success: [boolean],
      emailToken: [string, 50],
      phoneToken: [string, 50],
      retryTime: [int],
      error: {
        code: [string, 50],
        description: [string, 255]
      }
    }
    */
  }
}

export default new verifyService();

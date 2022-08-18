// import http from "../http";

class tokenService {
  postToken(data) {
    // return http().post("/verify", data);
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
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

export default new tokenService();

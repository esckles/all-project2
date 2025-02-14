import axios from "axios";

// const url: string = `http://localhost:2244`;
const url: string = `https://nextgenbe.onrender.com`;

export const createAccount = (data: any) => {
  try {
    return fetch(`${url}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },

      body: data,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};

export const createUserAccount = (data: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    return axios
      .post(`${url}/api/register`, data, config)

      .then((res) => {
        return res?.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const loginAccount = (data: any) => {
  try {
    return fetch(`${url}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};

export const allAccount = () => {
  try {
    return fetch(`${url}/api/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const stageOneEndPoint = (id: string, data: any) => {
  try {
    return fetch(`${url}/api/stage-one/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};

export const stageTwoEndPoint = (id: string, data: any) => {
  try {
    // /stage-one/:userID
    return fetch(`${url}/api/stage-2/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};

export const stageThreeEndPoint = (id: string, data: any) => {
  try {
    // /stage-one/:userID
    return fetch(`${url}/api/stage-3/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};

export const stageFourEndPoint = (id: string, data: any) => {
  try {
    // /stage-one/:userID
    return fetch(`${url}/api/stage-4/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};

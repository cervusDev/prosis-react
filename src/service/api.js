export const Api = {
  baseUrl: process.env.REACT_APP_LOCAL_HOST,

  createUser: () => Api.baseUrl + process.env.REACT_APP_LOGIN ,
  login: () => Api.baseUrl + process.env.REACT_APP_USER,
  questions: () => Api.baseUrl + process.env.REACT_APP_QUESTIONS,

  authHeader: {
    Authorization: "Bearer " + localStorage.getItem("JWT"),
  },

  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers({ ...Api.authHeader }) : undefined,
    }),

  buildApiPostRequest: (url, body) => {
    return fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    });
  },
};

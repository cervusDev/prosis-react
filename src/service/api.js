export const Api = {
  baseUrl: "http://localhost:3001/",

  createUser: () => Api.baseUrl + "user",
  login: () => Api.baseUrl + "login",

  authHeader: {
    Authorization: "Bearer " + localStorage.getItem("JWT"),
  },

  buildApiGetRequest: (url,  auth) =>
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
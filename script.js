const sendData = (url, data ) => {
  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      error + "..." + data;
    });
};

const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log("Uppss... " + error);
    });
};

getData("db.json")
.then((data) => console.log(data))
.then((data) => {
    sendData("https://jsonplaceholder.typicode.com/posts", data)
    .then((data) => console.log(data))
    .catch((error) => {console.log(error);})
})
fetch("http://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "From javascript";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  if (location) {
    messageOne.textContent = "Searching for location...";
    fetch("http://localhost:3000/weather?address=" + location).then(
      (response) => {
        response.json().then((data) => {
          if (data.error) {
            messageOne.textContent = data.error;
            messageTwo.textContent = "";
          }
          messageOne.textContent = location;
          messageTwo.textContent = data.forecast;
        });
      }
    );
  } else {
    messageOne.textContent = "Please enter a valid location";
  }
});

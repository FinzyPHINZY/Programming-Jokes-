const jokeBox = document.getElementById("joke");
const jokeQuestion = document.querySelector("h3");
const btn = document.getElementById("btn");

btn.addEventListener("click", showJoke);

function showJoke() {
  const url = "https://v2.jokeapi.dev/joke/Programming";

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      //   jokeQuestion.textContent = data.setup;
      //   jokeBox.textContent = data.joke;
      if (data.setup) {
        jokeQuestion.textContent = data.setup;
        jokeBox.textContent = data.delivery;
      } else {
        jokeQuestion.textContent = "";
        jokeBox.textContent = data.joke;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

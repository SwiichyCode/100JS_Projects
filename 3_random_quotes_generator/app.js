const btn = document.getElementById("btn");

btn.addEventListener("click", randomQuotes);

function randomQuotes() {
  fetch(
    "https://private-anon-128907076a-goquotes.apiary-proxy.com/api/v1/random?count=1"
  )
    .then((res) => res.json())
    .then((data) => {
      const quote = document.querySelector("#quote");
      quote.textContent = data.quotes[0].text;
    });
}

function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f57ef78a2fbo86933cf84320ct6badc8";
  let context =
    "You are a quote expert and love to write short quotes. Your mission is to generate a maximum two line quote in basic HTML. Sign the quotes with a ' ~ Dumebi's AI'  always on the next LINE below ALWAYS align right and ALWAYS in an <em> and a <strong> element. Sign from the right. NEVER display the HTML tags Make sure to follow the user instructions.";
  let prompt = `User instruction: Generate a quote based on ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating"><em> ⏳ Generating a quote about ${instructionsInput.value}</em></div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

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
    "You are a quote expert and love to write short quotes. Your mission is to generate a maximum three line quote in basic HTML. Sign the quotes with a '- Dumebi's AI' on the next line ALWAYS to the right and ALWAYS in an <em> and a <strong> element. Sign from the right. NEVER display the HTML tags Make sure to follow the user instructions.";
  let prompt = `User instruction: Generate a quote based on ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

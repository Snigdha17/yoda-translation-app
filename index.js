var buttonTranslate = document.querySelector("#btn-translate");
var textOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

//alert("Please limit translations to 5 per hour");

function constructURL(inputText) {
  return serverURL + "?text=" + inputText;
}

function errorHandler(error) {
  console.log("Error occured", error);
}

function clickEventHandler() {
  var textInput = document.querySelector("#text-input");
  var inputText = textInput.value;

  fetch(constructURL(inputText))
    .then((response) => response.json())
    .then((json) => (textOutput.innerText = json.contents.translated))
    .catch(errorHandler);
}

buttonTranslate.addEventListener("click", clickEventHandler);

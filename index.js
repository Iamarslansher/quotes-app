var qouteContenet = document.getElementById("qouteContenet");
var qouteAuthor = document.getElementById("qouteAuthor");

function genrateQuote() {
  try {
    const authors = [
      "Confucius",
      "Albert Einstein",
      "Oscar Wilde",
      "Maya Angelou",
      "Mark Twain",
    ];

    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const randomAuthor =
          authors[Math.floor(Math.random() * authors.length)];
        const adviceWithAuthor = {
          advice: data.slip.advice,
          author: randomAuthor,
        };
        qouteContenet.innerHTML = adviceWithAuthor.advice;
        qouteAuthor.innerHTML = "---" + adviceWithAuthor.author;
      })
      .catch((error) => console.error("Error:", error));
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

function saved() {
  localStorage.setItem("savedText", qouteContenet.innerHTML);
  alert("Quote saved successfully!");
}

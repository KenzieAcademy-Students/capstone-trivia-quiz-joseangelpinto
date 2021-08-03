// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!
function getQuestion() {
    fetch("https://jservice.io/api/random")
    .then(res=> res.json())
    .then(res=> console.log(res))

  
}
getQuestion()
// buscar 100 preguntas
// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left 
// and select "Open with Live Server" 


// YOUR CODE HERE! 
// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left 
// and select "Open with Live Server" 
// YOUR CODE HERE! 
let display = document.querySelector("#display") 
display.innerHTML = "<button id='Start'>Start Game</button>" 
document.querySelector("#Start").addEventListener("click", displayQ) 
async function displayQ() { 
    let question = await getQuestion() 
    console.log(question) 
    display.innerHTML = `<h3>The category is: ${question[0].category.title}</h3> 
    <p>Use the clue to answers the trivia:</p> 
    <p>${question[0].question}</p> 
    <input></input>` 
}  

function getQuestion() { 
    return fetch("https://jservice.io/api/random") 
    .then(res=> res.json()) 
} 

getQuestion() 

// buscar 100 preguntas 

 

 
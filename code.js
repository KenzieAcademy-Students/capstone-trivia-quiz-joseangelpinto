// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left 
// and select "Open with Live Server" 
// YOUR CODE HERE! 
let score = 0
let display = document.getElementById("display") 
display.innerHTML = "<button id='Start'>Start Game</button>" 
document.querySelector("#Start").addEventListener("click", displayQ)

 async function displayQ() { 
    let question = await getQuestion()  
    console.log(question)
    display.innerHTML = `<h3>The category is: ${question[0].category.title}</h3>
    <p>Use the clue to answers the trivia:</p> 
    <p>${question[0].question}</p> 
    <input></input>
    <button id="Answer">Answer Question</button>` 
    let input = document.querySelector("input")
    document.querySelector("#Answer").addEventListener("click", checkAnswer) 
    function checkAnswer(){
        if (input.value===question[0].answer){
        console.log("you are correct")
        score += 1
        display.innerHTML+=`<p>You are Correct</p>
        <p>The Correct Answer is: ${question[0].answer}</p><p>Your Score:${score}</p>`
        }else{
        console.log("you are wrong")
        score = 0
        display.innerHTML+=`<p>You are Wrong</p>
        <p>The Correct Answer is: ${question[0].answer}</p>`
        }
        display.innerHTML+="<button id= 'playAgain'>Play Again</button>"
        document.querySelector("#Answer").removeEventListener("click", checkAnswer) 
        document.querySelector("#playAgain").addEventListener("click", displayQ)
    
    }
} 
function answerQ(event) {

} 


 function getQuestion() { 
    return fetch("https://jservice.io/api/random") 
    .then(res=> res.json()) 
} 



// buscar 100 preguntas 

 

 
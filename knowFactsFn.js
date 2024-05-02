let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function getFact(){
    let userInputVal = userInputEl.value;
    let requestedURL = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
    let options = {
        method: "GET",
    };
    
    spinnerEl.classList.remove("d-none");
    factEl.classList.add("d-none");
    
    fetch(requestedURL, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            spinnerEl.classList.add("d-none");
            factEl.classList.remove("d-none");
            
            let {fact} = jsonData;
            
            factEl.textContent = fact;
        });
}


function generateFact(event){
    if (event.key ==="Enter") {
        getFact();
    }
    
}
getFact();
userInputEl.addEventListener("keyup", generateFact);
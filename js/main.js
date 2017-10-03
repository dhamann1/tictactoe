/*----- constants -----*/
/*----- app's state (variables) -----*/

var currentPlayer;
var state = [null, null, null, null, null, null, null, null, null];

/*----- cached element references -----*/
/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', handleClick);
document.querySelector('button').addEventListener('click', init);
var boxes = document.querySelectorAll('td');
var headline = document.querySelector('h2');

/*----- functions -----*/

function handleClick(evt){
    if(state[evt.target.id]){
        return; 
    }
    else if(currentPlayer === 0){
        state[evt.target.id] = "X";
        currentPlayer = 1; 
        console.log(state);
    } else {
        state[evt.target.id] = "0"; 
        currentPlayer = 0; 
        console.log(state);
    }
    render(state);
};


function checkWin (state){

};



function render(state){
    if(currentPlayer === 0){
        headline.textContent = "Player 1's Turn!";
    } else if (currentPlayer === 1){
        headline.textContent = "Player 2's Turn!";
    } 
    state.forEach(function(elem, index) {
        boxes[index].textContent = state[index];
    });
};

function init(evt){
    state = [null, null, null, null, null, null, null, null, null];
    render(state);
    currentPlayer = 0; 
    headline.textContent = "Player 1: Click to Begin!"; 
}

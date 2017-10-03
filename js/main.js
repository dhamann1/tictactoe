/*----- constants -----*/
/*----- app's state (variables) -----*/

var currentPlayer;
var state = [null, null, null, null, null, null, null, null, null];

/*----- cached element references -----*/
/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', handleClick);
document.querySelector('button').addEventListener('click', init);
var boxes = document.querySelectorAll('td');
console.dir(boxes);
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
    state.forEach(function(elem, index) {
        boxes[index].innerHTML = state[index];
    });
};

function init(evt){
    state = [null, null, null, null, null, null, null, null, null];
    render(state);
    currentPlayer = 0; 
}

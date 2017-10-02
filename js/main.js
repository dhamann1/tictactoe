/*----- constants -----*/
/*----- app's state (variables) -----*/

currentPlayer = 0; 
var turn; 
var player1Selections = [];
var player2Selections = []; 




/*----- cached element references -----*/
/*----- event listeners -----*/
var box = document.querySelector('table');
document.querySelector('table').addEventListener('click', handleClick);
document.querySelector('button').addEventListener('click', reset)
/*----- functions -----*/

function handleClick(evt){
    console.dir(evt)     
   if (currentPlayer === 0 && evt.target.textContent !== "0"){
        evt.target.textContent = "X";
        currentPlayer = 1;  
    } else if (currentPlayer === 1 && evt.target.textContent !== "X") {
        evt.target.textContent = "0";
        currentPlayer = 0; 
    } 
};

function reset(evt){
    var tds = document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++) {
        tds[i].textContent = '';
    }
}

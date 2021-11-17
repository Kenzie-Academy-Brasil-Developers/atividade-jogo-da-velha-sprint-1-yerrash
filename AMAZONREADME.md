# Activity: Tic-Tac-Toe

In this familiar game, one player is assigned “X” and the other player is assigned “O”. Players alternate drawing their character within cells on a **3x3 grid**. The first player to have **three** of their characters in a row—horizontal, vertical, or diagonal—wins.

The game can end in a tie, meaning all cells are filled but no player achieved three-in-a-row.

## Your Task

Implement Tic-Tac-Toe using HTML, CSS, and JavaScript.

### Draw the Board

Let’s start by drawing our board. We’ll need a 3x3 grid, so let’s create `index.html` and open it in our editor. 
We need 3 rows with 3 cells each, so use an HTML [table element](https://www.w3schools.com/tags/tag_table.asp) 
to create the grid. Note: we do not need table headers and our elements do not need any content.


Now let’s open `index.html` in our web browser. Not much to see, eh? That’s because our table is empty and lacks styling. 
We’ll add some styling by creating a `tictactoe.css` with the following styles:

```css
td {
  border: 1px solid blue;
  height: 100px;
  width: 100px;
}

td:hover {
  background: orange;
}

table {
  border: 1px solid green;
}
```

Link this new css file to your html.

Now when we open `index.html` in the browser we see our 3x3 grid, and cells that turn orange when we hover over them

![](http://g.recordit.co/8WgErWCje3.gif)

Ok, not gonna win a [Webby](https://www.webbyawards.com/winners/2017/) just yet but at least we have something to show.

### Set the Game's Initial State

For our game to function, there are a few questions we’ll need to answer after each turn:
*   Whose turn is it now?
*   Which cells has each player selected?
*   Has either player selected a winning combination (i.e. _three-in-a-row_)?

Let’s create a new `tictactoe.js` file and start out with some variables to store the answer to the first two questions:

```js
let currentPlayer = 'X';

let playerXSelections = [];
let playerOSelections = [];
```

And we’ll create a constant _array of arrays_ to store the possible winning combinations:

```js
const winningCombinations = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
```


We will give our html `<td>` elements id's which match the picture below: 
![](https://i.imgur.com/iUhrwyv.png)

Using this picture, you should be able to fill out the rest of the winning combinations array.

**Make sure to link your new JavaScript file to your HTML file.**

### Detect When a Cell is Clicked

In order for our Javascript to know which cell is clicked, we’ll need to identify each cell in some way. We’ll 
use the `id` attribute of the `td` elements to give each cell an ID 1 through 9.

```html
<td id="1"></td>
<td id="2"></td>
...
<td id="9"></td>
```

Now we’re ready to add an event listener. 

We have seen querySelector to pull one element out of the DOM, now we are 
using querySelectorAll to pull an array of similar elements from the DOM.

In order to add an event listener to each of those elements, we will need to iterate over the array of elements and add 
an event listener to each element.

```js
// get all td elements from the DOM and store in cellElementArray
const cellElementArray = document.querySelectorAll('td');

// write for loop to iterate over cellElementArray
for (let i = 0; i < cellElementArray.length; i++) {

    // set cellElementArray[i] to currentCell variable
    let currentCell = cellElementArray[i]
    
	// add an event listener to the currentCell
	currentCell.addEventListener('click', function(event){
	    const clickedCellElement = event.target;
	    // console log the id of the cell being clicked on
	    console.log("You clicked on cell number: "+clickedCellElement.id)
	});
}
```
Ref: 
- [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [`addEventListener()`](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)
- [`event.target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)


Save your files and reload index.html in your browser with the Javascript console open. Try clicking a few cells and make 
sure you get the expected output in the console.

Ok, we now have a board that responds to our click events. Next up, let’s add the game logic.

### Gameplay

Now its your turn, update your click event listener to do something a little more useful:
- if currentPlayer is X, set the clickedCellElement's innerHTML to X, else set it to O
- update currentPlayer variable to appropriate player (X or O)


Before continuing, make sure your players are properly alternating as shown:
![](http://g.recordit.co/cR1yznTFt2.gif)

Now, we need to keep track of what selections each player has made to determine whether or not a player has won the game.
So, every time a cell is clicked, we need to push the id of the clicked cells html element into the appropriate player's 
selections array (playerXSelections or playerOSelections). 


### Check for winning combo

How might we check if a player has won?

We have an array for each player’s selections, and an array of arrays of possible winning combinations. We want to check if our 
current player has all the cells of any winning combinations.

Let's create a function to check for a winner. Start with some [pseudocode](https://whatis.techtarget.com/definition/pseudocode)

```
function checkForWin(winningCombination, playerSelections)

	for every combination in winningCombination
	
		set matches to 0
		
		for every number in the current combination
		
			if the playerSelections array contains the current number
			
				increment matches by one
				
			if matches is equal to 3
			
				return true
	
	we got through all combinations, so return false
```

Convert this pseudocode into actual JavaScript and then use this function to check each player's selection array for a win. 

💡 **Tips:**

*   Use `console.log()` to check your work as you go.
*   The pseudocode section “if the playerSelections array contains the current number” could be written using the `includes()` 
array method.
*   [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) terminates the _current_ loop. 
*   `return` stops execution of the function, terminating all loops.



### Ending the Game

When a player wins, create an alert stating which player won and then reset the board for a new game.
To reset the board, we’ll need to clear the player selection arrays and erase our X’s and O’s.

Make sure you check for a draw. One way you could do this is by checking the combined length of the player selection arrays
and seeing if 9 moves have been.

## Completed Example

Here is a GIF of a finished implementation:

![](http://g.recordit.co/5niABH7QAY.gif)

## Next Steps

Want to add some polish to your game? Here are a few ideas.

**JavaScript:**
*   Prevent users from selecting the same cell multiple times. (Right now, one player could override the other player’s selection).
*   Display whose turn it is.
*   Keep score of how many times each player has won (and how many draws).
*   ALlow users to select their character, instead of just X and O.

**CSS:**
*   Use `cursor: pointer;` to show the familiar _hand with extended index finger_ when hovering over the cells.
*   Make your board more attractive.
*   Add an animation when X’s and O’s are added to the board.

## PLAYER'S CHOICE

### 
### // 1. I create a variable and put in it the values that I will refer to later. In this case, it will be the results of the game
### //2. I create a variable that will store the values of the current game (click a player, click a computer)
### // 3. I download items (hand images). By adding elements to the array, putting them in square brackets and 3 dots at the beginning, it makes working on them easier, because the array has more methods that we can use.
### // 4. Then I set the method addEventListener for choosen elements, but first have to use ForEach  because addEvent.. doesn't work on the array. I can use the forEach method where I specify that I have a correspondence to each element of the array signed to a hands string, and then I have to set the addEventListener method on each and assign a declared function ....
### // 5. The first function where I specify the clicked element with the this.dataset.option method and assign the result of the click to the playerHand element inside the game variable.
### // 6. Inside the same function I give the selected element the border color. But for this to work properly, when I assign the border to the clicked element, it must be removed from the previously clicked element. In this clu, I first use the forEach function, in which I clear the previously assigned colored border. And then I use the this.style.boxShadow method to add to the newly clicked element.
## // FUNCTION CONTROLLING THE GAME PROCESS
### // (to control what functions are executed when)

### // 7. I download the start button and set it to listen for click and assign it to the declared function
### // 8. I'm creating a startGame function
### // 9. conditional if function, checks if something has already been selected and IF YES THEN uses return to terminate the function in case playerHand is "empty"
### // 10. then I assign to the variable game.aiHand (which is the result of computer selection) the result of the function to calculate it.
### // 11. I create a function to compute the computer selection.
## // DEFINING A WINNER ... 

### // 12. I create a constant variable gameResult to which I assign the result of the checkResult function and call it ()
### // 13. Conditional if function that compares the player's choice with Ai's choice and assigns the result.
### // 14. I create a variable to which I assign the result of the function.
### // 15. The function to publish the results ...
### // 16. I call the endGame function that will clear the selection of an item (border) when I click Let's play.
### // 17. I create an endGame function.
### [click here to see how it works](https://marekzemla.github.io/-PAPER-STONE-SCISSORS-GAME/)

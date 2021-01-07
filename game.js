  
// 1.
const gameSummary = {
    numbers:0,
    wins:0,
    losses:0,
    draws:0,
}
// 2.
const game ={
    playerHand: "",
    aiHand: "",
}
// 3.
const hands = [...document.querySelectorAll('.select img')];
// 5. 
function handSelection() {
    game.playerHand = this.dataset.option
    console.log( game.playerHand);
// 6.
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = '0 0 0 4px yellow'
}
// 11.
function aiChoice() {
return hands[Math.floor(Math.random() *3)].dataset.option;
};
// 13.
function checkResult(player, ai) {
// console.log(player, ai)
if(player === ai){
    return 'draw'
    }else if ((player === "paper" && ai === "stone") || (player === "stone" && ai === "scissors") || (player === "scissors" && ai === "paper")){
     return 'win'
    } else{return 'loss'}
}
// 15.
function publishResult(player, ai, result) {
document.querySelector('[data-summary="your-choice"]').textContent = player;

document.querySelector('[data-summary="ai-choice"]').textContent = ai;

document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

if(result === 'win'){
    document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "You Won !"
    document.querySelector('[data-summary="who-win"]').style.color = "green"}
    else if(result === 'loss'){
    document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent = "You lost !"
    document.querySelector('[data-summary="who-win"]').style.color = "red"}
    else{
    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "Draw !"
    document.querySelector('[data-summary="who-win"]').style.color = "grey"      
    }
}
// 17.
function endGame (){
    document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow = "";
    game.playerHand = "";
}
//8.
function startGame() {
//9.
if(!game.playerHand) { return alert('choose a hand !')}
//10.
game.aiHand = aiChoice();

// 12.
const gameResult = checkResult(game.playerHand, game.aiHand);
console.log(gameResult)
// 14.
publishResult(game.playerHand, game.aiHand, gameResult);
// 16.
endGame();
}
// 4.
hands.forEach(hand => hand.addEventListener('click', handSelection))
//7.
document.querySelector('.start').addEventListener('click', startGame)

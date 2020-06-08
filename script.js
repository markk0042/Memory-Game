const cards = document.querySelectorAll(`.memory-card`);

let hasFlippedCard = false;
let firstCard, secondCard;



function flipcard(){
    this.classList.toggle(`flip`);//toggle means if the class is there remove it if its not them add it.//

    if (!hasFlippedCard){
        //firstclick
        hasFlippedCard = true;
        firstCard = this;
    
    }else{
        //secondclick
        hasFlippedCard =false;
        secondCard = this;

        console.log({firstCard, secondCard});
    
    }
}
cards.forEach(card => card.addEventListener(`click`, flipcard));
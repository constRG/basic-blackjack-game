let messageAlert = document.querySelector('.message-alert')
let cardsResult = document.querySelector('.cards-result')
let sumResult = document.querySelector('.sum-result')
let startingCardsBtn = document.querySelector('#starting-cards-btn')
let drawNewCardBtn = document.querySelector('#draw-new-card-btn')
let restartGameBtn = document.querySelector('#restart-game-btn')

let cards = []
let sum = 0
let isBlackjack = false
let isAlive = false
let messageAlertStr = ""

function getRandomCardNumbers() {
    let randomCardNumber = Math.floor(Math.random() * 13) + 1
    if (randomCardNumber > 10) {
        return 10
    } else if (randomCardNumber === 1) {
        return 11
    } else {
        return randomCardNumber
    }
}

startingCardsBtn.addEventListener('click', () => {
    isAlive = true
    let firstCard = getRandomCardNumbers()
    let secondCard = getRandomCardNumbers()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    startingCards()
})

function startingCards() {
    cardsResult.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsResult.textContent += cards[i] + " "
    }
    sumResult.textContent = "Sum: " + sum
    if (sum <= 20) {
        messageAlertStr = "Do you want to get a card?"
    } else if (sum === 21) {
        isBlackjack = true
        messageAlertStr = "Wow! you've got Blackjack!"
    } else {
        messageAlertStr = "You're out of the game!"
        isAlive = false
    }
    messageAlert.textContent = messageAlertStr
}

drawNewCardBtn.addEventListener('click', () => {
    drawNewCard()
})

function drawNewCard() {
    if (isAlive === true && isBlackjack === false) {
        let newCard = getRandomCardNumbers()
        sum += newCard
        cards.push(newCard)
        startingCards()
    } else if (isAlive === true && isBlackjack === true) {
        alert("You already got Blackjack before. The game will be restarted.")
        window.location.reload()
    }
    else {
        alert("Please restart the game or draw a starting cards first.")
        window.location.reload()
    }
}

restartGameBtn.addEventListener('click', () => {
    window.location.reload()
})

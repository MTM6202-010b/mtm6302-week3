// MTM6302 — Week 3: Adopt a Tiny Monster
// Write one checkpoint at a time. Save and refresh to see your changes.

// 1. Change document.title.
document.title = "My AC Monster Adoption Center"
console.log(document.title)
// 2. Select the name and mood. Change their textContent.
const monsterName = document.getElementById("monster-name")
const moodText = document.querySelector("#monster-mood")
const energyText = document.querySelector("#monster-energy")
const monsterImage = document.querySelector("#monster-image")
const monsterCard = document.querySelector("#monster-card")
const messageText = document.querySelector("#monster-message")
const certificate = document.querySelector("#certificate")
const certificateName = document.querySelector("#certificate-name")

// 3. Explore the snack list using children, firstElementChild,
//    and nextElementSibling. Inspect querySelectorAll() in the console.

const snackList = document.querySelector("#snack-list")
const firstSnack = snackList.firstElementChild
const secondSnack = firstSnack.nextElementSibling
const thirdSnack = secondSnack.nextElementSibling

firstSnack.textContent = "Debug Doughnut"
secondSnack.textContent = "Synax Sprinkles"


console.log(snackList.children)
console.log(document.querySelector(".snack"))
console.log(document.querySelector(".snack"))

monsterName.textContent = "SyntaxEater"
moodText.textContent = " A little grumpy"

// 4. Read/change image attributes, reveal the certificate,
//    and experiment with classList.add(), remove(), and toggle().

console.log(monsterImage.getAttribute("src"))
monsterImage.setAttribute("src", "assets/happy.svg")
monsterImage.setAttribute("alt", "A happy monster with smily face")

monsterCard.classList.add("is-happy")
monsterCard.classList.remove("is-happy")
monsterCard.classList.toggle("party-mode")

console.log(monsterCard.classList)

certificate.removeAttribute("hidden")
certificateName.textContent = monsterName.textContent

// 5. Use an energy number and if / else if / else to choose a mood.
let energy = 20

energyText.textContent = energy

function getMood(energy) {
    
if(energy < 30){
    return "sleepy"
}

else if (energy < 70) {
    return "Snack Investigator"
}

else {
    return "Ready fo chaos"
}
}

function feedMonster(amount){
    energy = energy + amount
    if(energy>100){
        energy=100
    }else if (energy < 0){
        energy=0
    }
    updateMonster()
}

function updateMonster(){
    const mood = getMood(energy)
    moodText. textContent = mood 
    energyText. textContent = energy

    monsterCard.classList.remove("is-sleepy", "is-hungry", "is-happy")
    if (energy < 30){
        monsterCard.classList.add("is-sleepy")
        monsterImage.setAttribute("src", "assets/sleepy.svg")
        monsterImage.setAttribute("alt", "A sleepy green monster with eye closed")
        messageText.textContent = "Currently buffering. Please send snacks."
    }else if(energy <70){
        monsterCard.classList.add("is-hungry")
        monsterImage.setAttribute("src", "assets/hungry.svg")
        monsterImage.setAttribute("alt", "An alart green green monster with mouth wide open")
        messageText.textContent = "Currently buffering. I smell cookies in another browser."

    } else {
        monsterCard.classList.add("is-happy")
        monsterImage.setAttribute("src", "assets/happy.svg")
        monsterImage.setAttribute("alt", "A happy green green monster with a big smile")
        messageText.textContent = "Enough energy to create chaos on innternet."
    }
}

function playMonster (amount){
    energy -=amount
    if(energy>100){
        energy=100
        console.log("energy is already full")

    } else if (energy < 0){
        energy=0
        console.log("energy is already empty")
    }
    updateMonster()
}

function renameMonster(name){
    monsterName.textContent = name
    certificateName.textContent = name
    document.title  += " - " + name
}

function toggleParty() {
    monsterCard.classList.toggle("party-mode")
}

function renameMonster() {
    energy = 20
    renameMonster("Mochi")
    monsterCard.classList.remove("party-mode")
    updateMonster()
}

resetMonster()

// 6. Put display updates in updateMonster(). Add feedMonster(amount).

// 7. Extract getMood(energy), which returns a string.

// 8. Add your own messages. Test energy values 0, 29, 30, 69, 70, 100.

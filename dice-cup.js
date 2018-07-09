const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let diceSides = []
let max = 0
const min = 2
let probs = []
let winners = []

const init = () => {
    for(let i = 2; i <= max; i++){
        probs.push(0)
    }
}

const getProbs = () => {
    for(let i = 1; i <= diceSides[0]; i++){
        for(let j = 1; j <= diceSides[1]; j++){
            probs[i+j]++
        }
    }
}

const highestProb = () => {
    let highest = 0
    probs.forEach(x => {
        if(x > highest){
            highest = x
        }
    })
    return highest
}

const extractWinners = () => {
    const goal = highestProb()
    probs.forEach((x,i) => {
        if(x === goal){
            winners.push(i)
        }
    })
}

const print = () => {
    winners.forEach(x => {
        console.log(x)
    })
}

rl.on('line', input => {
    diceSides = input.split(' ').map(dice => parseInt(dice,10))
    max = diceSides[0] + diceSides[1]
    init()
    getProbs()
    extractWinners()
    print()
    rl.close()
})
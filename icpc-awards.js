const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numTeams = 0
let numTeamsCounter = 0
let teams = []
let winners = []

const findWinners = () => {
    teams.forEach(team => {
        if(winners.findIndex(element => element.university === team.university) === -1 && winners.length !== 12){
            winners.push({...team})
        }
    })
}

const printWinners = () => {
    winners.forEach(winner => {
        console.log(`${winner.university} ${winner.team}`)
    })
}

rl.on('line', input => {
    if(!numTeams){
        numTeams = parseInt(input,10)
    }else{
        let strArray = input.split(' ')
        teams.push({
            university:strArray[0],
            team:strArray[1]
        })
        numTeamsCounter++
        if(numTeams === numTeamsCounter){
            findWinners()
            printWinners()
            rl.close()
        }
    }
})
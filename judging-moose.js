const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const biggest = (a,b) => {
    if(a > b)
        return a
    else if(a < b)
        return b
    else
        return a
}

const evenOrOdd = (a,b) => {
    if(a === b){
        return 'Even'
    }else{
        return 'Odd'
    }
}

const calcPoints = (l,r) => {
    const points = biggest(l,r) * 2
    return points
}

rl.on('line', input => {
    const tines = input.split(' ').map(x => parseInt(x,10))
    const left = tines[0]
    const right = tines[1]
    const points = calcPoints(left,right)
    if(points){
        console.log(`${evenOrOdd(left,right)} ${points}`)
    }else{
        console.log('Not a moose')
    }
    rl.close()
})
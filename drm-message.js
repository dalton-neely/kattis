const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const divide = str => {
    const half = Math.floor(str.length / 2)
    return [str.substr(0,half), str.substr(half)]
}
const sum = str => {
    let sum = 0
    str.split('').forEach(ch => {
        sum += ch.charCodeAt(0) - 65
    })
    return sum
}
const rotate = strArray => {
    const rotate1 = sum(strArray[0])
    const rotate2 = sum(strArray[1])
    const newArray1 = strArray[0].split('').map(ch => 
        String.fromCharCode(((ch.charCodeAt(0) - 65 + rotate1) % 26) + 65)
    )
    const newArray2 = strArray[1].split('').map(ch => 
        String.fromCharCode(((ch.charCodeAt(0) - 65 + rotate2) % 26) + 65)
    )
    return [newArray1,newArray2]
}
const merge = arr => {
    let merged = []
    for(let i = 0; i < arr[0].length; i++){
        let rotateValue = arr[1][i].charCodeAt(0) - 65
        merged.push(String.fromCharCode(((arr[0][i].charCodeAt(0) - 65 + rotateValue) % 26) + 65))
    }
    return merged
}
const decrypt = drmMessage => {
    let str = ''
    merge(rotate(divide(drmMessage))).forEach(ch => {
        str += ch
    })
    return str
}

rl.on('line', input => {
    console.log(decrypt(input))
    rl.close()
})
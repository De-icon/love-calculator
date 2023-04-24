const fName = document.querySelector('#firstName')
const sName = document.querySelector('#secondName')
const btn = document.querySelector('#btn')
const btn1 = document.querySelector('#btn1')
const outPut = document.querySelector('#outPut')
const outPut1 = document.querySelector('#outPut1')

btn.addEventListener('click', () => {
    var fNameValue = fName.value
    var sNameValue = sName.value
    
    if (fNameValue === '' || sNameValue === '') {
        outPut.innerHTML = 'Please input lovers name.'
    } else {
        var n = Math.random()
    n = Math.floor(n * 100) + 1
    
        if (n >= 100) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% You both are on top of the world. Love on!!`
        } else if (n >= 90) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% You guys chose each other. And will choose each other over and over and over. Without pause, without a doubt, in a heartbeat. Lucky guys!!`
        } else if (n >= 80) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% For you guys, Love is a promise; it is a souvenir, once given never forgotten. Cheerio!!`
        } else if(n >= 70) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% To be brave is to love unconditionally without expecting anything in return. You guys need to put a little effort in your relation.`
        } else if (n >= 60) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. You guys are blessed with both!!`
        } else if (n >= 50) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% For you guys, Love is composed of a single soul inhabiting two bodies.`
        } else if (n >= 40) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% You guys would rather spend a lifetime with each other than face all the ages of this world alone.`
        } else if (n >= 30) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% Between you guys, You don't love the other because he/she is perfect; you love them in spite of the fact that they're not.`
        } else if (n >= 20) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% You look at each other and see the rest of your life in each others eyes. A God given blessing!!`
        } else if (n >= 10) {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% Congratulations!! Your Love is a friendship set to music.`
        } else {
            outPut1.innerHTML = `${fNameValue} & ${sNameValue}`
            outPut.innerHTML = `${n}% Being friends is a lovely thing from the look of thing you guys are going to look great in the futuer`
        }
    }

    fName.value = ''
    sName.value = ''


   
})


btn1.addEventListener('click', () => { 
    outPut.innerHTML = ''
    outPut1.innerHTML = ''
    fName.value = ''
    sName.value = ''
})







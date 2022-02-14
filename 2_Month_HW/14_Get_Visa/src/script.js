const nameArray = ['Anya', 'Vanya', 'Nadya', 'Helen', 'Olga', 'Vova']
const balanceArray = [7000, 7000, 7000, 7000, 7000, 7000, 1000, 1000, 1000, 1000]
const ageArray = [20, 20, 20, 20, 20, 20, 20, 70, 70, 70]
const docArray = [true, true, true, true, true, true, true, true, false, false]
const engArray = [true, true, true, false, false, false, false, false, false, false]

const errorText = document.getElementById('error')
const nameInput = document.getElementById('name')
const generateNameBtn = document.getElementById('generateName')

const balanceInput = document.getElementById('balance')
const generateBalanceBtn = document.getElementById('generateBalance')

const ageInput = document.getElementById('age')
const generateAgeBtn = document.getElementById('generateAge')

const engInput = document.getElementById('english')
const generateEnglishBtn = document.getElementById('generateEnglish')

const documentInput = document.getElementById('document')
const generateDocumentBtn = document.getElementById('generateDocument')

const generateAllButton =  document.getElementById('generateAllButton')
const addCandidateButton =  document.getElementById('addCandidateButton')
const initButton =  document.getElementById('initButton')
const raceButton =  document.getElementById('raceButton')
const clearButton =  document.getElementById('clearButton')

const winnerText =  document.getElementById('winner')

generateNameBtn.addEventListener('click', function(){
    nameInput.value = nameArray[getRandomNum(0, 9)]
})
generateBalanceBtn.addEventListener('click', function(){
    balanceInput.value = balanceArray[getRandomNum(0, 9)]
})
generateAgeBtn.addEventListener('click', function(){
    ageInput.value = ageArray[getRandomNum(0, 9)]
})
generateDocumentBtn.addEventListener('click', function(){
    documentInput.value = docArray[getRandomNum(0, 9)]
})
generateEnglishBtn.addEventListener('click', function(){
    engInput.value = engArray[getRandomNum(0, 9)]
})

generateAllButton.addEventListener('click', function(){
    nameInput.value = nameArray[getRandomNum(0, 9)]
    balanceInput.value = balanceArray[getRandomNum(0, 9)]
    ageInput.value = ageArray[getRandomNum(0, 9)]
    documentInput.value = docArray[getRandomNum(0, 9)]
    engInput.value = engArray[getRandomNum(0, 9)]
})

addCandidateButton.addEventListener('click', addCandidate)

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Candidate(name, balance, age, docs, eng){
    this.name = name
    this.balance = balance
    this.age = age
    this.docs = docs
    this.eng = eng
}

function promiseTemplate(cand, property, timeout){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(cand[property]){
                resolve(cand)
            } else reject("xz")
        }, timeout)
    })
}

function checkBalance(num){
    let res = false
    if(num > 2000) {
        res = true
    }
    return res

}
function checkAge(num){
    if(num > 18 && num < 60) return true
    else return false
}

//написать проверку введенных документов и добавить в конструктор
function checkDocs(str){
    if(str === 'true') return true
    if(str === 'false') return false
}
//написать проверку введенного уровня инглиша и добавить в конструктор
function checkEng(str){
    if(str === 'true') return true
    if(str === 'false') return false
}


const candidatesForShow = []
const candidatesForRace = []
const promises = []

function addCandidate(){
    if(!nameInput.value) {
        errorText.innerHTML = 'no name'

    }else{
        const candForRace = new Candidate(
            nameInput.value,
            checkBalance(balanceInput.value),
            checkAge(ageInput.value),
            checkDocs(documentInput.value),
            checkEng(engInput.value)
        )
        candidatesForRace.push(candForRace)

        const candForShow = new Candidate(
            nameInput.value,
            balanceInput.value,
            ageInput.value,
            documentInput.value,
            engInput.value
        )
        candidatesForShow.push(candForShow)
        console.log(candidatesForShow, candidatesForRace);
        if(candidatesForShow.length === 5){
            addCandidateButton.disabled = 'true'
        }
    }
}

addCandidate()
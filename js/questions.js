import { questions } from './data.js';

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = '' //다시 결과를 할당할 수 있는 변수

function renderQuestion() { //변수들 할당
    const question = questions[currentNumber] //커렌트넘버 변수의 값에 맞게 퀘스천스라는 실제 데이터에서 질문을 꺼내오는 코드
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    choice1El.innerHTML = question.choices[0].text
    choice2El.innerHTML = question.choices[1].text
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

function nextQuestion(choiceNumber) {
    if (currentNumber === questions.length - 1) { //현재 페이지가 0부터 시작해서 9라면.. 즉 10번째 마지막 페이지라면 결과페이지로 넘어간다.
        showResultPage()
        return
    }

    const question = questions[currentNumber] //현재 질문에 대한 정보
    mbti = mbti + question.choices[choiceNumber].value 
    //기존에 mbti라는 변수가 가지고있는 값에 더하기~~ 초이스넘버 안에있는 값을 꺼내서 쓸 것임
    currentNumber = currentNumber + 1

    renderQuestion() //질문 새롭게 렌더링
}

function showResultPage() {
    location.href = '/results.html?mbti=' + mbti //쿼리스트링
}




choice1El.addEventListener('click', function() {
    nextQuestion(0) 
})

choice2El.addEventListener('click', function() {
    nextQuestion(1) 
})


renderQuestion()


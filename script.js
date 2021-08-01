const startButton=document.getElementById('start-btn')
const nexttButton=document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scorElement=document.getElementById('right-answers')
let shuffeledQuestions, currentQuestionIndex
let countRightAnswers = 0

startButton.addEventListener('click',startGame)
nexttButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
    countRightAnswers=0
        scorElement.innerHTML='your score is '+ countRightAnswers
  startButton.classList.add('hide')
  shuffeledQuestions=questions.sort(()=> Math.random() - .5)
  currentQuestionIndex=0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function setNextQuestion(){
 resetState()
 showQuestion(shuffeledQuestions[currentQuestionIndex])
}
function showQuestion(question){
   questionElement.innerText=question.question
   question.answers.forEach(answer =>{
       const button = document.createElement('button')
       button.innerText=answer.text
       button.classList.add('btn')
       if(answer.correct){
           button.dataset.correct=answer.correct
       }
       button.addEventListener('click',selectAnswer)
       answerButtonsElement.appendChild(button)
   })

}
function resetState(){
    clearStatusClass(document.body)
   nexttButton.classList.add('hide')
   while(answerButtonsElement.firstChild){
       answerButtonsElement.removeChild
       (answerButtonsElement.firstChild)
   }
}
function selectAnswer(e){
    const selectedButton=e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(selectedButton.dataset.correct){
        countRightAnswers++
    }
    if(shuffeledQuestions.length>currentQuestionIndex +1){
    nexttButton.classList.remove('hide')
    }else{
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }
    scorElement.innerHTML='your score is '+ countRightAnswers
}
function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions=[
    {
        question:'To which country belongs the Dogon tribes?',
        answers:[
            
            { text:'Algeria', correct:false},
            { text: 'Mali', correct:true},
            { text:'Tunisia', correct:false}
        ]
    },
    {
        question:'What is the full form of ASLV',
        answers:[
            { text: 'Augmented Satellite Launch Vehicle', correct:true},
            { text:'Augmented Statement Launch Vehicle', correct:false}
        ]
    },
    {
        question:'Who wrote the book, “The Game Goes on “',
        answers:[
            { text: 'J.K. Rowling', correct:false},
            { text:'Alan Mc Gilvray', correct:true}
        ]
    },
    {
        question:'How many official languages are there in U.N',
        answers:[
            { text: 'six', correct:true},
            { text:'one', correct:false},
            { text:'five', correct:false},
            { text:'zero', correct:false},
        ]
    }
]
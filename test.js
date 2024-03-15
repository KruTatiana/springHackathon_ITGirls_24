let quest = {
  'name':'Какой ты пельмень?',
  'questions':[
    {
  'question': 'Выбери цвет',
  'answers': [
    'Зеленый',
    'Оранжевый',
    'Синий'
  ]
},
{
  'question': 'Легко ли ты просыпаешься утром?',
  'answers': [
    'Легко',
    'Зависит от погоды',
    'Куда просыпаюсь?'
  ]
},
{
  'question': 'Любишь природу?',
  'answers': [
    'Да, очень',
    'По настроению',
    'Моя стихия город'
  ]
},
{
  'question': 'Умеешь готовить?',
  'answers': [
  'Обожаю',
  'Только что-то простое',
  ' Кого готовить?'
]
},
{
  'question': 'У тебя много друзей?',
  'answers': [
  'Много',
  'Больше просто знакомых',
  'Не считала'
]
},
{
  'question': 'Ты ешь после шести?',
  'answers': [
  'Конечно',
  'Только если очень проголодалась',
  'Ни в коем случае'
]
},
{
  'question': 'Любишь пельмени?',
  'answers': [
  'Обожаю',
  'Только их и ем',
  'Смотря что считать пельменем'
]
},
{
  'question': 'С чем ешь пельмени?',
  'answers': [
  'С бульоном',
  'Со сметаной',
  'С маслом'
]
},]
}

const buttonGo = document.querySelector('.quest__go_quest');
const mainEl = document.querySelector('.quest__my_element');
const buttonNext = document.querySelector('.quest__next');
const questName = document.querySelector('.test__quest_name');
const finEl = document.querySelector('.quest__finish_el');
let qIndex = 0;

class Test {
  constructor (question, answera, answerb, answerc){
    this.question = question;
    this.answerA = answera;
    this.answerB = answerb;
    this.answerC = answerc;
  }

  getAnswer() {
    this.questionEl = document.createElement('h5');
    this.inputA = document.createElement('input');
    this.inputB = document.createElement('input');
    this.inputC = document.createElement('input');
    this.lableA = document.createElement('lable');
    this.lableB = document.createElement('lable');
    this.lableC = document.createElement('lable');
    this.inputsEl = document.createElement('div');
    this.variantElOne = document.createElement('div');
    this.variantElTwo = document.createElement('div');
    this.variantElThree = document.createElement('div');
    mainEl.appendChild(this.questionEl);
    mainEl.appendChild(this.inputsEl);
    this.inputsEl.appendChild(this.variantElOne);
    this.inputsEl.appendChild(this.variantElTwo);
    this.inputsEl.appendChild(this.variantElThree);
    this.variantElOne.appendChild(this.inputA);
    this.variantElOne.appendChild(this.lableA);
    this.variantElTwo.appendChild(this.inputB);
    this.variantElTwo.appendChild(this.lableB);
    this.variantElThree.appendChild(this.inputC);
    this.variantElThree.appendChild(this.lableC);
    this.inputsEl.setAttribute('class','inp_container')
    this.questionEl.setAttribute('class','question_element');
    this.inputA.setAttribute('id','answerFirst');
    this.inputB.setAttribute('id','answerSecond');
    this.inputC.setAttribute('id','answerThird');
    this.lableA.setAttribute('for','answerFirst');
    this.lableB.setAttribute('for','answerSecond');
    this.lableC.setAttribute('for','answerThird');
    this.inputA.setAttribute('type','radio');
    this.inputB.setAttribute('type','radio');
    this.inputC.setAttribute('type','radio');
    this.inputA.setAttribute('name','answer');
    this.inputB.setAttribute('name','answer');
    this.inputC.setAttribute('name','answer');
    this.questionEl.innerText = this.question;
    this.lableA.innerText = this.answerA;
    this.lableB.innerText = this.answerB;
    this.lableC.innerText = this.answerC;
  }
}

function getQuest(){
  questName.style.display = "block";
  questName.innerText = quest.name;
  mainEl.style.display = "block";
  let answerEl = new Test(quest.questions[qIndex].question,quest.questions[qIndex].answers[0],quest.questions[qIndex].answers[1],quest.questions[qIndex].answers[2]);
  answerEl.getAnswer();
  qIndex +=1;
}

buttonGo.addEventListener('click', () => {
  getQuest();
  buttonGo.style.display = "none";
  buttonNext.removeAttribute('disabled');
});

buttonNext.addEventListener('click', () => {
  if(qIndex>=8){
    mainEl.style.display = "none";
    finEl.style.display = "block";
  }else{
  mainEl.innerHTML = "";
  getQuest();
  }
});
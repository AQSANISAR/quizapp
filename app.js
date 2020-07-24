var questions =[{
    "question":"Which is the largest city in the World ?",
    "option1" : "Karachi",
    "option2" : "Paris" ,
    "option3" : "Tokyo" ,
    "option4" : "Newyork",
    "answer" : "3"
 },{
    "question":"Which is the largest Continent of the World ?",
    "option1" : "North Americs",
    "option2" : "Asia" ,
    "option3" : "Europe" ,
    "option4" : "Africa",
    "answer" : "2"
 },{
    "question":"Which country in the world is believed to have the most miles of motorway??",
    "option1" : "USA",
    "option2" : "UK" ,
    "option3" : "China" ,
    "option4" : "Russia",
    "answer" : "3" 

 },{
     "question":"Which European city hosted the 1936 Summer Olympics?",
     "option1":"Edinburg",
     "option2":"Prague" ,
     "option3":"Berlin",
     "option4":"London",
     "answer":"3"
 },{
    "question":"What is the currency of Vietnam?",
    "option1":"doller",
    "option2":"yang" ,
    "option3":"dollar",
    "option4":"dong",
    "answer":"4"
}
]
var score = 0;
var cQ= 0;
var questionp = questions.length
var ui =document.getElementById("qui")
var ty = document.getElementById("ques")
var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")
var button = document.getElementById("nB")
var res = document.getElementById("result")
function loadques(quesind){
   var q= questions[quesind]
   ty.textContent = (quesind+1)+" ." + q.question
   opt1.textContent = q.option1
   opt2.textContent = q.option2
   opt3.textContent = q.option3
   opt4.textContent = q.option4
}

function nextquestion(){
   var selectedoption = document.querySelector('input[type=radio]:checked')
   if(!selectedoption){
      alert("select any option")
      return
   }
   var answer = selectedoption.value
   if(questions[cQ].answer==answer)
   {
      score+=10
   }
selectedoption.checked =false
   cQ++
   if(cQ==questionp-1){
      button.textContent ='finish'
   }
   if(cQ==questionp){
      ui.style.display='none'
      res.style.display = ""
      res.style.marginTop="300px"
      res.textContent="your score is "+" "+score
      return
   }
   loadques(cQ)
}
loadques(cQ)


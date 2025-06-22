

      let quiz = [
        {
          question: "What is the capital of France?",
          options: ["Paris", "Berlin", "Madrid", "Rome"],
          correctAnswerIndex: 0
        },
        {
          question: "Which language is used for web apps?",
          options: ["Python", "JavaScript", "C++", "Java"],
          correctAnswerIndex: 1
        },
        {
          question: "What is 2 + 2?",
          options: ["3", "4", "5", "22"],
          correctAnswerIndex: 1
        }
      ];
      const qus = document.querySelector("#questionelement");
      const ans1 = document.querySelector(".btn1");
      const ans2 = document.querySelector(".btn2");
      const ans3 = document.querySelector(".btn3");
      const ans4 = document.querySelector(".btn4");
      const submit = document.querySelector(".bttn");
const index=0;


function getAnswer(){
  
 
}
const submitQuiz=()=>{
  if(index < data.length)
  {
    index++;
    loadQuestion();
  }
  else{
    
  }




}
  const loadQuestion=()=>{
    const data= quiz[index];
    console.log(data);
    qus.innerText=`${index +1}) ${data.question}`;
    ans1.innerText=data.options[0];
    ans2.innerText=data.options[1];
    ans3.innerText=data.options[2];
    ans4.innerText=data.options[3];
  }
  



loadQuestion();

getAnswer();
    

const qus=document.getElementById("question");
const ans1=document.getElementById("ans1");
const ans2=document.getElementById("ans2");
const ans3=document.getElementById("ans3");
const ans4=document.getElementById("ans4");
const sellect = document.querySelectorAll('input[name="ans"]');
 let index=0;
let score=0;
const loadQuestion=()=>{
    const data=quiz[index];
    qus.innerText=`${index +1}) ${data.questions}`
    ans1.innerText=data.option[0];
    ans2.innerText=data.option[1];
    ans3.innerText=data.option[2];
    ans4.innerText=data.option[3];
    //reset 
 
  sellect.forEach((sellect) => (sellect.checked = false));

}
const getAnswer=()=>{
    
    let Answer =null;
    sellect.forEach((sellect) => {
        if(sellect.checked)
            Answer = sellect.value; 
        
    });
    return Answer;


}
function submitQuiz(){
    const getAns = getAnswer();

    if (getAns === null) {
        alert("Please select an answer.");
        return;
      }
    

     
      const currentQuestion = quiz[index];
    
      // Check if the selected answer is the correct one
      if (getAns === currentQuestion.correct) {
          score++;  // Increment the score if the answer is correct
      }
     
      index++;
      
    if(index < quiz.length)
    {

        loadQuestion();
    }
    else{
        document.getElementsByClassName("quizContiner")[0].innerHTML = 
  `<h1>Quiz Complete!<br>Your score: ${score}/${quiz.length}</h1>`;

  

    }

}

loadQuestion();
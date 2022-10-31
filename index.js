const questions = [
    {
        'que' : 'Which of the following is a Markup Language ?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JAVASCRIPT',
        'd' : 'PHP',
        'correct' : 'a',
    },

    {
        'que' : 'When is Javascript Launched ?',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'none of these',
        'correct' : 'b',
    },

    {
        'que' : 'What does CSS stands for ? ',
        'a' : 'Hypertext Markup language',
        'b' : 'Cascading Style Sheet',
        'c' : 'Jason object Notation',
        'd' : 'Helicopters',
        'correct' : 'b',
    },
    // qualome joneffer about
    // competetitors of the company
    // python course module


]
let index=0;
let total=questions.length;
let right=0, wrong=0;
const quebox=document.getElementById('quebox');
const optioninputs=document.querySelectorAll('.options')
const loadquestion=() =>{
    if(index==total){
        return endQuiz()
    }
    reset()
    const data= questions[index]
    quebox.innerText= `${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText= data.a;
    optioninputs[1].nextElementSibling.innerText= data.b;
    optioninputs[2].nextElementSibling.innerText= data.c;
    optioninputs[3].nextElementSibling.innerText= data.d;
}
const submitquiz=()=>{
    const data= questions[index]
    const ans=getAnswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;

}

const getAnswer=()=>{
    let answer;
    optioninputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optioninputs.forEach(
        (input)=>{
            input.checked=false;
            }
    )
    }

    const endQuiz=() =>{
        document.getElementById("box").innerHTML=
        `
        <div style="text-align: center">
        <h3> Thank you <\h3>
        <h2>${right}/${total} are correct<\h2>
        </div> `


    }
        
//initial call
loadquestion();


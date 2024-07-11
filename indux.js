 let userscore=0;
 let compuscore=0;

 const choices=document.querySelectorAll(".choice");
 const userscoreara=document.querySelector("#user-score");
 const compuscorepara=document.querySelector("#comp-score");
 
 const msg=document.querySelector("#msg");
  const gencompChoice=()=>
    {
        const options=["rock","paper","scissor"];
        //rock paper scisssor
        const randidx=Math.floor(Math.random()*3);
         return options[randidx];
    } ;
    const drawGame=()=>{

        msg.innerText="Draw Game.Play again!!";
       msg.style.backgroundColor="#081b31";
    };
    const showWinner=(userwin,userchoice,comChoice)=>{
        if(userwin)
            {
                userscore++;
                userscoreara.innerText=userscore;
                msg.innerText=`you win! ${userchoice} beats ${comChoice}`;
                msg.style.backgroundColor="Green";
            }
        else{
            compuscore++;
            compuscorepara.innerText=compuscore;
            msg.innerText=`you lose ${comChoice} beats ${userchoice}`;
            msg.style.backgroundColor="red";
        }

    };
 const playgame=(userchoice)=>
    {
        console.log("choice was clicked!",userchoice);
        //generate compChoice
        const comChoice=gencompChoice();
        console.log("Computer choice =",comChoice);
if (userchoice==comChoice){

drawGame();
}
else{
    let userwin=true;
    if(userchoice==="rock")
        {//scissor,paper
           userwin=comChoice==="paper" ? false :true;
        }
    else if(userchoice==="paper")
        {//scisssor,rock
            userwin=comChoice==="scissor" ? false :true;
        }
    else if(userchoice==="scissor")
        {
            userwin=comChoice==="rock" ? false :true;    
        }
        showWinner(userwin,userchoice,comChoice);
}

    }

 choices.forEach((choice)=> {
    // console.log(choice)
   
    choice.addEventListener("click",()=> {
      const userchoice=choice.getAttribute("id");
       playgame(userchoice);
    });
    
 });
 
//  console.log("choice was clicked!");
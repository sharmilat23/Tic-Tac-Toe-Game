let boxes=document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset");
let msgcontainer= document.querySelector(".message");
let newgamebtn= document.querySelector("#newbtn");
let winmsg=document.querySelector("#winmsg");

let turnO=true;

let winpatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
    })
})

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    count=0;
}

let disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

let showWinner = (winner) => {
    winmsg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const draw= () =>{
    winmsg.innerText=`Draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    count=0;
}
const checkWinner=()=>{
    for(let a of winpatterns){
        let pos1Val=boxes[a[0]].innerText;
        let pos2Val=boxes[a[1]].innerText;
        let pos3Val=boxes[a[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !="" ){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
            
        }
        else if(count===9){
            draw();
    }
        
    }
    
    }
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);




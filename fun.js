let box= document.querySelectorAll(".one");
let rest=document.querySelector(".reset");
let newd = document.querySelector("#new-btn");
let ms = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count=0;
let tr=true;
let arr=[ [0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];

const reset=()=>{
    tr=true;
   enableBoxes();
   ms.classList.add("hide");
};
box.forEach((bo) => {
 bo.addEventListener("click",()=>{
    console.log("box was clicked");
    if(tr==true){
        bo.innerText="X";
        tr=false;
    }
    else{
        bo.innerText="O";
        tr=true;
    }
    count++;
    bo.disabled=true;
    let win =checkwin();
    if(count==9 && !win){
        draw();
    }
 });
 
});
const draw = () => {
    msg.innerText="Draw Match";
    ms.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () => {
    for (let bo of box) {
      bo.disabled = true;
    }
  };
  const enableBoxes = () => {
    for (let bo of box) {
      bo.disabled = false;
      bo.innerText="";
    }
  };
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    ms.classList.remove("hide");
    disableBoxes();
  };
const checkwin = () => {
    for(let pat of arr){
        let pos1 = box[pat[0]].innerText;
        let pos2 = box[pat[1]].innerText;
        let pos3 = box[pat[2]].innerText;
        if(pos1 !=""  && pos2 != ""&& pos3!="" ){
            if(pos1==pos2 && pos2== pos3){
                console.log("Winner");
                showWinner(pos1);
            }
        }
    }
};
rest.addEventListener("click",reset);
newd.addEventListener("click",reset);

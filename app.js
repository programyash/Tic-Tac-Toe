let allbox = document.querySelectorAll(".box");
let btn = document.querySelector("button");
let newgame = document.querySelector(".newbtn");
let start = document.querySelector(".start");
let text=document.querySelector(".text");
let win=document.querySelector(".win");
let gamebox=document.querySelector(".game-box");

let player0 = true;

const winpatterns = [
    [0, 1, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

gamebox.addEventListener("click",()=>{
    text.style.display="none";
});

newgame.addEventListener("click",()=>{
    text.innerText="Click start";
    setInterval(()=>{
        location.reload();
    },1000);
});

start.addEventListener("click",()=>{
    text.innerHTML="Game Start";

allbox.forEach((box) => {
    box.addEventListener("click", () => {
        if (player0) {
            box.innerText = 'O';
            player0 = false;
        } else {
            box.innerText = '𐤕';
            player0 = 'true';
        }
        box.disabled = true;
        checkwin();
    });
});
});

const checkwin = () => {
    for (let pattern of winpatterns) {
        let pos1val = allbox[pattern[0]].innerText;
        let pos2val = allbox[pattern[1]].innerText;
        let pos3val = allbox[pattern[2]].innerText;

        if (pos1val != "" & pos2val != "" & pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                win.innerHTML = `Congratulations! Winner is ${pos1val}`;
                console.log("winner", pos1val);
            }
        }
    }
};

let time = 60;
let Hit = 0;
let score = 0;
let numClicked;
let newGame;
let btn;


function startGame(){
    function bubbleCreation(){
        let bubble = "";
        for(var i =1;i<=154;i++){
        let rn = Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".bottom").innerHTML = bubble;
    }
    
    function runTimer(){
        let Timer = setInterval(function SetTimer(){
            if(time>0){
            time--;
            document.querySelector('#timerdiv').textContent = time;
            }
            else{
                clearInterval(Timer);
                document.querySelector(".bottom").setAttribute('default',"")
                document.querySelector(".buttondiv").innerHTML ="";
                document.querySelector(".startnew").textContent =`Start new game`;
                document.querySelector(".bottom").innerHTML = `<h1>Game Over</h1>`
            }
        },500)
    }
    
    function NewHit(){
        Hit = Math.floor(Math.random()*10);
        document.querySelector('#Hitdiv').textContent = Hit;
    }
    
    function scoreHit(){
        score = score + 10;
        document.querySelector('#scorediv').textContent = score;
    }
    
    newGame = document.querySelector(".bottom").addEventListener('click',function(e){
        numClicked = Number(e.target.textContent);
        btn = String(e.target.textContent);

        if(numClicked === Hit){
            scoreHit();
            NewHit();
            bubbleCreation();
        }
        
    })
    
    
    NewHit();
    runTimer();
    bubbleCreation();
}

document.querySelector('.button1').addEventListener('click',function(){
    document.querySelector(".bottom").removeAttribute('default',"")
    startGame();
})
document.querySelector('.startnew').addEventListener('click',function(){
    document.querySelector(".bottom").removeAttribute('default',"")
    document.querySelector(".startnew").textContent ="";
    document.querySelector("#scorediv").textContent = 0;
    time = 60;
    score = 0;
    startGame();
})



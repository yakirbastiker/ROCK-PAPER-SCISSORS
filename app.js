//DOM 
let countUser = document.getElementById('countUser');
let countComputer = document.getElementById('countComputer');
let userPic = document.querySelector('.userPic');
let computerPic = document.querySelector('.computerPic');

let userCount = 0;
let userComputer = 0;

let buttons = document.querySelectorAll('.buttons');

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        let choice = btn.value;
        init(choice);
    })
});

function init(e) {
    let user = e;
    // random choice for computer
    let computer = pcChoice();
    
    //show pic
    
    showPic('user', user);
    showPic('computer', computer);

    //check who win            
        if (user === computer){
            alert("The result is a tie!");
        } else if (user === 'rock') {
            if(computer === 'paper') {
                userComputer++;
            } else{userCount++;}
        } else if (user === 'paper') {
            if(computer === 'scissors') {
                userComputer++;
            } else{userCount++;}
        }else if (user === 'scissors') {
            if(computer === 'rock') {
                userComputer++;
            } else{userCount++;}
        }
        
    
    //update 
    countUser.innerHTML = userCount;
    countComputer.innerHTML = userComputer;
}


//pc choice - rendom
function pcChoice() {

    let num = Math.random();
    if (num < 0.34) {
        return "rock";
    } else if (num <= 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function showPic(type, value){
    console.log(typeof type);
    console.log( type);
        let pic;
        if(value === 'rock'){
            pic = "img/rock.jpg";
        }else if(value === 'paper'){
            pic = "img/paper.jpg";
        } else{ 
            pic = "img/scissors.jpg";
        }

        if(type === 'user'){
            userPic.src = pic;
        } else {
            computerPic.src = pic;
        }
        
        console.log(userPic.src +' after --' + pic);
       // console.log(computerPic.src +' after --' + pic);
}



function showStart() {

    userPic.src = "img/gameStart.png";
    computerPic.src = "img/gameStart.png";
}

showStart();
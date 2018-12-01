var wins = 0;
var losses = 0;
var currentScore = 0;
var targetNum = Math.floor(Math.random() * (120-19) + 1);
var blueValue = Math.floor(Math.random() * (12-1) + 1);
var redValue = Math.floor(Math.random() * (12-1) + 1);
var greenValue = Math.floor(Math.random() * (12-1) + 1);
var adamValue = Math.floor(Math.random() * (12-1) + 1);


$(document).ready(function(){

    console.log("Blue:  " + blueValue);
    console.log("Red:  " + redValue);
    console.log("Green:  " + greenValue);
    console.log("Adamantium:  " + adamValue);

    $("#target").html("Target Score:  " + targetNum);

    function startGame(){
        targetNum = Math.floor(Math.random() * (120-19) + 1);
        blueValue = Math.floor(Math.random() * (12-1) + 1);
        redValue = Math.floor(Math.random() * (12-1) + 1);
        greenValue = Math.floor(Math.random() * (12-1) + 1);
        adamValue = Math.floor(Math.random() * (12-1) + 1);
        currentScore = 0;
        console.log("Blue:  " + blueValue);
        console.log("Red:  " + redValue);
        console.log("Green:  " + greenValue);
        console.log("Adamantium:  " + adamValue);
        $("#target").html("Target Score:  " + targetNum);
        $("#current").html("Current Score:  " + currentScore);
        $("#wins").html("Wins:  " + wins);
        $("#losses").html("Losses:  " + losses);
    }

    function checkScore(){
        if (currentScore === targetNum){
            wins++;
            alert("You Win!  You have escaped certain doom.");
            startGame();
        } else if (currentScore > targetNum){
            losses++;
            alert("You Lose!  Unrelated: You have died of dysentery.");
            startGame();
        }
    }

    $("#blue-crys").click(function(){
        currentScore = blueValue + currentScore;
        $("#current").html("Current Score:  " + currentScore);
        checkScore();
    });

    $("#green-crys").click(function(){
        currentScore = greenValue + currentScore;
        $("#current").html("Current Score:  " + currentScore);
        checkScore();
    });

    $("#red-crys").click(function(){
        currentScore = redValue + currentScore;
        $("#current").html("Current Score:  " + currentScore);
        checkScore();
    });
     
    $("#adam-crys").click(function(){
        currentScore = adamValue + currentScore;
        $("#current").html("Current Score:  " + currentScore);
        checkScore();
    });
 
});    


showStart();
$(".tutorial").hide();

var winCounter = 0;
var genNum;
var numPlaying;
var countNumb;
var audioCountdown = new Audio('./sounds/countdown.mp3');

function showTutorial(){
  document.body.style.background = "gray";
  $(".tutorial").show();
  $(".countdown").hide();
}

function closeTutorial(){
  document.body.style.background = "white";
  $(".tutorial").hide();
  $(".countdown").show();
}

function clearMsg(){
  $(".countdown").text("");
  $(".result").text("");
  $("#countNumb").text("?");
}

function showStart(){
  $("#btnPause").hide();
  $("#btnStart").show();
}

function showPause(){
  $("#btnStart").hide();
  $("#btnPause").show();
}

function resultMsg(result){
  $("#btnStart").prop("disabled",false);
  showStart();

  if(result == 0){ 
    winCounter = 0;
    $(".winCounter").text("");
    $(".result").text("You missed it!");
    return;
  }

  winCounter++;
  $(".result").text("You did it!");
  $(".winCounter").text(`${winCounter}`);
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Countdown(){
  clearMsg();
  genNum = Math.floor(Math.random() * 10);
  $("#genNumb").text(genNum);
  $("#btnStart").prop("disabled",true);

  var countDown = 3;
  var counterName = function(){
    $(".countdown").text(countDown);
    countDown--;
    audioCountdown.play();

    if(countDown < 0) {
      clearInterval(x);
      Start();
    }
  };
  var x = setInterval(counterName, 1000);
}

function Start(){
  clearMsg();
  showPause();
  $(".countdown").text("NOW");

  countNumb = randomNum(10,15);
  $("#countNumb").text(countNumb);

  numPlaying = setInterval(function() {
    countNumb--;
    $("#countNumb").text(countNumb);
    if(countNumb == (genNum - 5)){
      clearInterval(numPlaying);
      resultMsg(0);
    }
  }, 200);
}

function Pause(){
  clearInterval(numPlaying); 
  if(genNum != countNumb){
    resultMsg(0);
    return;
  }
  resultMsg(1);
}

/*document.getElementById("pause").style.display = "none";
var value1 = Math.floor(Math.random() * 10);
document.getElementById("numero").innerHTML = value1;

var x;
var countDownDate;

function start(){
  document.getElementById("boa").innerHTML = "";
  document.getElementById("start").style.display = "none";
  document.getElementById("pause").style.display = "unset";
    
  countDownDate = 20;

  x = setInterval(function() {
    countDownDate--;
    document.getElementById("demo").innerHTML = countDownDate;
  }, 200);
}

function pause(){
	document.getElementById("start").style.display = "unset";
  document.getElementById("pause").style.display = "none";
    	
	clearInterval(x);
    if(value1 == countDownDate){
    	document.getElementById("boa").innerHTML = "parabéns!";
	  }else{
      document.getElementById("boa").innerHTML = "ruim!";
    }  
}*/